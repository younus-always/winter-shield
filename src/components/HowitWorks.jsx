import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const HowitWorks = () => {
      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 500,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      return (
            <div className="lg:h-600px] bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/environment-volunteer-concept-with-group-con-grupo_23-2147807231.jpg?uid=R170017612&ga=GA1.1.70706524.1730171181&semt=ais_hybrid')" }}>
                  <div className="lg:h-[600px] bg-black/70 flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                              {/* Create a personal profile */}
                              <div className="space-y-5" data-aos="fade-left">
                                    <h2 className="font-bold text-5xl text-red-400">01</h2>
                                    <p className="font-bold text-xl text-slate-50">Create a personal profile</p>
                                    <p className="w-5 h-1 bg-red-100"></p>
                                    <p className="font-semibold text-slate-50 text-lg">Start by creating your donor profile to get access to all the available campaigns and track your contributions.
                                    </p>
                              </div>
                              {/* Select a Campaign */}
                              <div className="space-y-5" data-aos="fade-right" data-aos-delay="50">
                                    <h2 className="font-bold text-5xl text-red-400">02</h2>
                                    <p className="font-bold text-xl text-slate-50">Select a Campaign</p>
                                    <p className="w-8 h-1 bg-red-300"></p>
                                    <p className="font-semibold text-slate-50 text-lg">Browse through ongoing donation campaigns across different regions and choose one where you&apos;d like to make an impact.
                                    </p>
                              </div>
                              {/* Donate Winter Essentials */}
                              <div className="space-y-5" data-aos="fade-up-left" data-aos-delay="100">
                                    <h2 className="font-bold text-5xl text-red-400">03</h2>
                                    <p className="font-bold text-xl text-slate-50">Donate Winter Essentials</p>
                                    <p className="w-12 h-1 bg-red-400"></p>
                                    <p className="font-semibold text-slate-50 text-lg">Contribute by donating clothes like sweaters, jackets, or blankets directly or sponsor logistics for remote deliveries.
                                    </p>
                              </div>
                              {/* Make a Difference */}
                              <div className="space-y-5" data-aos="fade-up-right" data-aos-delay="150">
                                    <h2 className="font-bold text-5xl text-red-400">04</h2>
                                    <p className="font-bold text-xl text-slate-50">Make a Difference!</p>
                                    <p className="w-20 h-1 bg-red-500"></p>
                                    <p className="font-semibold text-slate-50 text-lg">Your contribution will be delivered to those in need. See the positive change your donation brings!
                                    </p>
                              </div>
                        </div>

                  </div>

            </div>
      )
};

export default HowitWorks;
