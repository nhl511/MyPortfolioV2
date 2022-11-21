import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { projectData } from "../../data/ListOfProject";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const images = ["./assets/img/project1.png", "./assets/img/project2.png"];

export default function Project() {
  const NextArrow = ({ onClick }) => {
    return <ArrowForwardIosIcon onClick={onClick} className="arrow-next" />;
  };

  const PrevArrow = ({ onClick }) => {
    return <ArrowBackIosIcon onClick={onClick} className="arrow-prev" />;
  };

  var settings = {
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Grid container pb={{ xs: 40, sm: 5 }} pt={{xs:20, sm:10}} className="projects">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>


      <div className="carousel">
        <Slider {...settings}>
          {projectData.map((project) => (

            <Card sx={{ maxWidth: 800, pl:2, pt:2, pr:2 }} className="mycard">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={project.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} sm={4} pb={1} align="left">
                      <Typography variant="h6">Project</Typography>
                      <Typography variant="h4">{project.name}</Typography>

                    </Grid>
                    <Grid item xs={12} sm={4} pb={1} align="left">
                      <Typography variant="h6">Made with</Typography>
                      <Typography variant="h4">ReactJS / MUI</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} pb={1} align="left">
                      <a href={project.github} style={{textDecoration:'none'}}>
                <Button
                style={{color:'black'}}
                  size="small"
                  variant="text"
                  startIcon={<GitHubIcon />}
                >
                                        Source code

                </Button>
                                </a>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </div>
    </Grid>
  );
}
