import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <Paper>
      <div className="right-paper-cont">
        <div className="title-head">
          <span></span>
          <Typography variant="h5">PortFolio</Typography>
        </div>
        <Grid container wrap="nowrap">
          <Grid item xs={12} sm={4}>
            <Skeleton variant="rect" width={210} height={118} />
            <Box pt={0.5}>
              <Skeleton width={210} />
              <Skeleton width="60%" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skeleton variant="rect" width={210} height={118} />
            <Box pt={0.5}>
              <Skeleton width={210} />
              <Skeleton width="60%" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skeleton variant="rect" width={210} height={118} />
            <Box pt={0.5}>
              <Skeleton width={210} />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};
