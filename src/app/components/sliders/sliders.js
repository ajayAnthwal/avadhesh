"use client";
import React, { useState, useEffect } from "react";
import "../../css/slider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content: "Lorem Ipsum is simply dummy text of the printing typesetting.",
      buttonText: "Learn more",
      backgroundImage: "/slider-images.jpg",
    },
    {
      id: 2,
      content: "Lorem Ipsum is simply dummy text of the printing typesetting.",
      buttonText: "Learn More",
      backgroundImage: "/slider-images-2.png",
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
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          className="slider-content"
          key={index}
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transform: `translateY(${currentSlide === index ? 0 : 50}px)`,
            transition: "opacity 0.5s ease, transform 0.5s ease",
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            position: currentSlide === index ? "relative" : "absolute",
          }}
        >
          <div className="container m-auto">
            <div className="slide-text">
              <div className="d-flex flex-column">
                <h3 className="w-241 mb-20">{slide.content}</h3>
                <button className="btn-gray btn-res text-xs">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

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
  );
};

export default Sliders;
