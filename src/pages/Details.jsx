import { useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../hook/useTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Details = () => {
      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 500,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      useTitle("Donation details");
      const singleData = useLoaderData();
      const { image, title, description, division, contactInfo, type } = singleData || {};
      const navigate = useNavigate()

      const [formData, setFormData] = useState({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            notes: "",
      });

      // Handle Input Change
      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      // Handle Form Submission
      const handleSubmit = (e) => {
            e.preventDefault();
            toast.success("Thank you! We will reach your destination soon.");
            setFormData({ quantity: "", itemType: "", pickupLocation: "", notes: "" })
            navigate('/')
      };

      return (
            <>
                  <div className="p-5 w-full lg:max-w-6xl mx-auto">
                        {/* Campaign Details Header */}
                        <div data-aos="zoom-in" className="bg-blue-100 p-6 rounded-lg shadow-md mb-6 max-w-3xl mx-auto lg:max-w-6xl">
                              <h1 className="text-3xl font-bold mb-4">Help Us Keep Others Warm</h1>
                              <p className="mb-4">
                                    Join our donation campaign to help people in need during the winter
                                    season. Every jacket, blanket, or sweater you donate can make a
                                    difference!
                              </p>
                              <p>
                                    <strong>Contact:</strong> +880123456789
                              </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-7">
                              {/* Donation Details Section */}
                              <div data-aos="fade-right">
                                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto">
                                          <img
                                                src={image}
                                                alt={title}
                                                className="rounded-md object-cover w-full h-64 mb-4"
                                          />
                                          <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
                                          <p className="text-gray-600 mb-4">{description}</p>

                                          <div className="mb-4 space-y-1">
                                                <p className="text-gray-700">
                                                      <strong>Division:</strong> {division}
                                                </p>
                                                <p className="text-gray-700">
                                                      <strong>Type:</strong> {type}
                                                </p>
                                                <p className="text-gray-700">
                                                      <strong>Contact Info:</strong> {contactInfo}
                                                </p>
                                          </div>
                                    </div>
                              </div>

                              {/* Donation Form Section */}
                              <div data-aos="fade-left" className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
                                    <h2 className="text-2xl font-bold mb-4">Donation Form</h2>
                                    <form onSubmit={handleSubmit}>
                                          {/* Quantity Field */}
                                          <div className="form-control mb-4">
                                                <label className="label font-bold">Quantity of Items</label>
                                                <input
                                                      type="number"
                                                      name="quantity"
                                                      value={formData.quantity}
                                                      onChange={handleChange}
                                                      className="input input-bordered w-full"
                                                      placeholder="E.g., 2 jackets, 3 blankets"
                                                      required
                                                />
                                          </div>

                                          {/* Item Type Field */}
                                          <div className="form-control mb-4">
                                                <label className="label font-bold">Item Type</label>
                                                <select
                                                      name="itemType"
                                                      value={formData.itemType}
                                                      onChange={handleChange}
                                                      className="select select-bordered w-full"
                                                      required
                                                >
                                                      <option value="" disabled>
                                                            Select Item Type
                                                      </option>
                                                      <option value="Blanket">Blanket</option>
                                                      <option value="Jacket">Jacket</option>
                                                      <option value="Sweater">Sweater</option>
                                                      <option value="Scarves and Caps">Scarves and Caps</option>
                                                      <option value="Other">Other</option>
                                                </select>
                                          </div>

                                          {/* Pickup Location Field */}
                                          <div className="form-control mb-4">
                                                <label className="label font-bold">Pickup Location</label>
                                                <input
                                                      type="text"
                                                      name="pickupLocation"
                                                      value={formData.pickupLocation}
                                                      onChange={handleChange}
                                                      className="input input-bordered w-full"
                                                      placeholder="E.g., House 12, Road 5, Dhanmondi, Dhaka"
                                                      required
                                                />
                                          </div>

                                          {/* Additional Notes Field */}
                                          <div className="form-control mb-4">
                                                <label className="label font-bold">Additional Notes</label>
                                                <textarea
                                                      name="notes"
                                                      value={formData.notes}
                                                      onChange={handleChange}
                                                      className="textarea textarea-bordered w-full"
                                                      placeholder="Any additional information"
                                                ></textarea>
                                          </div>

                                          {/* Submit Button */}
                                          <button type="submit" className="btn bg-prime hover:bg-prime/80 font-bold text-slate-50 w-full">
                                                Donate
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </>
      )
};

export default Details;
