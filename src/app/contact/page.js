import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Sliders from "../components/sliders/sliders";
import FAQ from "@/app/components/contact_us/FAQ";
import Call_us from "../components/footer/Call_us";

export default function Contact() {
  return (
    <div>
      <Sliders />

      <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in touch with us</h2>
              <p className="text-gray-600 mb-8 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard
                dummy text ever since the 1500s.Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry standard dummy text ever since the 1500s.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 pb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy text.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone No.</h4>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy text.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-Mail</h4>
                    <p className="text-gray-500">
                      Lorem Ipsum is simply dummy text.
                    </p>
                  </div>
                </div>

                <hr />
              </div>
            </div>

            {/* Right Section (Form) */}
            <div className="bg-white p-8 shadow-lg rounded-lg border border-black">
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 font-semibold"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="block mb-2 font-semibold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 font-semibold"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block mb-2 font-semibold"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-semibold">
                    Email Address
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </div>
                <button className="w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-yellow-100 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Trusted by these mega brands
            </h2>
            <div className="flex gap-6 justify-items-center justify-center items-center">
              <div className="w-40 h-20 bg-white rounded-lg  border border-black"></div>
              <div className="w-40 h-20 bg-white rounded-lg border border-black"></div>
              <div className="w-40 h-20 bg-white rounded-lg border border-black"></div>
              <div className="w-40 h-20 bg-white rounded-lg border border-black"></div>
              <div className="w-40 h-20 bg-white rounded-lg border border-black"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 px-4-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220409.6832235383!2d77.85232418505264!3d30.325325143216006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1725541674325!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-5">
        <FAQ />
      </div>
      <Call_us />
    </div>
  );
}
