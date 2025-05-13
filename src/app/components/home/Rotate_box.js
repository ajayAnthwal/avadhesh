"use client";
import React, { useState, useEffect } from "react";
import "../../css/slider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const RotateBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      content:
        "Our HR and Event Management teams brought team-building to life with a vibrant, achievement-focused day of celebration. Packed with engaging activities, the event strengthened connections and honored success. See how AvadheshCo’s expertise in HR and events creates memorable experiences that elevate team spirit and performance.",
      image: "/First-Event.png",
    },
    {
      content:
        "Our Sales and Marketing teams joined forces to help our client Locuz connect with CISOs through strategic meetings in Mumbai and Bangalore. From inviting key guests to crafting a landing page with event details, AvadheshCo delivered a seamless experience, showcasing the value of targeted relationship-building and precise marketing.",
      image: "/Second-Event.png",
    },
    {
      content:
        "Helping Locuz showcase AWS migration insights, our Sales, Event Management, and Marketing teams joined forces to create an impactful event experience. From personalized guest outreach to a captivating landing page detailing the agenda, we ensured every element aligned to engage and inform. Ready to elevate your next event?",
      image: "/Third-Event.png",
    },
    {
      content:
        "Imagine a launch where every digital detail aligns perfectly! For a theatre/café, our IT Support and Marketing teams delivered a custom website, secure bookings, automated messaging, and a powerful local reach through a strategic social media plan & some powerful offline campaigns. Discover how we elevate digital presence with every detail covered.",
      image: "/Fourth-Event.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <Image
        src="/Vector (2).png"
        alt="Vector Image"
        layout="responsive"
        width={800}
        height={600}
        className="w-full"
      />
      <div className="hero top-section bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB] relative">
        <div className="container-cards text-center w-full px-4 mx-auto py-8 relative">
          <h1 className="text-center about-title text-4xl font-bold mb-4">
            CFaaS
          </h1>
          <p className="text-center text-lg mb-8">
            World’s first and only Corporate Functions as a Service company.
            <br />
            Your Partner-in-Growth
          </p>

          <div
            className="relative border border-black w-full mx-auto"
            style={{ background: "#FFB055" }}
          >
            <div className="relative w-full mx-auto  container sm:max-w-screen-xl md:max-w-screen-2xl">
              <div className="flex items-center justify-between p-4 flex-col sm:flex-row">
                <button
                  className="text-white p-2 rounded-full mb-4 sm:mb-0"
                  onClick={prevSlide}
                  style={{ marginRight: "10px" }}
                >
                  <MdKeyboardArrowLeft size={81} />
                </button>

                <div className="flex w-full items-center justify-center mx-auto flex-col sm:flex-row">
                  <div className="relative w-full sm:w-1/3 h-full  mb-4 sm:mb-0 rotate-slider">
                    <Image
                      src={slides[currentIndex].image}
                      alt="Event Image"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover rounded-lg transform rotate-[2deg]"
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-center w-full sm:w-2/3 pl-6 text-left">
                    <p className="text-black text-lg">
                      {slides[currentIndex].content}
                    </p>
                  </div>
                </div>

                <button
                  className=" text-white p-2 rounded-full mt-4 sm:mt-0"
                  onClick={nextSlide}
                  style={{ marginLeft: "10px" }}
                >
                  <MdKeyboardArrowRight size={81} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col items-center py-12 mx-auto max-w-screen-xl px-2 md:px-0">
          <div className="text-center mb-12 max-w-4xl">
            <h1 className="text-center about-title text-4xl font-bold mb-6">
              Have Questions?
            </h1>
            <button className="btn-gray-call mb-4">
              Schedule a call with us
            </button>
            <div className="paragraph">
              <Link
                href="#"
                className="text-dark text-decoration-underline call-paragraph"
              >
                Click on the FAQs page to know more about how we can help you?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RotateBox;
