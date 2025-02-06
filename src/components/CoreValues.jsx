import { FaHandshake, FaCheckCircle, FaVideo, FaHeart, FaBinoculars, FaTrophy } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const coreValues = [
  { icon: <FaHandshake className="text-black text-4xl" />, title: "Leadership", color: "bg-[#feead8]", description:"We lead with intergrity , innovation , and vision , empowering buisness to stay ahead in the digital world ." },
  { icon: <FaCheckCircle className="text-black text-4xl" />, title: "Agility", color: "bg-[#feead8]",description:"We adapt quickly to change providing flexible , agile and scalable solutions taiolred to meet evovling buisness need" },
  { icon: <FaVideo className="text-black text-4xl" />, title: "Brilliance", color: "bg-[#feead8]",description:"We lead with intergrity , innovation , and vision empowering business to stay ahead in the digital world " },
  { icon: <FaHeart className="text-black text-4xl" />, title: "Respect", color: "bg-[#feead8]",description:"We foster a culture of respect diversity and inclusion valuing every team memebers contribution" },
  { icon: <FaBinoculars className="text-black text-4xl" />, title: "Yielding innovation", color: "bg-[#feead8]",description:"We continuosly innovate , ensuring that our solutions lead to growth and sustained success for our clients " },
  { icon: <FaTrophy className="text-black text-4xl" />, title: "Synergy", color: "bg-[#feead8]" ,description:"We beieve in the power of collaboration working closely with clients and partners to the cultivate strong and life-long"}
];

export default function CoreValues() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black"  >
      <div className="w-3/4 m-auto">
        <h2 className="text-4xl font-bold text-[#feead8] text-center mb-10">Our Core Values</h2>
        <div className="pt-10 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className=" flex flex-col items-center text-center p-4 shadow-lg rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-gray-700 hover:border-indigo-500 transform transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(75,0,130,0.8)] duration-300 ease-in-out"
              data-aos={index % 4 === 0 ? "fade-left" : index % 4 === 1 ? "fade-right" : index % 4 === 2 ? "fade-up" : "fade-down"}
              style={{
                backgroundImage:
                  'url("./images/AI.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={`w-20 h-20 flex items-center justify-center rounded-full ${value.color}`}>
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#feead8] mt-4">{value.title}</h3>
              <p className="text-sm text-[#feead8]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
