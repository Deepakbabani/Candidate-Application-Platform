import { Box, TextField, Grid } from "@mui/material";
import JobCard from "./components/JobCard";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchJobs } from "./redux/slices/JobSlice";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const CandidateDashboard = () => {
  const dispatch = useDispatch();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [items, setItems] = useState([]);

  const fetchJobsData = async (page) => {
    try {
      const res = await dispatch(fetchJobs(page)).unwrap();
      return res.jdList;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
  };

  const { data, loading, hasMore } = useInfiniteScroll(fetchJobsData);

  useEffect(() => {
    dispatch(fetchJobs(0))
      .unwrap()
      .then((res) => {
        setItems(res?.jdList || []);
      })
      .catch(() => setItems([]));
  }, []);

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data, setItems]);
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
                        <div className="profile-sidebar jd-filters-container MuiBox-root css-1yxoz1i">
                          <Box className="MuiBox-root css-b62m3t-container">
                            <Select
                              id="roles"
                              className="select__input"
                              closeMenuOnSelect={false}
                              isMulti
                              placeholder="Roles"
                              options={options}
                            />
                          </Box>
                          <Box className="MuiBox-root css-b62m3t-container">
                            <Select
                              id="number-of-employees"
                              className="select__input"
                              closeMenuOnSelect={false}
                              isMulti
                              placeholder="Number Of Employees"
                              options={options}
                            />
                          </Box>
                          <Box className="MuiBox-root css-b62m3t-container">
                            <Select
                              id="experience"
                              className="select__input"
                              closeMenuOnSelect={false}
                              isMulti
                              placeholder="Experience"
                              options={options}
                            />
                          </Box>
                          <Box className="MuiBox-root css-b62m3t-container">
                            <Select
                              id="remote"
                              className="select__input"
                              closeMenuOnSelect={false}
                              isMulti
                              placeholder="Remote"
                              options={options}
                            />
                          </Box>
                          <Box className="MuiBox-root css-13cymwt-control">
                            <Select
                              id="minimum-base-pay"
                              className="select__input"
                              closeMenuOnSelect={false}
                              isMulti
                              placeholder="Minimum Base Pay Salary"
                              options={options}
                            />
                          </Box>
                          <Box className="MuiBox-root css-j7qwjs">
                            <div className="MuiFormControl-root MuiTextField-root css-1upf982">
                              <TextField
                                id="companyName"
                                name="companyName"
                                placeholder="Search Company Name"
                                variant="outlined"
                                className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1d5t4lq"
                                inputProps={{
                                  className:
                                    "MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq",
                                }}
                                value=""
                                autoComplete="off"
                                aria-invalid="false"
                              />
                            </div>
                          </Box>
                        </div>
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
                                {items.map((item, index) => (
                                  <JobCard key={index} />
                                ))}
                              </Grid>
                            </Grid>
                          </Grid>
                          {loading && <div className="spinner">Loading...</div>}
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

