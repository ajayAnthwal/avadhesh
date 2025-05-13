"use client";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import FAQ from "@/app/components/contact_us/FAQ";
import Call_us from "../components/footer/Call_us";
import Image from "next/image";
import React, { useState } from "react";

const Carousel = () => {
  const brands = [
    { logo: "/Wheaton-Advisors.png", name: "Wheaton Advisors" },
    { logo: "/Synycs.png", name: "Synycs" },
    { logo: "/sipnscreen.png", name: "Sip n Screen" },
    { logo: "/Simtech.png", name: "Simtech" },
    { logo: "/Shi _ locuz-an-shi-company.png", name: "Locuz (An SHI Company)" },
    { logo: "/Sharma-Ji-Ka-Aata.png", name: "Sharma Ji Ka Aata" },
    { logo: "/rtds.png", name: "RTDS" },
    { logo: "/Quadra.png", name: "Quadra" },
    { logo: "/HT-Media-Group.png", name: "HT Media Group" },
    { logo: "/Esmario.png", name: "Esmario" },
    { logo: "/eficens.png", name: "Eficens" },
    { logo: "/Clymbr.png", name: "Clymbr" },
    { logo: "/Apollo-homecare.png", name: "Apollo Homecare" },
  ];

  const ITEMS_PER_VIEW = 5;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + ITEMS_PER_VIEW < brands.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div>
      <div
        className="relative w-full h-[300px] md:h-[500px] flex items-center"
        style={{
          backgroundImage: "url('/Contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div className=" text-left text-black container mx-auto">
          <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 pl-6"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>
            Contact Us
          </h3>
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col justify-between px-2 md:px-0">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in touch with us</h2>
              <p className="text-gray-600 mb-8 text-justify">
                Looking for customized solutions or more details about our CFaaS
                solutions? At AvadheshCo, we’re here to help you achieve
                operational excellence and accelerate growth with our flexible,
                outcome-driven models. Contact us today to explore how we can
                support your success!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 pb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-500">
                      Avadhesh India Advisory Services LLP <br /> Plot No. 1625,
                      Sri Sai Towers, Venkata <br /> Ramana Colony, KPHB,
                      Hyderabad, <br /> Telangana- 500085
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone No.</h4>
                    <p className="text-gray-500">+91 85559 47892</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-Mail</h4>
                    <p className="text-gray-500">hello@avadhesh.co</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg border border-black">
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 font-semibold"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="block mb-2 font-semibold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 font-semibold"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block mb-2 font-semibold"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </div>
                <button className="w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 py-8">
          <h2 className="text-center text-lg font-semibold mb-4">
            Trusted by these mega brands
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="text-black bg-white p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft size={20} />
            </button>
            <div className="overflow-hidden w-full max-w-4xl">
              <div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${
                    (startIndex * 100) / ITEMS_PER_VIEW
                  }%)`,
                }}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-1/5 p-2 flex items-center justify-center"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              disabled={startIndex + ITEMS_PER_VIEW >= brands.length}
              className="text-black bg-white p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        <Call_us />
        <FAQ />
      </div>
    </div>
  );
};

export default Carousel;
