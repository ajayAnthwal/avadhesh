// ServiceCard.js
import React from "react";

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div
      className="bg-black bg-cover bg-center h-64 rounded-lg shadow-md group"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="rounded-lg group-hover:bg-opacity-70 transition duration-300">
        <div className="flex flex-col justify-between h-56 py-6">
          <h3 className="text-xl font-bold text-white ml-5">{title}</h3>
          <div className="px-5">
            <p className="text-lg text-white text-left">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
