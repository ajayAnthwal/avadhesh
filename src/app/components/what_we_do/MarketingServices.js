import React from "react";

const services = [
  {
    title: "Digital Marketing / SEO",
    description:
      "Boost your online presence with tailored strategies that drive traffic and engagement.",
    imageUrl: "/Digital-Marketing.png",
  },
  {
    title: "Email / Calling Campaigns",
    description:
      "Reach your audience directly with personalized campaigns that convert leads into loyal customers.",
    imageUrl: "/Email-Marketing.png",
  },
  {
    title: "Event Management",
    description:
      "Create unforgettable experiences that strengthen connections and elevate your brand’s visibility.",
    imageUrl: "/Event-Management_.png",
  },
  {
    title: "Print & Display Ads",
    description:
      "Maximize brand impact with eye-catching print and display ads that capture attention.",
    imageUrl: "/Print-Display-Ads_.png",
  },
  {
    title: "Corp Materials",
    description:
      "Deliver professional, high-quality corporate materials that leave a lasting impression on your clients. ",
    imageUrl: "/Corp-Material.png",
  },
  {
    title: "Content Marketing",
    description:
      "Engage your audience with compelling content that builds trust and drives meaningful interactions.",
    imageUrl: "/Content-Marketing_.png",
  },
  {
    title: "PR & Branding",
    description:
      "Strengthen your brand’s image with strategic PR that amplifies your voice and reputation.",
    imageUrl: "/PR-Branding.png",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Boost visibility and rankings with expert SEO that puts your business at the top. ",
    imageUrl: "/SEO.png",
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
        {/* Adjust the grid to display all 8 services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[100%] mx-auto">
          {services.map((service, index) => (
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
                <div className="flex flex-col justify-between h-56 py-6">
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
    </div>
  );
};

export default MarketingServices;
