import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MainSection = () => {
  // Function to handle scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const text = "Innovative, Scalable, Agile, and Intelligent Solutions...";

  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-screen px-6 pt-16"
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{
          backgroundImage: 'url("/images/teckno3.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative w-full max-w-5xl sm:max-w-[80%] text-center">
        <h1
          key={key}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#feead8] leading-tight pb-5"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <button
          className="bg-gradient-to-r font-medium from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none  font-400 cursor-pointer text-white px-10 py-2 rounded-xl hover:text-black transition duration-300"
          onClick={scrollToAbout}
        >
          Read More...
        </button>
      </div>
    </section>
  );
};

export default MainSection;
