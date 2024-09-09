import React from "react";
import "../../css/slider.css";

const services = [
  {
    title: "HR Operations Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/HR-Operations-Management.png",
  },
  {
    title: "Recruitment & Staffing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Recruitment-Staffing.png",
  },
  {
    title: "Life Coach",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Life-Coach.png",
  },
  {
    title: "Nutritionist",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Nutritionist.png",
  },
  {
    title: "Psychologist",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Psychologist.png",
  },
];

const HrStaffingWellBeing = () => {
  return (
    <div className="py-10 res-desktop">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">HR, Staffing & Well Being</h2>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* Upper Grid with 3 Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[100%] mx-auto container px-4-5">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="bg-black bg-cover bg-center h-64 rounded-lg shadow-md group"
            style={{
              backgroundImage: `url(${service.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="rounded-lg group-hover:bg-opacity-70 transition duration-300">
              <div className="flex flex-col justify-between  h-56 py-6">
                <h3 className="text-xl font-bold text-white ml-5">
                  {service.title}
                </h3>
                <div className="px-5">
                  <p className="text-sm text-white text-left">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Grid with 2 Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%] mx-auto mt-6 bottom-service-hr container px-4-5">
        {services.slice(3, 5).map((service, index) => (
          <div
            key={index}
            className="bg-black bg-cover bg-center h-64 rounded-lg shadow-md group"
            style={{
              backgroundImage: `url(${service.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="rounded-lg group-hover:bg-opacity-70 transition duration-300">
              <div className="flex flex-col justify-between  h-56 py-6">
                <h3 className="text-xl font-bold text-white ml-5">
                  {service.title}
                </h3>
                <div className="px-5">
                  <p className="text-sm text-white text-left">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HrStaffingWellBeing;
