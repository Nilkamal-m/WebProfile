import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./Home.css";
import Propic from "../asset/img/propic.jpg";
import ProgressBar from "@ramonak/react-progress-bar";

const serviceItem = [
  {
    icon: "fab fa-react",
    title: "Front-end React",
    bodyText: "I have been working on React Js for 6 months.",
  },
  {
    icon: "fas fa-pencil-ruler",
    title: "UI/UX Design",
    bodyText: "We will make you a web page more attractive.",
  },
  {
    icon: "fas fa-drafting-compass",
    title: "Illustrator",
    bodyText: "I have been working on Illustrator for 1 year.",
  },
  {
    icon: "fab fa-java",
    title: "Java",
    bodyText:
      "I have been working on Java base Spring Boot framework for 2 months.",
  },
];

export const Home = () => {
  return (
    <Paper>
      <div className="right-paper-cont">
        <div className="title-head">
          <span></span>
          <Typography variant="h5">About</Typography>
        </div>
        <Typography gutterBottom component="h6">
          Started earnest brother believe an exposed so. Me he believing
          daughters if forfeited at furniture. Age again and stuff downs spoke.
          Late hour new nay able fat each sell. Nor themselves age introduced
          frequently use unsatiable devonshire get. They why quit gay cold rose
          deal park. One same they four did ask busy. Reserved opinions fat him
          nay position. Breakfast as zealously incommode do agreeable furniture.
          One too nay led fanny allow plate.
        </Typography>
        <Typography component="h6">
          Quick six blind smart out burst. Perfectly on furniture dejection
          determine my depending an to. Add short water court fat. Her bachelor
          honoured perceive securing but desirous ham required. Questions
          deficient acuteness to engrossed as. Entirely led ten humoured
          greatest and yourself. Besides ye country on observe. She continue
          appetite endeavor she judgment interest the met. For she surrounded
          motionless fat resolution may.
        </Typography>
      </div>

      <div className="paper-service">
        <div className="title-head">
          <span></span>
          <Typography variant="h5">This is what I do</Typography>
        </div>
        <Grid container spacing={2}>
          {serviceItem.map((item, i) => (
            <Grid item xs={6} sm={3}>
              <div>
                <Card>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <a style={{ fontSize: "50px" }}>
                      <i class={item.icon}></i>
                    </a>
                    <Typography gutterBottom>{item.title}</Typography>
                    <Typography
                      variant="caption"
                      align="center"
                      style={{ color: "#787878" }}
                    >
                      {item.bodyText}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="skills-cont">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className="title-head">
              <span></span>
              <Typography variant="h5">Code Skills</Typography>
            </div>

            <div className="progress-bar">
              <Typography variant="h6" gutterBottom>
                JavaScript
              </Typography>
              <ProgressBar bgColor="#ffc107" completed={60} />
              <Typography variant="h6" gutterBottom>
                Java
              </Typography>
              <ProgressBar bgColor="#28a745" completed={50} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="title-head">
              <span></span>
              <Typography variant="h5">Design Skills</Typography>
            </div>
            <div className="progress-bar">
              <Typography variant="h6" gutterBottom>
                HTML
              </Typography>
              <ProgressBar bgColor="#dc3545" completed={80} />
              <Typography variant="h6" gutterBottom>
                CSS
              </Typography>
              <ProgressBar
                bgColor="#17a2b8"
                transitionTimingFunction="ease"
                completed={70}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};
