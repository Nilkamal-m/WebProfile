import React from "react";
import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import "./Home.css";
import Propic from "../asset/img/propic.jpg";
import Cv from "../asset/pdf/NilkamalMahatoResume.pdf";
import { Home } from "./Home";
import { Resume } from "./Resume";
import { Portfolio } from "./Portfolio";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Switch, Route, Router } from "react-router-dom";
import FileSaver from "file-saver";

const ProfileInfo = [
  {
    text: "",
  },
  {
    textHead: "Name: ",
    text: "Nilkamal Mahato",
  },
  {
    textHead: "DOB: ",
    text: "1st December 1997",
  },
  {
    textHead: "Job: ",
    text: "React Developer",
  },

  {
    textHead: "Email: ",
    text: "mahato.nilkamal@outlook.com",
  },
];

const LandingPage = () => {
  const saveFile = () => {
    FileSaver.saveAs(`${Cv}`, "NilkamalMahatoResume.pdf");
  };

  return (
    <div className="home-main-cont">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className="home-cont">
            <img
              src={Propic}
              style={{
                borderRadius: "50%",
                height: "100px",
                marginTop: "20px",
              }}
            ></img>
            <Typography variant="h5">It's NeeL</Typography>
            <span>Frontend Developer</span>
            <ul className="profile-info">
              {ProfileInfo.map((item, i) => (
                <li key={i}>
                  <strong>
                    {item.textHead}
                    <Typography variant="caption">{item.text}</Typography>
                  </strong>
                </li>
              ))}
            </ul>
            <button className="btn" onClick={saveFile}>
              Download Cv<i class="fas fa-cloud-download-alt"></i>
            </button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Router></Router>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
