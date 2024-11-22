"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "../../css/slider.css";

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content:
        "Launching with Purpose Performance Marketing Strategies that Strike Gold",
      buttonText: "Launch your business to new heights with us!",
      backgroundImage: "/Homepage-Hero-Banner.png",
    },
    {
      id: 2,
      content: "Strategies that Attract Top Talents",
      buttonText: "Create Your Winning Strategy Today!",
      backgroundImage: "/Homepage-Hero-Banner-2.png",
    },
    {
      id: 3,
      content:
        "Smarter Risk Management: How Startups and SMBs Can Harness AI and Data Analytics",
      buttonText: "Transform your approach to risk management today!",
      backgroundImage: "/Homepage-Hero-Banner-3.png",
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
    <div className="relative overflow-hidden w-full h-[500px] md:h-[500px] z-0">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center h-full px-6 container mx-auto">
            <div className="text-left text-black">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>
                {slide.content}
              </h3>
              <button className="mt-4 px-4 py-2 bg-white text-black border border-black rounded-md text-sm md:text-base">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

<button
    className="absolute left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none z-20
               top-[80%] md:top-1/2"
    onClick={prevSlide}
  >
    <MdKeyboardArrowLeft size={24} />
  </button>

  {/* Right Arrow */}
  <button
    className="absolute right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none z-20
               top-[80%] md:top-1/2"
    onClick={nextSlide}
  >
    <MdKeyboardArrowRight size={24} />
  </button>

      <div className="absolute bottom-4 left-6 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
