export default function EbookSection() {
  return (
    <section className="flex flex-col items-center justify-center p-8 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">Trends E-books</h2>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* Main Box */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-row items-center w-full px-4-5 container">
        <div className="bg-gray-100 h-48 w-48 rounded-lg border border-gray-300 mr-6"></div>
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-bold text-black mb-4">
            Get your copy of ebook
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
