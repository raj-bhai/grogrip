import React, { useState } from "react";

const QnASection = () => {
  const faqs = [
    {
      question: "What is a YouTube Automation Channel?",
      answer:
        "A YouTube Automation channel is nothing else but a faceless YouTube channel, where instead of doing all the work ourselves, we outsource it to other people (online freelancers).",
    },
    {
      question: "How much money does it cost to start?",
      answer:
        "If you are looking to outsource all the work and turn your channel into a passive income stream, you will need a couple hundred dollars per month for content creation costs*.",
    },
    {
      question: "Do I need to have any tech or business experience?",
      answer:
        "No. In fact, most of our successful students joined Grow Channels as complete beginners with no previous knowledge or experience. We will provide you all the information and tools you need.",
    },
    {
      question: "How much time does it take to do this?",
      answer:
        "While the answer is different for every person, our programs are structured to make YouTube Automation accessible for everyday people who can only dedicate a couple of hours per week to it.",
    },
    // Add more FAQs as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className=" py-12">
      <div className="container mx-auto px-4 flex flex-col items-center ">
        <btn className="text-yellow-200 text-[25px] mb-8 text-center sm:text-[50px] w-[95%] sm:w-[700px] hover:border-yellow-200 hover:text-white cursor-pointer border flex items-center justify-center  border-white rounded-lg sm:ml-8 my-font-bold ">
          <p>FAQ</p>
        </btn>
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md mb-4 overflow-hidden"
            >
              <div
                className="bg-gradient-to-b from-white to-gray-100 flex justify-between p-6 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              {openIndex === index && (
                <div className="bg-gray-50 p-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnASection;
