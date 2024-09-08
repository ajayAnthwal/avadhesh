import React from "react";

const services = [
  {
    title: "Digital Marketing / SEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Digital-Marketing.png",
  },
  {
    title: "Email / Calling Campaigns",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Email-Marketing.png",
  },
  {
    title: "Event Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Event-Management_.png",
  },
  {
    title: "Print & Display Ads",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Print-Display-Ads_.png",
  },
  {
    title: "Corp Materials",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Corp-Material.png",
  },
  {
    title: "Content Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/Content-Marketing_.png",
  },
  {
    title: "PR & Branding",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/PR-Branding.png",
  },
];

const MarketingServices = () => {
  return (
    <div className="flex justify-center mt-10">

    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Marketing Services</h2>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] mx-auto">
        {services.slice(0, 6).map((service, index) => (
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
              <div className="flex flex-col justify-between items-center h-56 py-6">
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <div className="px-5">
                  <p className="text-sm text-white text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 items-center">
        <div
          className="bg-cover bg-black bg-center h-64 w-full md:w-1/3 rounded-lg shadow-md group bottom-service"
          style={{
            backgroundImage: `url(${services[6].imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
          <div className="rounded-lg group-hover:bg-opacity-70 transition duration-300">
            <div className="flex flex-col justify-between items-center h-64  py-6">
              <h3 className="text-xl font-bold text-white mt-4">
                {services[6].title}
              </h3>
              <div className="">
                <p className="text-sm text-white text-center">
                  {services[6].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
  );
};

export default MarketingServices;
