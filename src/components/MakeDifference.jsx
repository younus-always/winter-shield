import { useNavigate } from "react-router-dom"
import Heading from "./Heading"
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const MakeDifference = () => {
      const navigate = useNavigate()
      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 500,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      return (
            <>
                  <Heading title={"Want to Make a Difference?"}
                        subtitle={"Every piece of warm clothing can bring comfort and hope to someone in need this winter. Explore how you can help!"} />
                  <button data-aos="flip-left" className="font-bold py-3 px-6 bg-prime hover:bg-prime/90 text-slate-50 uppercase text-sm my-5 block mx-auto rounded-lg">Become a volunteer</button>
                  <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Give Card */}
                        <div className="bg-slate-900 text-slate-50" data-aos="zoom-in-up">
                              <div className="p-10">
                                    <p className="w-6 h-1 bg-red-500 mb-3"></p>
                                    <h3 className="uppercase text-2xl font-bold">Give</h3>
                                    <p className="py-7" data-aos="zoom-in" data-aos-delay="50">Help bring warmth to underprivileged families by donating winter clothes like sweaters, jackets, and blankets.</p>
                                    <button onClick={() => navigate('/donationCampaigns')}
                                          data-aos="fade-left" data-aos-delay="50" className="py-4 px-6 bg-secon hover:bg-secon/90 font-bold font-heading text-xs text-gray-800 uppercase rounded-lg">
                                          Donate now
                                    </button>
                              </div>
                        </div>
                        {/* Sponsor Card */}
                        <div className="bg-prime text-slate-50" data-aos="zoom-in-up" data-aos-delay="50">
                              <div className="p-10">
                                    <p className="w-6 h-1 bg-red-500 mb-3"></p>
                                    <h3 className="uppercase text-2xl font-bold">Sponsor</h3>
                                    <p className="py-7" data-aos="zoom-in" data-aos-delay="100">Sponsor our volunteers who travel to rural areas to deliver your donations and make a lasting impact.</p>
                                    <button data-aos="fade-left" data-aos-delay="100" className="py-4 px-6 bg-red-500 hover:bg-red-500/80 font-bold font-heading text-xs uppercase rounded-lg">
                                          find a rural Area
                                    </button>
                              </div>
                        </div>
                        {/* Trust Card */}
                        <div className="bg-slate-900 text-slate-50" data-aos="zoom-in-up" data-aos-delay="100">
                              <div className="p-10">
                                    <p className="w-6 h-1 bg-red-500 mb-3"></p>
                                    <h3 className="uppercase text-2xl font-bold">trust</h3>
                                    <p className="py-7" data-aos="zoom-in" data-aos-delay="150">Trust us to deliver your contributions to those who need them most. Share this campaign to inspire others.</p>
                                    <button data-aos="fade-left" data-aos-delay="100" className="py-4 px-6 bg-slate-50 hover:bg-slate-50/80 text-slate-900 font-bold font-heading text-xs uppercase rounded-lg">
                                          learn more
                                    </button>
                              </div>
                        </div>

                  </div>
            </>
      )
}

export default MakeDifference