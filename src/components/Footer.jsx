import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6"
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 500,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      return (
            <footer className="bg-prime text-footer pt-14 pb-6">
                  <div className="w-11/12 lg:max-w-6xl mx-auto footer font-semibold">
                        <div>
                              <h3 data-aos="zoom-out" className="text-3xl font-bold"><Link to='/'>Winter Shield</Link></h3>
                              {/* Social Icons */}
                              <div className="flex items-center gap-3 pt-6 text-slate-800 ">
                                    <Link to='https://facebook.com' target="_blank"
                                          data-aos="fade-right" data-aos-delay="150"
                                          className="bg-slate-100 hover:bg-secon transition-all ease-in-out w-8 h-8 rounded-full flex items-center justify-center"><FaFacebook size={18} /></Link>
                                    <Link to='https://twitter.com' target="_blank"
                                          data-aos="fade-right" data-aos-delay="100"
                                          className="bg-slate-100 hover:bg-secon transition-all ease-in-out w-8 h-8 rounded-full flex items-center justify-center"><FaXTwitter size={18} /></Link>
                                    <Link to='https://Instagram.com' target="_blank"
                                          data-aos="fade-right" data-aos-delay="50"
                                          className="bg-slate-100 hover:bg-secon transition-all ease-in-out w-8 h-8 rounded-full flex items-center justify-center"><FaInstagram size={18} /></Link>
                                    <Link to='https://Linkedin.com' target="_blank"
                                          data-aos="fade-right"
                                          className="bg-slate-100 hover:bg-secon transition-all ease-in-out w-8 h-8 rounded-full flex items-center justify-center"><FaLinkedin size={18} /></Link>
                              </div>
                        </div>
                        {/* Services */}
                        <div>
                              <h6 className="footer-title">Services</h6>
                              <a data-aos="fade-right" className="link link-hover">About us</a>
                              <Link to='/donationCampaigns' data-aos="fade-right" data-aos-delay="50" className="link link-hover">Donation Campaigns</Link>
                              <Link to='/howTohelp' data-aos="fade-right" data-aos-delay="100" className="link link-hover">How to Help</Link>
                              <a data-aos="fade-right" data-aos-delay="150" className="link link-hover">Contact</a>
                        </div>
                        {/* Legal */}
                        <div>
                              <h6 className="footer-title">Legal</h6>
                              <a data-aos="fade-right" className="link link-hover">Terms of use</a>
                              <a data-aos="fade-right" data-aos-delay="50" className="link link-hover">Privacy policy</a>
                              <a data-aos="fade-right" data-aos-delay="100" className="link link-hover">Cookie policy</a>
                        </div>
                        {/* Contact */}
                        <div>
                              <h6 className="footer-title">Contact</h6>
                              <p data-aos="fade-right" className="flex gap-3">
                                    <span className="pt-1"> <IoLocationSharp /></span>
                                    House: 13 (1st floor), Road: 2/B,
                                    <br /> Pallabi R/A, Mirpur,Dhaka- 1216
                              </p>
                              <p data-aos="fade-right" data-aos-delay="50" className="flex gap-3">
                                    <span className="pt-1"><FaPhone /></span>
                                    +8801935366675
                              </p>
                              <p data-aos="fade-right" data-aos-delay="100" className="flex gap-3">
                                    <span className="pt-1"><MdEmail /></span>
                                    info@winter-shield.com
                              </p>
                        </div>
                  </div>
                  <div data-aos="zoom-in" className="py-5 border-b border-b-gray-400"></div>
                  <p className="text-center text-sm sm:text-[16px] font-semibold pt-5">
                        &copy; Winter Shield {new Date().getFullYear()}. All Right Reserved.
                  </p>
            </footer>
      )
}

export default Footer