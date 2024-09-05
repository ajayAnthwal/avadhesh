"use client";
import React, { useState, useEffect } from "react";
import "../css/slider.css";
import Home_page from "../components/home/Home_page";
import Industries from "../components/home/Industries";
import Rotate_box from "../components/home/Rotate_box";
import Sliders from "../components/sliders/sliders";

const Hero = () => {
  return (
    <div>
      <Sliders />
      <Home_page />
      <Industries />
      <Rotate_box />
    </div>
  );
};

export default Hero;
