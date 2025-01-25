import React, { useEffect } from "react";
import { FaUsers, FaRocket, FaStar, FaHandshake, FaTools, FaLightbulb } from "react-icons/fa";
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
      bgImage: "url('https://img.freepik.com/free-photo/dark-silhouettes-man-woman-business-attire-standing-against-window-office_1098-20185.jpg?t=st=1737817140~exp=1737820740~hmac=61fd6b109574807da4c28401d6e726f974180a2697b32ea9b494985d393780a2&w=996')",
    },
    {
      title: "Agility",
      icon: <FaRocket />,
      description:
        "We adapt quickly to change, providing flexible, agile, and scalable solutions tailored to meet evolving business needs.",
      bgImage: "url('https://img.freepik.com/free-photo/confident-business-people-standing-together_53876-98344.jpg?t=st=1737817208~exp=1737820808~hmac=afe3f3f3d57ce0c19e49c21109465285a2dbd61ec3d1f803a11295cf28391579&w=1380')",
    },
    {
      title: "Brilliance",
      icon: <FaLightbulb />,
      description:
        "We lead with integrity, innovation, and vision, empowering businesses to stay ahead in the digital world.",
      bgImage: "url('https://img.freepik.com/free-photo/dark-silhouette-businessman-standing-office-window-holding-tablet-smartphone_1098-20169.jpg?t=st=1737816293~exp=1737819893~hmac=f5123bbfdd254785652a4b4f11f102e9ce827f776a78cfda03135d0d2e768dcd&w=996')",
    },
    {
      title: "Respect",
      icon: <FaHandshake />,
      description:
        "We foster a culture of respect, diversity, and inclusion, valuing every team member's contribution.",
      bgImage: "url('https://img.freepik.com/free-photo/private-investigator-organizes-archived-files-easy-access_482257-93144.jpg?t=st=1737816359~exp=1737819959~hmac=f3358262d0a2ac7e126df90f60e4afa57c4d9c33d8a37bc8c72723900dbdc7fa&w=1380')",
    },
    {
      title: "Yielding Innovation",
      icon: <FaTools />,
      description:
        "We continuously innovate, ensuring that our solutions lead to growth and sustained success for our clients.",
      bgImage: "url('https://img.freepik.com/free-photo/man-near-window_1157-18927.jpg?t=st=1737816960~exp=1737820560~hmac=5e423bad24844306089bef6d65fdbd4916c37437699f4afa9f7e605cbac48dcd&w=996')",
    },
    {
      title: "Synergy",
      icon: <FaStar />,
      description:
        "We believe in the power of collaboration, working closely with clients and partners to cultivate strong and life-long relationships.",
      bgImage: "url('https://img.freepik.com/free-photo/dark-silhouette-woman-standing-against-window-office-using-smartphone_1098-20174.jpg?t=st=1737817000~exp=1737820600~hmac=4c83778507ce8e8f9480ccb75b27006a25817c0241b65bab5915de80cfa4b9d8&w=996')",
    },
  ];

  return (
    <div className="bg-black  min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-6xl font-bold mb-30 text-center text-[#feead8]"  data-aos="fade-left">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
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
              className="relative p-6 rounded-lg shadow-lg group transform transition duration-300 ease-in-out"
              style={{
                backgroundImage: value.bgImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                className="absolute inset-0 bg-black opacity-40" // This layer will provide the opacity
                style={{ zIndex: -1 }}
              ></div>
              <div className="flex flex-col items-center justify-center text-center text-white h-full relative z-10">
                <span className="text-2xl text-[#feead8] mb-4">{value.icon}</span>
                <h3 className="mt-4 text-xl text-[#feead8] font-bold">{value.title}</h3>
                <p className="text-[#feead8] text-sm mt-3">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
