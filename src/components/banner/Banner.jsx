import React from "react";
import HeroSlider from "./slider/HeroSlider";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="conatiner-fluid">
        <HeroSlider />
      </div>
    </div>
  );
};

export default Banner;
