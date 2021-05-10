import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-cont">
      <Typography align="center">
        © {new Date().getFullYear()} All rights reserved. Designed by{" "}
        <b style={{ color: "#ffff" }}>NeeL</b>
      </Typography>
    </div>
  );
};
