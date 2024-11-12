"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const AvatarsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxToShow, setMaxToShow] = useState(3);

  const avatars = [
    {
      id: 1,
      name: "Shristi Shrivastava",
      title: "Digital Marketing Manager",
      img: "/1.png",
    },
    {
      id: 2,
      name: "Arun S",
      title: "Digital Marketing Executive",
      img: "/6.png",
    },
    {
      id: 3,
      name: "Adarsh Kangra",
      title: "UI/UX Designer",
      img: "/11.png",
    },
    {
      id: 4,
      name: "Samson Paul",
      title: "Customer Advisor - Tech",
      img: "/3.png",
    },
    {
      id: 5,
      name: "Naina",
      title: "Lead - Strategic Initiatives",
      img: "/5.png",
    },
    {
      id: 6,
      name: "Bushra Mansoori",
      title: "Customer Advisor (ISR)",
      img: "/9.png",
    },
    {
      id: 7,
      name: "Meenakshi Perumal",
      title: "Customer Advisor ",
      img: "/7.png",
    },
    {
      id: 8,
      name: "Jyoti Rehal",
      title: "Customer Advisor",
      img: "/8.png",
    },
    {
      id: 9,
      name: "Richa Gupta",
      title: "Business Analyst",
      img: "/10.png",
    },
    {
      id: 10,
      name: "Aditi Singh",
      title: "Manager - Cloud Sales",
      img: "/Aditi-Singh.png",
    },
    {
      id: 11,
      name: "Apurva",
      title: "Sr. Manager - CRM & Staffing",
      img: "/Apurva.png",
    },
    {
      id: 12,
      name: "Malavika Batchu",
      title: "Sr. Business Manager",
      img: "/Malavika-Batchu.png",
    },
    {
      id: 13,
      name: "Kannha Salooja",
      title: "SR. Project Manager",
      img: "/Kannha.png",
    },
    {
      id: 14,
      name: "Muniraj P",
      title: "Sr. Customer Advisor -Tech",
      img: "/MuniRaj.png",
    },
    {
      id: 15,
      name: "Shashikant P",
      title: "Co-founder",
      img: "/Shashikant.png",
    },
    {
      id: 16,
      name: "Shubham Belorkar",
      title: "Customer Advisor - Tech",
      img: "/Shubham.png",
    },
    {
      id: 17,
      name: "Rohit Thakur",
      title: "Creative Design Manager",
      img: "/Rohit.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setMaxToShow(window.innerWidth >= 640 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalAvatars = avatars.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + maxToShow >= totalAvatars ? 0 : prevIndex + maxToShow
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - maxToShow < 0
        ? totalAvatars - maxToShow
        : prevIndex - maxToShow
    );
  };

  return (
    <>
      <Image
        src="/Vector (1).png"
        alt="Background"
        width={1920}
        height={1080}
        className="w-full"
        priority
      />
      <section className="py-12 bg-gradient-to-b from-[#FFF1B9] to-[#FFF1B9] px-4-5">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Meet the AvaStars</h2>
          <div className="flex items-center justify-between">
            <AiOutlineLeft
              size={30}
              className="cursor-pointer"
              onClick={goToPrev}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full px-4">
              {avatars
                .slice(currentIndex, currentIndex + maxToShow)
                .map((member) => (
                  <div
                    key={member.id}
                    className="border-2 border-gray-300 rounded-lg shadow-lg p-4 text-center bg-white"
                  >
                    <div className="w-full h-[23rem] relative mb-4">
                      <Image
                        src={member.img}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                    <a
                      href="#"
                      className="flex justify-center items-center text-blue-700 mt-2"
                    >
                      <FaLinkedin size={24} style={{ color: "black" }} />
                    </a>
                  </div>
                ))}
            </div>
            <AiOutlineRight
              size={30}
              className="cursor-pointer"
              onClick={goToNext}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AvatarsSection;
