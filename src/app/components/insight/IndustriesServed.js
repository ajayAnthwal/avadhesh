import React from 'react';

const IndustriesServed = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Industries we served</h1>
        <p className="text-lg mb-8 text-gray-600">
          Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
        </p>

        {/* Flex Container for Cards */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-center space-y-6 md:space-y-0 justify-center gap-6 IndustriesServed">

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row w-full justify-center gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg border border-black h-64 w-full md:w-1/4 flex flex-col justify-end p-4">
              <p className="text-lg font-semibold text-gray-800 text-left">
                Lorem Ipsum is simply text of the printing
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg border border-black h-64 w-full md:w-1/4 flex flex-col justify-end p-4">
              <p className="text-lg font-semibold text-gray-800 text-left">
                Lorem Ipsum is simply text of the printing
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row w-full justify-center gap-6">
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg border border-black h-64 w-full md:w-1/4 flex flex-col justify-end p-4">
              <p className="text-lg font-semibold text-gray-800 text-left">
                Lorem Ipsum is simply text of the printing
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg border border-black h-64 w-full md:w-1/4 flex flex-col justify-end p-4">
              <p className="text-lg font-semibold text-gray-800 text-left">
                Lorem Ipsum is simply text of the printing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
