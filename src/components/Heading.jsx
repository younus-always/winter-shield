/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Heading = ({ title, subtitle }) => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });

    AOS.refresh();

  }, [])

  return (
    <div className="w-11/12 mx-auto py-6" data-aos="zoom-in">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-2">{title}</h2>
      <p className="text-lg font-semibold text-gray-600 text-center">{subtitle}</p>
    </div>
  )
}

export default Heading