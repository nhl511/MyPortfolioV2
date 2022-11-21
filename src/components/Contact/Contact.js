import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import InfoIcon from "@mui/icons-material/Info";
import emailjs from '@emailjs/browser';
import MuiAlert from "@mui/material/Alert";



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Contact() {
  const form = useRef();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zo0sjbk', 'template_g7hi10r', form.current, 'uqld6BL0NcH6EtY2i')
      .then((result) => {
          console.log(result.text);
          setOpen(true);
        }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <Grid container pb={7} pt={{ xs: 10, sm: 20 }} className="contact">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Grid item xs={12} sm={6} pl={{ xs: 2, sm: 15 }} pr={{ xs: 2 }}>
        <Box className="contact-title">
          <Typography variant="h4">Get in touch</Typography>

          <Typography variant="h6">
            Please leave your information. I will get back to you later.
          </Typography>
        </Box>

        <Card style={{background:'transparent'}}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            I received your message
          </Alert>
        </Snackbar>
          <CardContent>
          <form ref={form} onSubmit={sendEmail}>
              <Grid item pb={2}>
                <TextField
                              sx={{ input: { color: "white" } }}
                              focused
                  required
                  fullWidth
                  type="email"
                  name="user_email"
                  placeholder="* Email"
                  variant="standard"
                />
              </Grid>
              <Grid item pb={2}>
                <TextField
                              sx={{ input: { color: "white" } }}
                              focused

                  required
                  fullWidth
                  name="user_name"
                  placeholder="* Name"
                  variant="standard"

                />

              </Grid>

              <Grid item pb={2}>
                <TextField
              inputProps={{ style: { color: "white" } }}

                  fullWidth
                  name="message"
                  focused
                  required
                  placeholder="* Message"
                  multiline
                  rows={5}
                  variant="standard"
                />
              </Grid>

              <Button type="submit" fullWidth variant="contained" size="small">
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        pl={{ xs: 2, sm: 10 }}
        pr={{ xs: 2 }}
        pt={{ xs: 2 }}
      >
        <Box className="contact-title">
          <Typography variant="h4">Other ways to connect</Typography>
          <Typography variant="h6">
            Call, email, social networks - whatever works for you, I'll be here.
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={6} sm={12}>
            <Accordion className="contact-item">
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Button
                  size="small"
                  variant="text"
                  startIcon={<InfoIcon />}
                  endIcon={<ExpandMoreIcon />}
                  className="main-button-contact"
                >
                  Contact information
                </Button>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item xs={12}>
                    <Button
                      variant="text"
                      startIcon={<CallIcon />}
                      className="button-contact"
                    >
                      0915857246
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="text"
                      startIcon={<EmailIcon />}
                      className="button-contact"
                    >
                      longnguyen5112000@gmail.com
                    </Button>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={6} sm={12}>
            <Accordion className="contact-item">
              <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Button
                  size="small"
                  variant="text"
                  startIcon={<LinkIcon />}
                  endIcon={<ExpandMoreIcon />}
                  className="main-button-contact"
                >
                  social link
                </Button>
              </AccordionSummary>
              <AccordionDetails>
                <a href="https://www.facebook.com/hwanglong2k">
                <Button
                  size="large"
                  variant="text"
                  startIcon={<FacebookIcon />}
                  className="button-contact"
                />
                </a>
                <a href="https://github.com/vnracingboy?fbclid=IwAR2lX4cmxzKuCs1wGPYv9Q4-d6bEl9c7ETNG-HTdxXl8TY1u8w393klUzjQ">
                <Button
                  size="large"
                  variant="text"
                  startIcon={<GitHubIcon />}
                  className="button-contact"
                />
                                </a>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
