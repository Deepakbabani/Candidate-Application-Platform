import { Box, TextField, Grid } from "@mui/material";
import JobCard from "./components/JobCard";

const CandidateDashboard = () => {
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
                            <TextField
                              id="roles"
                              label="Roles"
                              variant="outlined"
                              fullWidth
                              placeholder="Roles"
                              className="select__input"
                            />
                          </Box>
                          <Box className="MuiBox-root css-b62m3t-container">
                            <TextField
                              id="number-of-employees"
                              label="Number Of Employees"
                              variant="outlined"
                              fullWidth
                              placeholder="Number Of Employees"
                              className="select__input"
                            />
                          </Box>
                          <Box className="MuiBox-root css-b62m3t-container">
                            <TextField
                              id="experience"
                              label="Experience"
                              variant="outlined"
                              fullWidth
                              placeholder="Experience"
                              className="select__input"
                            />
                          </Box>
                          <Box className="MuiBox-root css-b62m3t-container">
                            <TextField
                              id="remote"
                              label="Remote"
                              variant="outlined"
                              fullWidth
                              placeholder="Remote"
                              className="select__input"
                            />
                          </Box>
                          <Box className="MuiBox-root css-13cymwt-control">
                            <TextField
                              id="minimum-base-pay"
                              label="Minimum Base Pay Salary"
                              variant="outlined"
                              fullWidth
                              placeholder="Minimum Base Pay Salary"
                              className="select__input"
                            />
                          </Box>
                          <Box className="MuiBox-root css-j7qwjs">
                            <TextField
                              id="company-name"
                              label="Search Company Name"
                              variant="outlined"
                              fullWidth
                              placeholder="Search Company Name"
                              className="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"
                            />
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
                                <JobCard />
                                <JobCard />
                                <JobCard />
                              </Grid>
                            </Grid>
                          </Grid>
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

