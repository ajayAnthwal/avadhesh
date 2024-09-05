"use client";
import React, { useState, useEffect } from "react";
import "../css/slider.css";
import Home_page from "../components/home/Home_page";
import Industries from "../components/home/Industries";
import Rotate_box from "../components/home/Rotate_box";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      content: "Lorem Ipsum is simply dummy text of the printing typesetting.",
      buttonText: "",
    },
    {
      content: "Lorem Ipsum is simply dummy text of the printing typesetting.",
      buttonText: "",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <div className="slider">
        <div
          className="slider-content"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="d-flex flex-column">
                <h3 className="w-241 mb-20">{slide.content}</h3>
                <button className="btn-gray btn-res">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        <button className="prev" onClick={prevSlide}>
        <MdKeyboardArrowLeft />
        </button>
        <button className="next" onClick={nextSlide}>
        <MdKeyboardArrowRight />
        </button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <Home_page />
      <Industries />
      <Rotate_box />
    </div>
  );
};

export default Hero;
