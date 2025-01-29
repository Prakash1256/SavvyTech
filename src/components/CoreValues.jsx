import React, { useEffect } from "react";
import {
  FaUsers,
  FaRocket,
  FaPeopleCarry,
  FaHandshake,
  FaTools,
  FaAtom,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const CoreValues = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const values = [
    {
      title: "Leadership",
      icon: <FaUsers />,
      description:
        "We lead with integrity, innovation, and vision, empowering businesses to stay ahead in the digital world.",
      bgImage:
        "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      title: "Agility",
      icon: <FaRocket />,
      description:
        "We adapt quickly to change, providing flexible, agile, and scalable solutions tailored to meet evolving business needs.",
      bgImage:
        "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      title: "Brilliance",
      icon: <FaAtom />,
      description:
        "We lead with integrity, innovation, and vision, empowering businesses to stay ahead in the digital world.",
      bgImage:
        "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      title: "Respect",
      icon: <FaHandshake />,
      description:
        "We foster a culture of respect, diversity, and inclusion, valuing every team member's contribution.",
      bgImage:
        "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      title: "Yielding Innovation",
      icon: <FaTools />,
      description:
        "We continuously innovate, ensuring that our solutions lead to growth and sustained success for our clients.",
      bgImage:
        "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      title: "Synergy",
      icon: <FaPeopleCarry />,
      description:
        "We believe in the power of collaboration, working closely with clients and partners to cultivate strong and life-long relationships.",
      bgImage:
        "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
  ];

  return (
    <div className="bg-black  min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h2
        className="text-5xl font-bold mb-30  text-center text-[#feead8]"
        data-aos="fade-left"
      >
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
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
              className="relative p-6 rounded-lg shadow-lg group overflow-hidden"
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
              {/* Content wrapper with 3D translation */}
              <div className="flex flex-col cursor-pointer items-center justify-center text-center text-white h-full relative z-10">
                <span className="text-4xl text-[#feead8] mb-4 group-hover:text-teal-300 transition-colors">
                  {value.icon}
                </span>
                <h3 className="mt-4 text-xl text-[#feead8] font-bold">
                  {value.title}
                </h3>
                <p className="text-[#feead8] text-sm mt-3">
                  {value.description}
                </p>
              </div>{" "}
              *
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
