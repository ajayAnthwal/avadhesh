import React from "react";
import "../../css/slider.css";

const services = [
  {
    title: "HR Operations Management",
    description:
      "Streamline your HR processes for efficiency and employee satisfaction—let us handle the details.",
    imageUrl: "/HR-Operations-Management.png",
  },
  {
    title: "Recruitment & Staffing",
    description:
      "Find the right talent quickly with our tailored recruitment strategies for your needs. ",
    imageUrl: "/Recruitment-Staffing.png",
  },
  {
    title: "Life Coach",
    description:
      "Empower your team with personalized coaching that fosters growth and well-being.",
    imageUrl: "/Life-Coach.png",
  },
  {
    title: "Nutritionist",
    description:
      "Enhance workplace wellness with expert nutrition guidance tailored to your employees’ needs. ",
    imageUrl: "/Nutritionist.png",
  },
  {
    title: "Psychologist",
    description:
      "Support mental health with professional counseling services that promote a thriving workplace.",
    imageUrl: "/Psychologist.png",
  },
];

const HrStaffingWellBeing = () => {
  return (
    <div className="py-10 res-desktop">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">HR, Staffing & Well Being</h2>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[100%] mx-auto container">
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
                  <p className="text-lg text-white text-left">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
                  <p className="text-lg text-white text-left">
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
