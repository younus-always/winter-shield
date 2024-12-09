/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const CampaignCard = ({ campaign }) => {
      const { image, title, id, description, division } = campaign || {};
      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 700,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      return (
            <div data-aos="zoom-in-up" className="card bg-base-100 shadow-lg hover:shadow-xl">
                  <figure className="p-4">
                        <img src={image} alt={title} className="h-52 w-full object-cover rounded-lg" />
                  </figure>
                  <div className="card-body pt-6">
                        <h2 className="card-title text-xl font-semibold">{title}</h2>
                        <p className="text-gray-700">{description}</p>
                        <p className="text-sm text-gray-500">Division: {division}</p>
                        <div className="card-actions justify-end">
                              <Link to={`/details/${id}`} className="btn btn-warning font-bold text-slate-800">
                                    Donate Now
                              </Link>
                        </div>
                  </div>
            </div>
      );
};


export default CampaignCard