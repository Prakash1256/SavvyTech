import React, { useEffect } from "react";
import {
  FaDigitalOcean,
  FaRegUserCircle,
  FaCloud,
  FaChartPie,
  FaMicrochip,
  FaLaptopCode,
  FaShoppingBag,
  FaSatellite,
} from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";

const Service1 = () => {
  useEffect(() => {
       Aos.init({ duration: 1000, once: false });
       const handleScroll = () => {
         Aos.refresh(); 
       };
   
       window.addEventListener("scroll", handleScroll);
       return () => window.removeEventListener("scroll", handleScroll);
     }, []);  


     const values = [
      {
        title: "Digital Transformation",
        icon: <FaDigitalOcean />,
        description:
          "We lead with integrity, innovation, and vision, empowering businesses to stay ahead in the digital world.",
      },
      {
        title: "It Consulting",
        icon: <FaRegUserCircle />,
        description:
          "We adapt quickly to change, providing flexible, agile, and scalable solutions tailored to meet evolving business needs.",
      },
      {
        title: "Customer Software Development",
        icon: <GrCloudSoftware />,
        description:
          "We lead with integrity, innovation, and vision, empowering businesses to stay ahead in the digital world.",
      },
      {
        title: "Cloud Solutions",
        icon: <FaCloud />,
        description:
          "We foster a culture of respect, diversity, and inclusion, valuing every team member's contribution.",
      },
      {
        title: "Data & Analytics",
        icon: <FaChartPie />,
        description:
          "We continuously innovate, ensuring that our solutions lead to growth and sustained success for our clients.",
      },
      {
        title: "Artificial Intelligence",
        icon: <FaMicrochip />,
        description:
          "We believe in the power of collaboration, working closely with clients and partners to cultivate strong and life-long relationships.",
      },
      {
        title: "Web & Mobile App Development",
        icon: <FaLaptopCode />,
        description:
          "We foster a culture of respect, diversity, and inclusion, valuing every team member's contribution.",
      },
      {
        title: "Ecommerce Platform",
        icon: <FaShoppingBag />,
        description:
          "We continuously innovate, ensuring that our solutions lead to growth and sustained success for our clients.",
      },
      {
        title: "IoT & Development",
        icon: <FaSatellite />,
        description:
          "We believe in the power of collaboration, working closely with clients and partners to cultivate strong and life-long relationships.",
      },
    ];
    

  return (
    <div
      id="services"
      className="bg-black  min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <h2
        className="text-3xl font-bold mb-20  text-center text-[#feead8]"
        data-aos="fade-left"
      >
        Comprehensive Suite Of Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl md:max-w-[80%]">
        {values.map((value, index) => {
          const animationType = [
            "fade-up",
            "fade-left",
            "fade-down",
            "fade-right",
          ][index % 4];

          return (
            <div
              key={index}
              data-aos={animationType}
             className="relative p-2 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-gray-700 hover:border-indigo-500 transform transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(75,0,130,0.9)] duration-300 ease-in-out"


              style={{
                backgroundImage: value.bgImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute inset-0 bg-black opacity-40"
                style={{ zIndex: -1 }}
              ></div>

                <div className="flex flex-col items-center  shadow-lg p-4  cursor-pointer justify-center text-center text-white h-full relative z-10 transform transition-transform duration-1000 group-hover:translate-z-10 group-hover:scale-118">

                <span className="text-4xl text-[#feead8] mb-4 group-hover:text-[#feead8] transition-colors">
                  {value.icon}
                </span>
                <h3 className="mt-4 text-xl text-[#feead8] font-bold">
                  {value.title}
                </h3>
                <p className="text-[#feead8] text-sm mt-3">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service1;