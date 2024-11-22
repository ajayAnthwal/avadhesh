import React from "react";
import BlogCard from "../blogCard/BlogCard";

const IndustriesServed = () => {
  const industriesData = [
    {
      imgSrc: "/Cloud-Opportunity.png",
      title: "Cloud Opportunity BANT Qualified Lead Generation",
      description:
        "How our sales team helped AWS reach new customers even in remote localities",
    },
    {
      imgSrc: "/Decoding-Audience-of-Data-through-case-study-and-use-cases.png",
      title: "Decoding Audience of Data Innovation Company",
      description:
        "Targeting the right audience for better social media engagement using relevant case studies",
    },
    {
      imgSrc: "/Defining-&-Enhancing-the-Brand-personality.png",
      title: "Defining the Brand Personality of a FMCG",
      description:
        "Creating a brand identity for an Aata company by stimulating a universal emotion - Nostalgia",
    },
  ];

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Industries We Served</h1>
        <p className="text-lg mb-8 text-gray-600">
        With experience across diverse industries, <br/> we’ve delivered real-world results
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industriesData.map((card, index) => (
            <BlogCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
