import { Avatar, Box, Grid, Paper, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import "./Blog.css";

export const Blog = () => {
  return (
    <Paper>
      <div className="right-paper-cont">
        <div className="title-head">
          <span></span>
          <Typography variant="h5">Blog</Typography>
        </div>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Box margin={1}>
                <Skeleton variant="circle">
                  <Avatar />
                </Skeleton>
              </Box>
              <Box width="100%">
                <Skeleton width="100%">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
            </Box>
            <Skeleton variant="rect" width="100%">
              <div style={{ paddingTop: "57%" }} />
            </Skeleton>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Box margin={1}>
                <Skeleton variant="circle">
                  <Avatar />
                </Skeleton>
              </Box>
              <Box width="100%">
                <Skeleton width="100%">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
            </Box>
            <Skeleton variant="rect" width="100%">
              <div style={{ paddingTop: "57%" }} />
            </Skeleton>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Box margin={1}>
                <Skeleton variant="circle">
                  <Avatar />
                </Skeleton>
              </Box>
              <Box width="100%">
                <Skeleton width="100%">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
            </Box>
            <Skeleton variant="rect" width="100%">
              <div style={{ paddingTop: "57%" }} />
            </Skeleton>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};
