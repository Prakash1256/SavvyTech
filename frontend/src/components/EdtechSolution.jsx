import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const features = [
  { id: 1, title: "Personalized Learning", description: "Tailoring learning experiences to meet the individual needs and learning styles of each student." },
  { id: 2, title: "Interactive Content & Gamification", description: "Creating engaging and interactive learning content that fosters active participation and knowledge retention." },
  { id: 3, title: "Teacher Training & Support", description: "Providing comprehensive training and support to educators, empowering them to leverage technology effectively." },
  { id: 4, title: "Assessment & Analytics", description: "Utilizing data-driven insights to track student progress, identify areas for improvement, and personalize instruction." },
];

export default function EdTechSolutions() {
   useEffect(() => {
        Aos.init({ duration: 1000, once: false });
        const handleScroll = () => {
          Aos.refresh(); 
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);  

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div id="solutions" className="bg-black text-white min-h-screen py-16 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Image Section */}
        <div className="h-full flex justify-center items-center " data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Educational Feature"
            className="rounded-xl object-cover w-full h-full min-h-[300px] md:min-h-full"
          />
        </div>

        {/* Content Section */}
        <div className="h-full flex flex-col justify-center " data-aos="fade-left">
          <h1 className="text-4xl md:text-3xl font-bold mb-8 text-[#feead8]">
            EdTech Solutions: Empowering Education
          </h1>
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative pl-6 py-4 bg-black hover:shadow-lg"
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`absolute left-0 top-0 h-full w-[1px] ${
                    hoveredId === feature.id ? "bg-indigo-500" : "bg-transparent"
                  } transition-all duration-300`}
                />
                <h2 className="text-2xl font-semibold text-[#feead8]">
                  {feature.title}
                </h2>
                <p className="mt-2 text-[#feead8]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
