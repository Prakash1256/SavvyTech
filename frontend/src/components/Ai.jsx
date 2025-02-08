import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const solutions = [
  {
    title: "TRANSPORT",
    items: ["Lpr", "Uic & Container", "Smart Parking", "Traffic Enforcement"],
  },
  {
    title: "SAFETY AND SECURITY",
    items: [
      "Face Recognition",
      "Smart Va",
      "Gun Detection",
      "Object Detection",
      "Smart Tracking System",
      "Motion Detection",
    ],
  },
  {
    title: "SECURITY AND BUSINESS ANALYSIS",
    items: ["Traffic Analytics", "Heat Map", "Age & Gender Detection"],
  },
  {
    title: "PREVENTION",
    items: ["Hard Hat Detection", "Pose Estimation", "Smoke & Fire Detection"],
  },
];

export default function Ai() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
    const handleScroll = () => {
      Aos.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const aosAnimations = ["fade-up", "fade-down", "fade-left", "fade-right"];

  return (
    <section
      id="ai"
      style={{
        backgroundImage: 'url("/images/robot5.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 md:max-w-[80%]">
        <h2 className="text-center text-2xl pb-10 md:text-3xl font-bold text-[#feead8] mb-8">
          AI-Enabled Solutions for Mass Adoption
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              data-aos={aosAnimations[index % aosAnimations.length]}
              className="p-6 rounded-2xl shadow-lg hover:border-indigo-500 transform transition-all hover:scale-105"
            >
              <h3 className="text-lg text-[#feead8] text-center font-semibold mb-4">
                {solution.title}
              </h3>
              <ul className="relative space-y-2">
                {solution.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#feead8] cursor-pointer text-sm px-4 py-1 list-disc relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(`${index}-${idx}`)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Animated Vertical Line */}
                    <span
                      className="absolute left-0 top-0 w-0.5 bg-indigo-600 transition-all duration-500 ease-in-out"
                      style={{
                        height: hoveredIndex === `${index}-${idx}` ? "100%" : "0%",
                      }}
                    />
                    * {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
