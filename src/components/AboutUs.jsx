import { FaHandsHelping, FaUsers, FaHeart } from "react-icons/fa";
import Heading from "./Heading";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutUs = () => {

      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 500,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      return (
            <section className="bg-gray-100 py-12 px-6">
                  <div className="max-w-6xl mx-auto">
                        {/* Heading Section */}
                        <div className="text-center mb-8">
                              <Heading title={"About Us"}
                                    subtitle={"At Winter Warmth, we are on a mission to spread comfort during harsh winters by connecting donors with communities in need."} />
                        </div>

                        {/* Mission and Services */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {/* Mission Card */}
                              <div className="bg-white shadow-lg group hover:shadow-xl transition rounded-lg p-6 text-center" data-aos="fade-right" >
                                    <FaHeart className="text-4xl group-hover:scale-125 transition ease-in-out text-red-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                                    <p className="text-gray-600">
                                          To deliver warmth and dignity by providing winter clothing to the most vulnerable individuals and families.
                                    </p>
                              </div>

                              {/* Simplify Donations */}
                              <div className="bg-white shadow-lg group hover:shadow-xl transition rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="50">
                                    <FaHandsHelping className="text-4xl group-hover:scale-125 transition ease-in-out text-blue-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">What We Do</h3>
                                    <p className="text-gray-600">
                                          From raising awareness to delivering donations, we connect donors and volunteers to make a difference.
                                    </p>
                              </div>

                              {/* Build Community */}
                              <div className="bg-white shadow-lg group hover:shadow-xl transition rounded-lg p-6 text-center" data-aos="fade-left" data-aos-delay="100">
                                    <FaUsers className="text-4xl group-hover:scale-125 transition ease-in-out text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Build Community</h3>
                                    <p className="text-gray-600">
                                          We create a network of people passionate about giving back and making winters warmer for others.
                                    </p>
                              </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12">
                              <Heading title={"Join Us"}
                                    subtitle={"Become part of our mission to spread warmth and hope this winter. Together, we can make a difference."} />
                              <button data-aos="flip-left" className="btn bg-prime hover:bg-prime/90 px-6 py-2 text-white">
                                    Get Involved
                              </button>
                        </div>
                  </div>
            </section>
      );
};

export default AboutUs;
