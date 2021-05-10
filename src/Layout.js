import React from "react";
import { Navbar } from "./section/Navbar";
import { Footer } from "./section/Footer";
import LandingPage from "./pages/LandingPage";

export const Layout = () => {
  return (
    <div>
      <Navbar />

      <LandingPage />

      <Footer />
    </div>
  );
};
