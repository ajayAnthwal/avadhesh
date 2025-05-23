import React from "react";
import Image from "next/image";

const Case_study = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Business Growth Event",
      description:
        "Strategic event uniting CISOs to discuss SIEM management challenges and priorities in the Indian context. ",
      imgSrc: "/human-hand-holding-dollar-bills-with-increased-graph-arrow.jpg",
    },
    {
      id: 2,
      title: "Cloud Calling",
      description:
        "7-month campaign reaching remote India, connecting thousands to AWS cloud solutions through dedicated sales efforts ",
      imgSrc: "/handshake-human-robot.jpg",
    },
  ];

  return (
    <div className="w-full px-2 md:px-0">
      <div>
        <section className="pt-12 bg-white res-desktop">
          <div className="container mx-auto">
            <h1 className="text-center text-3xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-center text-lg mb-8">
              Explore real stories of growth, innovation, and impact <br />{" "}
              through our tailored corporate solutions. 
            </p>

            <div className="flex justify-center px-4 w-full pb-9">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-xl lg:w-[70%]">
                {caseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-auto"
                  >
                    <div className="h-auto bg-gray-300 rounded-md mb-4">
                      <Image
                        src={study.imgSrc}
                        alt={study.title}
                        className="h-full w-full object-cover rounded-md"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="text-xl font-bold mb-2 text-left">
                        {study.title}
                      </h2>
                      <p className="text-gray-600 text-left">
                        {study.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Case_study;
