import React, { useState, useEffect } from 'react';
import { FaSyncAlt, FaUserCheck, FaLaptop, FaDatabase, FaVolumeUp, FaShieldAlt, FaAward } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Solution = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const features = [
    { icon: <FaSyncAlt className="text-[#feead8] text-5xl" />, title: '360 Degree Room Scan', description: 'The Wheebox Room Scan enables remote proctoring through a complete 360-degree view of candidates’ premises to scan for any sort of malpractice.' },
    { icon: <FaVolumeUp className="text-5xl text-[#feead8]" />, title: 'Noise Detection Using AI Services', description: 'The Wheebox AI helps detect noise and sends out alerts to candidates and proctors regarding the noise detected.' },
    { icon: <FaUserCheck className="text-5xl text-[#feead8]" />, title: 'Student Authentication and Approval', description: 'Physical Approvers eliminate any risk of impersonation using a Two-Factor authentication process.' },
    { icon: <FaLaptop className="text-7xl text-[#feead8]" />, title: 'Artificial Intelligence (AI) Services', description: 'Wheebox uses Microsoft Cognitive AI Services for Face Recognition and Object Identification, and has its own in-house AI Services such as Face Tracking and Voice Tracking.' },
    { icon: <FaShieldAlt className="text-5xl text-[#feead8]" />, title: 'Wheebox Safe Exam Browser', description: 'SEB prohibits the navigation, sharing, and projection of the assessment screen to ensure a safe and secure assessment environment.' },
    { icon: <FaLaptop className="text-8xl text-[#feead8]" />, title: 'Advanced Remote Proctoring Tools', description: 'Physical Remote Proctors monitor and manage the sanctity of assessments using the Wheebox Advanced Remote Proctoring Suite with services such as Face Tracking, Desktop Control, 360 Degree Scan, Audio, and Candidate Proxy Check.' },
    { icon: <FaDatabase className="text-5xl text-[#feead8]" />, title: 'Data Security and Storage of Records', description: 'The Wheebox Remote Proctoring Services offer end-to-end encrypted data security, which includes images, question banks, results, and logs that are created during assessments.' },
    { icon: <FaAward className="text-5xl text-[#feead8]" />, title: 'Wheebox Certified Proctors', description: 'Wheebox has hundreds of Certified Physical Proctors who are trained to manage applications and check for malpractices during assessments.' }
  ];

  return (
    <section className='bg-black'>
        <div  className="flex flex-col items-center p-6 pt-10">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#feead8] mb-6 text-center"> Intelligent Remote Proctoring Suit for High Exam</h2>
      
      {/* Container */}
      <div className="w-full max-w-7xl mx-auto bg-black p-6 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-black shadow-md rounded-lg p-4"
            data-aos={index % 4 === 0 ? 'fade-up' : index % 4 === 1 ? 'fade-down' : index % 4 === 2 ? 'fade-right' : 'fade-left'}
          >
            {feature.icon}
            <div>
              <h3 className="text-lg text-[#feead8] font-bold mb-1">{feature.title}</h3>
              <p className="text-[#feead8]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Solution;
