import React, { useEffect } from "react";
import { FaAws, FaDocker, FaNode, FaPython, FaJava, FaReact, FaAngular, FaBootstrap, FaHtml5, FaCss3, FaBolt, FaChartLine, FaDatabase, FaUserAlt, FaMicrosoft, FaWordpress, FaShopify } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiGoogleCloudPlatform, DiMsqlServer, DiPostgresql, DiMongodb, DiMysql } from "react-icons/di";
import { SiChef, SiApache, SiSpring, SiExpress, SiApachecordova, SiTensorflow, SiKeras, SiCplusplus, SiPandas, SiJupyter, SiNumpy, SiRabbitmq, SiOracle, SiSqlite, SiApachecassandra, SiRedis, SiApachecouchdb, SiApachekafka, SiElastic, SiLogstash, SiKibana } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { IoLogoIonic } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";

import Aos from "aos";
import "aos/dist/aos.css";

const techStack = [
  {
    category: "DEVOPS & INFRA",
    technologies: [FaAws, FaDocker, VscAzure, DiGoogleCloudPlatform, SiChef, SiApache]
  },
  {
    category: "CLOUD & WEB",
    technologies: [FaNode, FaPython, SiSpring, SiExpress, DiDotnet, FaWordpress, FaShopify]
  },
  {
    category: "MOBILITY",
    technologies: [IoLogoIonic, FaJava, SiApachecordova, FaReact, SiCplusplus]
  },
  {
    category: "FRONTEND",
    technologies: [FaReact, FaAngular, FaBootstrap, FaHtml5, FaCss3, TbBrandJavascript]
  },
  {
    category: "ANALYTICS",
    technologies: [SiTensorflow, SiKeras, FaBolt, SiPandas, SiJupyter, SiNumpy, SiRabbitmq, FaChartLine]
  },
  {
    category: "DATABASE",
    technologies: [DiMsqlServer, SiOracle, SiSqlite, DiPostgresql, SiApachecassandra, DiMongodb, SiRedis, DiMysql, SiApachecouchdb, FaDatabase]
  },
  {
    category: "ERP & CRM",
    technologies: [MdMiscellaneousServices, FaMicrosoft]
  },
  {
    category: "OTHERS",
    technologies: [SiApachekafka, SiElastic, SiLogstash, SiKibana, SiRabbitmq]
  }
];

const TechnologyStack = () => {
   useEffect(() => {
        Aos.init({ duration: 1000, once: false });
        const handleScroll = () => {
          Aos.refresh(); 
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);  

  return (
    <section id="tech" className="" 
    style={{
      backgroundImage:
        'url("./images/tech.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    
    }}
    >
      <div className="max-w-[80%] mx-auto p-6 text-center">
        <h1 className="text-3xl text-[#feead8] font-bold mb-16" data-aos="fade-up">
          Full Spectrum Technology Stack Capabilities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-6 md:space-y-0">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className=" p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-2xl flex flex-col items-center border border-gray-700 hover:border-indigo-500 transform transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(75,0,130,0.7)]"


              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <h2 className="text-xl font-semibold mb-3 text-[#feead8]" data-aos="fade-up">
                {stack.category}
              </h2>
              <ul className="flex flex-wrap justify-center items-center space-y-4">
                {stack.technologies.map((Icon, idx) => (
                  <li key={idx} className="text-[#feead8] text-3xl p-2" data-aos="fade-up">
                    <Icon />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
