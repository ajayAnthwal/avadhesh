"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is CFaaS and how can it benefit my business?",
      answer:
        "CFaaS stands for Corporate Functions As A Service, a flexible model that helps businesses outsource essential functions like HR, IT support, procurement, finance, and more. We focus on filling the gaps in your strategy, enabling you to concentrate on your core priorities and drive business success.",
    },
    {
      question: "How does CFaaS ensure the desired outcomes for my business?",
      answer:
        "We’re outcome-focused. Together, we define critical outcomes that are valuable for your business, and through our integrated approach and market expertise, we deliver results that align with your goals.",
    },
    {
      question: "What services are covered under CFaaS?",
      answer:
        "We offer a wide range of services, including HR, CFO-As-A-Service, IT support, procurement, legal, market research, customer service, and corporate gifting. Each service is designed to support business growth, operational excellence, and innovation.",
    },
    {
      question: "Can CFaaS adapt to the specific needs of my business?",
      answer:
        "Absolutely! We offer flexible models that adjust to your business needs—whether short-term, long-term, or transactional. Our approach ensures that you get the right support at the right time.",
    },
    {
      question: "How does CFaaS help with operational efficiency?",
      answer:
        "CFaaS focuses on setting up efficient processes, maintaining operational excellence, and supporting employee growth, helping your business run smoother while freeing up your bandwidth to focus on strategic growth.",
    },
  ];

  return (
    <>
      <Image
        src="/Vector (2).png"
        alt="img"
        layout="responsive"
        width={1000}
        height={300}
        className="w-full"
      />
      <div className="py-12 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-200 rounded-lg shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-left bg-white py-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
