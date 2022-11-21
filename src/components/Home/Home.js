import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <section className="home">
      <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
      <Grid container>
        <Grid item xs={12} md={6} xl={7} align="left">
          <Box className="home-content">
          <Typography variant="h2">Hi! I'm <span>fstackdev</span></Typography>

          <Typography className="asgas" variant="h5">I'm a Vietnamese <img src="assets/img/vnflag.png" className="flagicon"/> student who loves coding</Typography>
          <Grid container columnSpacing={2}>

          <Grid item>
            <Link to="./About" style={{textDecoration:'none'}}>
          <Button size="large" variant="contained" color="info" endIcon={<EmojiEmotionsIcon className="smileicon"/>}>
            <Typography variant="h6">
              <b>whoami</b>
            </Typography>
          </Button>
          </Link>
          </Grid>
          <Grid item>
          <Link to="./Contact" style={{textDecoration:'none'}}>
          <Button size="large" variant="outlined" color="info">
            <Typography variant="h6">
              let's connect
            </Typography>
          </Button>
          </Link>           
          </Grid>
          </Grid>
          </Box>
        </Grid>
         <Grid item xs={12} md={6} xl={5} align="left">
          <img src="assets/img/header-img.svg" className="home-img"/>

        </Grid> 
      </Grid>
    </section>
  );
}
