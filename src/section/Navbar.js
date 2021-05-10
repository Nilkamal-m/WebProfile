import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Social } from "../component/Social";
import "./Navbar.css";

const MenuItem = [
  {
    mName: "RESUME",
    url: "/resume",
  },
  {
    mName: "PORTFOLIO",
    url: "/portfolio",
  },
  {
    mName: "BLOG",
    url: "/blog",
  },
  {
    mName: "CONTACT",
    url: "/contact",
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="navbar-cont">
        <Grid container alignItems="center" justify="space-between">
          <Grid item sm={8}>
            <div className="navbar-component">
              <Link to="/">
                <a className="nav-home-icon">
                  <i class="fas fa-home"></i>
                </a>
              </Link>
              <div className={open ? "main-nav is-open" : "main-nav"}>
                <ul className="nav-menu">
                  {MenuItem.map((item, i) => (
                    <li key={i}>
                      <Link to={item.url} style={{ textDecoration: "none" }}>
                        <a onClick={handleClose} className="nav-menu-link">
                          {item.mName}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className="social-menu">
              <Grid container alignItems="center" styles={{}}>
                <Grid item sm={6}>
                  <Social />
                </Grid>
                <Grid item sm={6}>
                  <a className="ham-bars-menu" onClick={handleClick}>
                    <i
                      class={
                        open
                          ? "fas fa-times open-main-nav is-open"
                          : "fas fa-bars"
                      }
                    ></i>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
