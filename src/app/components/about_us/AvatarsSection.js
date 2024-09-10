"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

const AvatarsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxToShow, setMaxToShow] = useState(1);

  const avatars = [
    { id: 1, img: "/developer.webp" },
    { id: 2, img: "/developer.webp" },
    { id: 3, img: "/developer.webp" },
    { id: 4, img: "/" },
    { id: 5, img: "/developer.webp" },
    { id: 6, img: "/developer.webp" },
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
      <img src="./Vector (1).png" alt="img" className="w-full" />
      <section className="py-12 bg-gradient-to-b from-[#FFF1B9] to-[#FFF1B9] px-4-5">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Meet the AvaStars</h2>
          <div className="flex items-center justify-between">
            <AiOutlineLeft
              size={30}
              className="cursor-pointer"
              onClick={goToPrev}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full px-4">
              {avatars
                .slice(currentIndex, currentIndex + maxToShow)
                .map((avatar) => (
                  <div
                    key={avatar.id}
                    className="border border-black rounded-lg w-full h-96 bg-white flex items-center justify-center"
                  >
                    <Image
                      src={avatar.img}
                      alt="image 4"
                      className="h-[350px] w-full object-cover"
                      width={500}
                      height={400}
                    />
                  </div>
                ))}
            </div>
            <AiOutlineRight
              size={30}
              className="cursor-pointer"
              onClick={goToNext}
            />
          </div>
          <button className="mt-6 px-6 py-2 border border-black rounded-md hover:bg-gray-200 transition duration-200 bg-white">
            View all members
          </button>
        </div>
      </section>
    </>
  );
};

export default AvatarsSection;
