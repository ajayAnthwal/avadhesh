"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Frequently Asked Questions?",
      answer: "This is the answer to the first question.",
    },
    {
      question: "Frequently Asked Questions?",
      answer: "This is the answer to the second question.",
    },
    {
      question: "Frequently Asked Questions?",
      answer: "This is the answer to the third question.",
    },
    {
      question: "Frequently Asked Questions?",
      answer: "This is the answer to the fourth question.",
    },
    {
      question: "Frequently Asked Questions?",
      answer: "This is the answer to the fifth question.",
    },
  ];

  return (
    <>
      <img src="./Vector (2).png" alt="img" className="w-full" />
      <div className="py-12 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">
            Frequently Asked Questions?
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
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
