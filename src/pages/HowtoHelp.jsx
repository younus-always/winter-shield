import Heading from "../components/Heading"
import Faq from "../components/Faq"
import useTitle from "../hook/useTitle"
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const HowToHelp = () => {
      useTitle("How to Help");
      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 500,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      return (
            <div className="bg-gray-100 min-h-screen">
                  {/* Header Section */}
                  <section className="text-center py-10">
                        <Heading title={"How You Can Help"}
                              subtitle={"Join us in making a difference this winter. Your kindness can bring warmth to those in need."} />
                  </section>

                  {/* Ways to Help */}
                  <section className="max-w-6xl mx-auto p-5">
                        <h2 data-aos="fade-left" className="text-2xl font-semibold text-gray-800 mb-5">Ways You Can Help</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                              {/* Donate Items */}
                              <div data-aos="fade-up" className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition">
                                    <h3 className="text-lg font-bold text-prime/90">Donate Winter Clothes</h3>
                                    <p className="text-gray-600 mt-2">
                                          Gently used jackets, blankets, and sweaters can bring comfort to families in need.
                                    </p>
                              </div>

                              {/* Financial Support */}
                              <div data-aos="fade-up" data-aos-delay="50" className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition">
                                    <h3 className="text-lg font-bold text-prime/90">Make a Financial Donation</h3>
                                    <p className="text-gray-600 mt-2">
                                          Contribute funds to help us purchase new warm clothing and essentials.
                                    </p>
                              </div>

                              {/* Volunteer */}
                              <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition">
                                    <h3 className="text-lg font-bold text-prime/90">Volunteer Your Time</h3>
                                    <p className="text-gray-600 mt-2">
                                          Help us sort, pack, and distribute donations to communities in need.
                                    </p>
                              </div>

                              {/* Spread the Word */}
                              <div data-aos="fade-up" data-aos-delay="150" className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition">
                                    <h3 className="text-lg font-bold text-prime/90">Spread the Word</h3>
                                    <p className="text-gray-600 mt-2">
                                          Share our campaign with your friends and family to raise awareness.
                                    </p>
                              </div>
                        </div>
                  </section>

                  {/* Donation Steps */}
                  <section className="bg-white mt-10 py-10">
                        <div className="max-w-4xl mx-auto px-5">
                              <h2 data-aos="fade-left" className="text-2xl font-semibold text-gray-800 mb-5">How to Donate</h2>
                              <ol className="list-decimal list-inside text-gray-600">
                                    <li data-aos="fade-right">Prepare your donation items (jackets, blankets, etc.) or choose to contribute funds.</li>
                                    <li data-aos="fade-right" data-aos-delay="50">Fill out our donation form to let us know how you&apos;d like to help.</li>
                                    <li data-aos="fade-right" data-aos-delay="100">Wait for our team to contact you for pickup or delivery arrangements.</li>
                              </ol>
                              <button data-aos="flip-up" className="btn btn-warning font-bold mt-5">Fill Out Donation Form</button>
                        </div>
                  </section>

                  {/* Impact Section */}
                  <section data-aos="zoom-in" className="bg-blue-200 py-10">
                        <div className="max-w-4xl mx-auto px-5 text-center">
                              <h2 data-aos="fade-left" data-aos-delay="50" className="text-2xl font-semibold text-gray-800">Your Impact</h2>
                              <p data-aos="fade-right" data-aos-delay="100" className="text-gray-600 mt-2">
                                    Last year, over 1,000 families benefited from your donations. This year, let’s help even more!
                              </p>
                        </div>
                  </section>

                  {/* FAQ */}
                  <section className="py-7">
                        <Faq />
                  </section>
            </div>
      );
};

export default HowToHelp;
