import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import MaleIcon from "@mui/icons-material/Male";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pl: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <section className="about">


      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h4">
              Wow, a whole page just about me!
            </Typography>
            <Typography variant="h5">I build value through coding.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} pt={{xs:5, sm:12}}>
          <Grid container>
            <Grid item xs={12} sm={4} align='center'>
              <Grid container>
                <Grid item xs={12}>
                  {" "}
                  <img src="assets/img/dev.jpg" className="devimg" width="200" />
                </Grid>
                <Grid item xs={12} pt={2}>
                  {" "}
                  <img src="assets/img/signature.png" className="signatureimg" width="200" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  height: 224,
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  <Tab
                    style={{ color: "white" }}
                    {...a11yProps(0)}
                    icon={<PermIdentityIcon />}
                  />
                  <Tab
                    style={{ color: "white" }}
                    {...a11yProps(1)}
                    icon={<CodeIcon />}
                  />
                  <Tab
                    style={{ color: "white" }}
                    {...a11yProps(2)}
                    icon={<FavoriteIcon />}
                  />
                </Tabs>
                <TabPanel
                  value={value}
                  index={0}
                  align="center"
                  className="mytab1"
                >
                  <Stack width={{ xs: 299, sm: 650 }}>
                    <Item>
                      <Grid container align="left">
                        <Grid item xs={12}>
                          <Button
                            className="info-item"
                            variant="text"
                            size="large"
                            startIcon={<MaleIcon />}
                          >
                            gender: &nbsp;<b>male</b>
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className="info-item"
                            variant="text"
                            size="large"
                            startIcon={<ChildCareIcon />}
                          >
                            year of born:&nbsp;<b>2000</b>
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className="info-item"
                            variant="text"
                            size="large"
                            startIcon={<WorkIcon />}
                          >
                            Studying:&nbsp;<b>software Engineering</b>
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className="info-item"
                            variant="text"
                            size="large"
                            startIcon={<SchoolIcon />}
                          >
                            Study at:&nbsp;<b>FPT university</b>
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className="info-item"
                            variant="text"
                            size="large"
                            startIcon={<HomeIcon />}
                          >
                            Live in:&nbsp;<b>Ho Chi Minh City, Vietnam</b>
                          </Button>
                        </Grid>
                      </Grid>
                    </Item>
                  </Stack>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={1}
                  align="center"
                  className="mytab2"
                >
                  <Grid container></Grid>
                  <Stack width={{ xs: 299, sm: 500 }} >
                    <Item>
                      <Grid container>
                        <Grid item xs={4} sm={4}>
                          <Stack>
                            <Typography variant="h6">Front-end</Typography>
                            <Chip
                              label="ReactJS"
                              color="primary"
                              variant="outlined"
                            />
                            <Chip
                              label="MUI"
                              color="primary"
                              variant="outlined"
                            />
                            <Chip
                              label="Bootstrap"
                              color="primary"
                              variant="outlined"
                            />
                          </Stack>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                          <Stack>
                            <Typography variant="h6">Back-end</Typography>
                            <Chip
                              label="Java"
                              color="warning"
                              variant="outlined"
                            />
                          </Stack>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                          <Stack>
                            <Typography variant="h6">Database</Typography>
                            <Chip
                              label="SQL Sever"
                              color="success"
                              variant="outlined"
                            />
                          </Stack>
                        </Grid>
                      </Grid>
                    </Item>
                  </Stack>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={2}
                  align="center"
                  className="mytab3"
                >
                  <Stack width={{ xs: 200, sm: 700 }} spacing={2}>
                    <Item>
                      <Typography variant="h6" pt={5}>
                       I love coding
                      </Typography>
                    </Item>
                  </Stack>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} align="center" pt={{xs:0, sm:5}}>
          <Button
            variant="contained"
            size="large"
            color="success"
            endIcon={<DownloadIcon />}
          >
            Download my CV
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
