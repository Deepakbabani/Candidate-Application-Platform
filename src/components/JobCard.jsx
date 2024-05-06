import {
  Box,
  Paper,
  Typography,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import { showTitleCase } from "../utils/utils";

const JobCard = ({ jobData }) => {
  //here jobData contains job details
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      className="card-body-grid-parent css-170ukis"
    >
      <Paper
        elevation={1}
        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root card-body css-9zecu3"
      >
        <Typography
          variant="body1"
          className="funding-info funding-info-dummy"
        />
        <Box className="MuiBox-root css-103zer2">
          <Box className="MuiBox-root css-ntgrxp"></Box>
        </Box>
        <CardContent className="MuiCardContent-root css-1go74o8">
          <Box className="MuiBox-root css-1mrd89u">
            <img
              className="MuiBox-root css-bj12qo"
              src={jobData?.logoUrl || ""}
              alt="logo"
            />
            <div>
              <div className="info-container">
                <Typography variant="h3" className="MuiBox-root css-rulwqv">
                  {jobData?.companyName}
                </Typography>
                <Typography variant="h2">
                  {showTitleCase(jobData?.jobRole)}
                </Typography>
              </div>
              <Typography variant="subtitle1" className="cards-sub-text">
                {showTitleCase(jobData?.location)}
              </Typography>
            </div>
          </Box>
          <Typography
            variant="body2"
            className="MuiTypography-root MuiTypography-body2 card-salary css-361mbm"
          >
            Estimated Salary: ₹
            {jobData?.minJdSalary && `${jobData?.minJdSalary} -`}
            {jobData?.maxJdSalary} LPA
            <span aria-label="Offered salary range" className="">
              {" "}
              ✅
            </span>
            <br />
          </Typography>
          <div className="jd-link-container">
            <div className="hard-lang-container" />
          </div>
          <Box className="MuiBox-root css-56jvne">
            <Box className="MuiBox-root css-0">
              <Typography
                variant="body1"
                className="MuiTypography-root MuiTypography-body1 css-1hw7dw8"
              >
                About Company:
              </Typography>
              <Box className="MuiBox-root css-1m7bgf1">
                <Typography variant="body1">
                  <strong>About us</strong>
                </Typography>
                <Typography variant="body1">
                  <span style={{ fontWeight: 400 }}>
                    {jobData?.jobDetailsFromCompany}
                  </span>
                </Typography>
                <Typography variant="body1">
                  <span style={{ fontWeight: 400 }}>
                    Our POS has a built-in CRM, allowing car washes to take
                    advantage of their customer transaction history in order to
                    funnel customers into subscriptions and higher margin wash
                    packages.
                  </span>
                  <span style={{ fontWeight: 400 }}>.</span>
                </Typography>
                <Typography variant="body1">&nbsp;</Typography>
                <Typography variant="body1">
                  <strong>Founder/Recruiter profiles:</strong>
                </Typography>
                <Typography variant="body1">
                  <a href="https://www.linkedin.com/in/chirag-singh-toor-94713aa7/">
                    <span style={{ fontWeight: 400 }}>Chirag Singh Toor</span>
                  </a>
                </Typography>
              </Box>
              <Typography
                variant="body1"
                className="MuiTypography-root MuiTypography-body1 css-1yg3a6w"
              >
                About Role:
              </Typography>
              <Box className="MuiBox-root css-1m7bgf1">
                <Typography variant="body1">
                  <strong>Overview</strong>
                </Typography>
                <Typography variant="body1">
                  <span style={{ fontWeight: 400 }}>Company name: </span>
                  <strong>FlexWash Technologies </strong>
                  <span style={{ fontWeight: 400 }}>| HQ Location: </span>
                  <strong>San Jose, California</strong>
                  <strong> | </strong>
                  <a href="https://www.flexwashtech.com/">
                    <strong>Website</strong>
                  </a>
                  <strong> | </strong>
                  <a href="https://www.linkedin.com/company/flexwashtech/about/">
                    <strong>LinkedIn</strong>
                  </a>
                </Typography>
                <Typography variant="body1">&nbsp;</Typography>
                <Typography variant="body1">
                  <strong>Role: Founding Engineer&nbsp;</strong>
                </Typography>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <span style={{ fontWeight: 400 }}>
                      Salary: Rs. 30 -60 lakhs per annum
                    </span>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <span style={{ fontWeight: 400 }}>
                      Experience: 5+ years
                    </span>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <span style={{ fontWeight: 400 }}>
                      Location: Remote&nbsp;
                    </span>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <span style={{ fontWeight: 400 }}>Type: Full-time</span>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
          <div className="MuiBox-root css-11repv5">
            <a href="/flexwash-technologies-senior-engineer?candidateId=U2FsdGVkX1+GltCDgISkZA6ft6DQqU+mhGOMrgLy7/FNBtz5VqadL768o9f3m1dS">
              View job
            </a>
          </div>
          {jobData?.minExp && (
            <div className="info-container poc-info-container">
              <Typography variant="h3" style={{ marginTop: 10 }}>
                Minimum Experience
              </Typography>
              <Typography variant="h2">{jobData?.minExp} years</Typography>
            </div>
          )}
        </CardContent>
        <div className="status-container MuiBox-root css-0">
          <div className="MuiBox-root css-q40y17">
            <Button
              variant="text"
              color="primary"
              className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-1dyt7kc"
              tabIndex={0}
              type="button"
              id="custom-btn"
              style={{
                width: "100%",
                backgroundColor: "rgb(85, 239, 196)",
                color: "rgb(0, 0, 0)",
                fontWeight: 500,
                padding: "8px 18px",
              }}
            >
              ⚡ Easy Apply
            </Button>
          </div>
          <div className="MuiBox-root css-q40y17">
            <Button
              variant="text"
              color="primary"
              className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-1dyt7kc"
              tabIndex={0}
              type="button"
              id="custom-btn"
              style={{
                width: "100%",
                backgroundColor: "#1a73e8",
                color: "#fff",
                fontWeight: 500,
                padding: "8px 18px",
              }}
            >
              Unlock referral asks
            </Button>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

JobCard.propTypes = {
  jobData: PropTypes.object,
};

export default JobCard;
