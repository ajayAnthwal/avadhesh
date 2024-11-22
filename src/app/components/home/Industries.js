import React from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    imgSrc: "/Cloud-Opportunity.png",
    title: "Cloud Opportunity BANT Qualified Lead Generation",
    description:
      "How our sales team helped AWS reach new customers even in remote localities",
  },
  {
    imgSrc: "/Decoding-Audience-of-Data-through-case-study-and-use-cases.png",
    title: "Decoding Audience for a Data Innovation Company",
    description:
      "Targeting the right audience for better social media engagement using relevant case studies",
  },
  {
    imgSrc: "/Defining-&-Enhancing-the-Brand-personality.png",
    title: "Defining the brand personality of a FMCG  ",
    description:
      "Creating a brand identity for an Aata company by stimulating a universal emotion - Nostalgia",
  },
];

const Industries = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6">
          Industries we served
        </h1>
        <p className="text-center text-lg mb-8">
          With experience across diverse industries, we’ve delivered real-world
          results. <br />
          Explore our real-world examples to see how our CFaaS solutions drive
          <br />
          success in every sector.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full  mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 h-auto transition-transform transform hover:scale-105 hover:shadow-2xl"
              style={{
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="h-auto bg-white rounded-md mb-4 relative overflow-hidden">
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  className="h-[268px] w-full object-cover rounded-md"
                  width={500}
                  height={268}
                />
              </div>
              <div className="flex justify-center mb-4">
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700">
                  Blog
                </button>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
