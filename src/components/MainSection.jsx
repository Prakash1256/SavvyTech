import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Function to handle scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-screen px-6"
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{
          backgroundImage: 'url("./images/building.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative w-full max-w-5xl sm:max-w-[80%] text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#feead8] leading-tight pb-5">
          Innovative, Scalable, Agile, and Intelligent Solutions
        </h1>
        <button
          className="bg-teal-500  font-400 cursor-pointer text-white px-10 py-2 rounded-xl  hover:text-black transition duration-300"
          onClick={scrollToAbout}
        >
          Read More...
        </button>
      </div>
    </section>
  );
};

export default MainSection;
