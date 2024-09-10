"use client";
import React, { useState, useEffect } from "react";
import "../../css/slider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const RotateBox = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      content:
        "World’s first and only Corporate Functions as a Service company. Your Partner-in-Growth",
    },
    {
      content:
        "World’s first and only Corporate Functions as a Service company. Your Partner-in-Growth",
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
    <>
      <img src="./Vector (2).png" alt="img" className="w-full" />
      <div className="hero top-section bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB] relative">
        <div className="container-cards text-center w-full px-4-5 mx-auto py-8 relative">
          <h1 className="text-center about-title text-4xl font-bold mb-4">
            CFaaS
          </h1>
          <p className="text-center text-lg mb-8">
            World first and only Corporate Functions as a Service company.
            <br />
            Your Partner-in-Growth
          </p>
          <div className="relative border border-black w-full max-w-screen-xl mx-auto">
            <div className="absolute -top-16 left-4 rotate-img-container z-10">
              <Image
                src="/Rectangle.png"
                alt="Rotated Box"
                width={200}
                height={200}
                className="rotate-img"
              />
            </div>

            <div className="slider slider-container overflow-hidden relative w-full h-full">
              <div
                className="slider-content flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    className="slide flex justify-between w-full h-full"
                    key={index}
                  >
                    <div
                      className={`slide-content flex-grow rotate-cards ${
                        index === 1 ? "second-slide-text" : ""
                      }`}
                    >
                      <h3 className="text-xl text-res">{slide.content}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="prev absolute top-1/2 left-2 transform -translate-y-1/2 text-white px-2 py-1"
                onClick={prevSlide}
              >
                <MdKeyboardArrowLeft color="white" size={50} />
              </button>
              <button
                className="next absolute top-1/2 right-2 transform -translate-y-1/2 text-white px-2 py-1"
                onClick={nextSlide}
              >
                <MdKeyboardArrowRight color="white" size={50} />
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

        <div className="container flex flex-col items-center py-12 mx-auto max-w-screen-xl">
          <div className="text-center mb-12 max-w-4xl">
            <h1 className="text-center about-title text-4xl font-bold mb-6">
              Have Questions?
            </h1>
            <button className="btn-gray-call mb-4">
              Schedule a call with us
            </button>
            <p className="paragraph">
              <a
                href="#"
                className="text-dark text-decoration-underline call-paragraph"
              >
                Click on the FAQs page to know more about how we can help you?
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RotateBox;
