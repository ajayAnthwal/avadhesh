"use client";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const AvatarsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const avatars = [
    { id: 1, content: "image 1" },
    { id: 2, content: "image 2" },
    { id: 3, content: "image 3" },
    { id: 4, content: "image 4" },
    { id: 5, content: "image 5" },
    { id: 6, content: "image 6" },
  ];

  const maxToShow = window.innerWidth >= 640 ? 3 : 1;
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
                    {avatar.content}
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
