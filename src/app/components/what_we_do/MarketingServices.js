import React from "react";

const services = [
  {
    title: "Digital Marketing / SEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/images/digital-marketing.jpg",
  },
  {
    title: "Email / Calling Campaigns",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/images/email-campaign.jpg",
  },
  {
    title: "Event Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/images/event-management.jpg",
  },
  {
    title: "Print & Display Ads",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/images/print-ads.jpg",
  },
  {
    title: "Corp Materials",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/images/corp-materials.jpg",
  },
  {
    title: "Content Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/images/content-marketing.jpg",
  },
  {
    title: "PR & Branding",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/images/pr-branding.jpg",
  },
];

const MarketingServices = () => {
  return (
    <div className="py-10">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Marketing Services</h2>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] mx-auto">
        {services.slice(0, 6).map((service, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-64 rounded-lg shadow-md group"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
          >
            <div className=" bg-black rounded-lg group-hover:bg-opacity-70 transition duration-300 text-white">
            <div className="flex flex-col justify-between items-center h-56">
              <h3 className="text-lg font-bold text-white">
                {services.title}
              </h3>
              <div className="">
                <p className="text-sm text-white">{services.description}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>

      {/* Last Row with Single Centered Card */}
      <div className="flex justify-center mt-6">
        <div
          className=" bg-cover bg-black bg-center h-64 w-full md:w-1/3 rounded-lg shadow-md group"
          style={{ backgroundImage: `url(${services[6].imageUrl})` }}
        >
          <div className="rounded-lg group-hover:bg-opacity-70 transition duration-300">
            <div className="flex flex-col justify-between items-center h-56">
              <h3 className="text-lg font-bold text-white">
                {services[6].title}
              </h3>
              <div className="">
                <p className="text-sm text-white">{services[6].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingServices;
