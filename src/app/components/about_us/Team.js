import React from "react";

const Team = () => {
  return (
    <section className="py-12 px-4-5">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">
          We help business to grow <br /> faster and bigger
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-1/3">
            <div className="rounded-full bg-gray-300 w-24 h-24 mx-auto mb-4"></div>
            <h3 className="font-bold text-lg">Professional Team</h3>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="rounded-full bg-gray-300 w-24 h-24 mx-auto mb-4"></div>
            <h3 className="font-bold text-lg">Target Oriented</h3>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="rounded-full bg-gray-300 w-24 h-24 mx-auto mb-4"></div>
            <h3 className="font-bold text-lg">Success Guarantee</h3>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
