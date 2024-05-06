import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import JobCard from "./components/JobCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { fetchJobs, setJobsList } from "./redux/slices/JobSlice";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import FilterContainer from "./components/FilterContainer";

const CandidateDashboard = () => {
  const dispatch = useDispatch();
  const { jobsData, filters } = useSelector((state) => state.job);

  const fetchJobsData = async (page) => {
    // calling apis using redux toolkit
    try {
      const res = await dispatch(fetchJobs(page)).unwrap();
      return res.jdList;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
  };

  // A custom hook for infinite scrolling
  const { data, loading, hasMore } = useInfiniteScroll(fetchJobsData);

  const filterJobsData = useMemo(() => {
    // Memoized function to filter jobsData based on filters
    let filterData = jobsData;
    Object.keys(filters).forEach((key) => {
      // Iterate through each filter and apply corresponding filtering logic
      const value = filters[key];
      if (value) {
        const values = Array.isArray(value)
          ? value.map((item) => item.value)
          : value.value;
        switch (key) {
          case "jobRole":
            filterData = filterData.filter((item) =>
              values.includes(item?.jobRole)
            );
            break;
          case "minExp":
            filterData = filterData.filter((item) => item.minExp <= values);
            break;
          case "location":
            filterData = filterData.filter((item) => {
              if (values.includes("remote") && values.includes("in-office")) {
                return item;
              } else if (values.includes("in-office")) {
                return item.location !== "remote";
              } else {
                return values.includes(item.location);
              }
            });
            break;
          case "minJdSalary":
            filterData = filterData.filter(
              (item) => item.minJdSalary >= values
            );
            break;
          case "companyName":
            filterData = filterData.filter((item) =>
              item.companyName.toLowerCase().includes(value.toLowerCase())
            );
            break;
          default:
            break;
        }
      }
    });
    return filterData;
  }, [jobsData, filters]);

  useEffect(() => {
    dispatch(fetchJobs(0))
      .unwrap()
      .then((res) => {
        dispatch(setJobsList(res?.jdList || []));
      })
      .catch(() => dispatch(setJobsList([])));
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(setJobsList(data));
    }
  }, [data, dispatch]);
  return (
    <main>
      <Box className="MuiBox-root css-1nzysqx">
        <Box className="MuiBox-root css-17zjs1">
          <Box className="MuiBox-root css-7hv969">
            <div className="MuiBox-root css-1o3oomb">
              <div
                id="candidate-dashboard"
                className="body-container MuiBox-root css-1hq54lz"
              >
                <div className="" data-rttabs="true">
                  <div
                    role="tabpanel"
                    id="panel:r6:1"
                    aria-labelledby="tab:r6:1"
                    className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                  >
                    <div id="active-jobs">
                      <Box className="MuiBox-root css-xzgtof">
                        <FilterContainer />
                        <div>
                          <Grid
                            container
                            spacing={3}
                            className="lay-container css-1jdzlpg"
                          >
                            <Grid item xs={12} className="css-15j76c0">
                              <Grid
                                container
                                spacing={3}
                                className="css-1h77wgb"
                                style={{
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              >
                                {filterJobsData.map((item, index) => (
                                  <JobCard key={index} jobData={item} />
                                ))}
                              </Grid>
                            </Grid>
                          </Grid>
                          {loading && <div className="spinner">Loading...</div>}
                          {filterJobsData.length === 0 && (
                            <Card sx={{ textAlign: "center", marginTop: 4 }}>
                              <CardContent>
                                <Typography variant="body1">
                                  No data found
                                </Typography>
                              </CardContent>
                            </Card>
                          )}
                          {!loading && !hasMore && <div>All items loaded</div>}
                        </div>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default CandidateDashboard;

