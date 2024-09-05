"use client";
import React, { useState, useEffect } from "react";
import '../../css/slider.css';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const RotateBox = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      content: "World’s first and only Corporate Functions as a Service company. Your Partner-in-Growth ",
    },
    {
      content: "World’s first and only Corporate Functions as a Service company. Your Partner-in-Growth ",
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
    <div className="hero top-section bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
      <div className="container-cards text-center w-full   px-4-5 mx-auto py-8">
          <h1 className="text-center about-title text-4xl font-bold mb-4">
            Latest Highlight
          </h1>
          <p className="text-center text-lg mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard.
          </p>
    <div className="relative">
      <div className="slider slider-container overflow-hidden relative w-full h-full">
        <div
          className="slider-content flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              className="slide flex justify-around w-full h-full rotate-cards"
              key={index}
            >
              <div className="flex-none">
                <div className="rotated-box bg-gray-500 w-32 h-32 transform rotate-45"></div>
              </div>
              <div className="flex-grow text-center">
                <h3 className="text-xl">{slide.content}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          className="prev absolute top-1/2 left-2 transform -translate-y-1/2 text-white px-2 py-1"
          onClick={prevSlide}
        >
         <MdKeyboardArrowLeft />

        </button>
        <button
          className="next absolute top-1/2 right-2 transform -translate-y-1/2  text-white px-2 py-1"
          onClick={nextSlide}
        >
         <MdKeyboardArrowRight />
        </button>

        <div className="dots absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot w-3 h-3 rounded-full bg-gray-300 ${
                index === currentSlide ? "bg-gray-800" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className="container">
        <div className="text-center mb-4 schedule">
        <h1 className="text-center about-title text-4xl font-bold mb-4">Have Questions?</h1>
          <button className="btn-gray-call">
            Schedule a call with us
          </button>
          <p className="paragraph">
            <a href="#" className="text-dark text-decoration-underline call-paragraph"
              >Click on the FAQs page to know more about how we can help you?</a
            >
          </p>
        </div>
        </div>
    </div>
  );
};

export default RotateBox;
