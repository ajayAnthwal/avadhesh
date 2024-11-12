import React from "react";
import Image from "next/image";

const Marketing_insights = () => {
  const cards = [
    {
      imgSrc: "/Blog-7-Corporate-Materials.png", 
      title: "Corporate Branding Materials Your Business Should Have",
      description:
        "Why corporate branding materials matter and the essential branding materials every business needs",
    },
    {
      imgSrc: "/Blog-5 -How-to-build-Brand-Trust.png", 
      title: "How To Build Brand Trust? Explained Guide...",
      description:
        "Is your brand trustworthy enough to win hearts and minds? Click here and we'll let you know!",
    },
    {
      imgSrc: "/Blog-3-KISS_ Best-Email-Marketing-Tactic.png",
      title: "KISS Is The Best Email Marketing Tactics",
      description:
        "Click here to know all about the secret sauce of this year’s best Email marketing campaigns",
    },
  ];

  return (
    <div className="w-full">
      <div className="mt-7">
        <Image
          src="/Vector (2).png"
          alt="img"
          className="w-full"
          width={100}
          height={100}
        />
        <section className="pt-12 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB] res-desktop">
          <div className="container mx-auto">
            <h1 className="text-center text-3xl font-bold mb-6">
              Recommended Marketing Insights
            </h1>
            <p className="text-center text-lg mb-8">
              Dive into our latest blogs on marketing and <br /> lookout for any expert tips!
            </p>

            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 h-auto transition-transform transform hover:scale-105 hover:shadow-2xl"
                    style={{ borderRadius: "15px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="h-44 bg-white rounded-md mb-4 relative overflow-hidden">
                      <Image
                        src={card.imgSrc}
                        alt={card.title}
                        className="h-[177px] w-full object-cover rounded-md"
                        width={500}
                        height={177}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <button className="btn-small bg-black text-white rounded flex m-auto py-1 px-3 mb-4">
                      Blog
                    </button>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="container flex flex-col items-center py-12 mx-auto max-w-screen-xl bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
            <div className="text-center mb-12 max-w-4xl">
              <h1 className="text-center about-title text-4xl font-bold mb-6">
                Have Questions?
              </h1>
              <button className="btn-gray-call mb-4">
                Schedule a call with us
              </button>
              <p className="paragraph">
                <a
                  href="#"
                  className="text-dark text-decoration-underline call-paragraph"
                >
                  Click on the FAQs page to know more about how we can help you?
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Marketing_insights;
