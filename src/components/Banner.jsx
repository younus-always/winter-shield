import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {
      useEffect(() => {
            AOS.init({
                  offset: 100,
                  duration: 500,
                  easing: 'ease-in-out',
            });

            AOS.refresh();

      }, [])

      var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            pauseOnHover: false,
            autoplaySpeed: 3000,
      };

      const slides = [
            {
                  title: "Help Us Keep Others Warm This Winter",
                  description:
                        "Join hands to spread warmth to those in need. Donate your gently used winter clothing today.",
                  button: "Donate Now",
                  bgImage: "https://img.freepik.com/free-vector/characters-giving-their-clothes-charity_23-2148823233.jpg?t=st=1732006723~exp=1732010323~hmac=49bf757e736684aab393e5b7371a1d496f79b300d646684ab12e8f84460e0a6d&w=996",
            },
            {
                  title: "Your Support Brings Smiles This Winter",
                  description:
                        "Every jacket, hat, or scarf you give can make a world of difference for someone in need.",
                  button: "Make a Difference",
                  bgImage: "https://images.pexels.com/photos/14831743/pexels-photo-14831743.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                  title: "Volunteer with Us to Make an Impact",
                  description:
                        "Be a part of our mission to help communities during the cold season. Together, we can achieve more.",
                  button: "Join as a Volunteer",
                  bgImage: "https://img.freepik.com/free-vector/volunteering-flat-infographics-with-volunteers-cleaning-area-working-soup-kitchen-helping-animals-senior-people-vector-illustration_98292-9078.jpg?t=st=1732009799~exp=1732013399~hmac=16a0807d9eb7fa973bc06df24ed18b8054714aeb09d9c806e707609762656d77&w=996",
            },
      ];

      return (
            <div className="w-full mx-auto overflow-hidden relative cursor-grab">
                  <Slider {...settings}>
                        {slides.map((slide, index) => (
                              <div
                                    key={index}
                                    className="relative w-full h-[600px] flex items-center justify-center"
                              >
                                    <div
                                          className="absolute inset-0"
                                          style={{
                                                backgroundImage: `url(${slide.bgImage})`,
                                                backgroundSize: "cover",
                                          }}
                                    ></div>
                                    <div className="bg-black/70 relative z-10 w-full h-full p-5 flex flex-col items-center justify-center text-center text-white">
                                          <h1 data-aos="zoom-in-down" className="text-3xl md:text-4xl font-bold mb-4">
                                                {slide.title}
                                          </h1>
                                          <p data-aos="zoom-in-right" className="mb-4">{slide.description}</p>
                                          <button data-aos="fade-up" data-aos-duration="800" className="btn btn-warning font-bold">{slide.button}</button>
                                    </div>
                              </div>
                        ))}
                  </Slider>
            </div>
      );
};

export default Banner;
