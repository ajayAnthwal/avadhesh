import React from "react";
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";

const What_we_do = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-x-10 bg-white res-desktop w-[90%] m-auto mt-12">
        {/* Left Section */}
        <div className="space-y-2 w-full lg:w-96 mb-5 lg:mb-0">
          <h2 className="text-2xl font-bold text-black">
            Marketing & Lead Gen
          </h2>
          <p className="text-black">as a service</p>
          <p className="text-gray-500 text-sm">
            Our
            <span className="font-semibold ml-2 mr-2">
              CFaaS<sup>SM</sup>
            </span>
            offering
          </p>
          <div className="mt-9">
            <button className="btn-gray btn-res btn-offer"></button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <p className="text-black text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text.
          </p>
          <br />
          <p className="text-black text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text.
          </p>
        </div>
      </div>
      <Marketing />
      <MarketingServices />
      <Marketing_insights />
    </div>
  );
};

export default What_we_do;
