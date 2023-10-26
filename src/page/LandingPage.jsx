import React from "react";
import Header from "../parts/Header";
import { useLocation } from "react-router-dom";
import landingPage from "../json/landingPage.json";
import Hero from "../parts/Hero";

function LandingPage(props) {
  const location = useLocation();

  return (
    <>
      <Header location={location} />
      <Hero data={landingPage.hero} />
    </>
  );
}

export default LandingPage;
