import { useState } from "react";
import Heading from "./Heading";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Faq = () => {
      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 500,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      const [openIndex, setOpenIndex] = useState(null);
      const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
      };

      const faqs = [
            {
                  question: "What types of clothing can I donate?",
                  answer:
                        "We accept gently used winter clothing such as coats, jackets, sweaters, hats, gloves, scarves, and boots. Please ensure items are clean and in good condition.",
            },
            {
                  question: "How can I donate my clothing?",
                  answer:
                        "You can donate your clothing by visiting our designated drop-off locations or by arranging for a pickup through our website.",
            },
            {
                  question: "How do you ensure donations reach those in need?",
                  answer:
                        "We collaborate with trusted local organizations to ensure your donations directly benefit individuals and families in need.",
            },
            {
                  question: "Are there tax benefits for donating?",
                  answer:
                        "Yes, your donations may be tax-deductible. Please consult with a tax advisor for more details.",
            },
            {
                  question: "How can I volunteer with Winter Shield?",
                  answer:
                        "You can volunteer by signing up on our website and joining our community outreach programs.",
            },
      ];

      return (
            <>
                  <Heading title={"FAQ"} subtitle={"Frequently Asked Questions about our Donation Campaigns"} />
                  <div className="w-11/12 lg:max-w-5xl mx-auto bg-gradient-to-bl from-prime/60 via-blue-500/80 to-prime/60 p-6 lg:p-8 rounded-lg">
                        <div data-aos="fade-right" className="w-full lg:max-w-5xl mx-auto">
                              {/* Accordion */}
                              <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                          <div key={index}
                                                className={`border ${openIndex === index
                                                      ? "border-prime/80"
                                                      : "border-gray-300"
                                                      } rounded-lg shadow-lg transition-all duration-300`}
                                          >
                                                {/* FAQ Header */}
                                                <button
                                                      onClick={() => toggleFAQ(index)}
                                                      className="w-full flex justify-between items-center text-start py-4 px-6 text-lg font-medium text-slate-50 hover:text-prime transition-all"
                                                >
                                                      <span>{faq.question}</span>
                                                      <span className="text-2xl">
                                                            {openIndex === index ? "-" : "+"}
                                                      </span>
                                                </button>

                                                {/* Divider Line (Appears When Open) */}
                                                <div
                                                      className={`border-t border-gray-500 mx-6 transition-opacity duration-300 ${openIndex === index ? "opacity-100" : "opacity-0"
                                                            }`}
                                                ></div>

                                                {/* FAQ Content */}
                                                <div
                                                      className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 py-4" : "max-h-0"
                                                            }`}
                                                >
                                                      <p className="text-gray-200 font-semibold">{faq.answer}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Faq;

