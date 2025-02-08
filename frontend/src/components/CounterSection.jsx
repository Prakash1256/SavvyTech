import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {
  const counters = [
    { value: 70, label: "YEARS OF FOUNDERS EXPERIENCE" },
    { value: 10, label: "HAPPY CUSTOMERS" },
    { value: 15, label: "PROJECTS AND PRODUCTS DELIVERED" },
    { value: 3, label: "COUNTRIES" },
    { value: 7, label: "BUSINESS AND INDUSTRIES DOMAINS" },
    { value: 50, label: "TECHNOLOGISTS, DIGITAL ENGINEERS AND CONSULTANTS" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, 
  });

  return (

    <section className="bg-black">
     <div
      ref={ref}
      className="flex flex-wrap justify-between gap-4 mx-auto p-4 pt-10 max-w-[80%]"
    >
      {counters.map((counter, index) => (
        <div
          key={index}
          className="flex-1 min-w-[140px] sm:w-[140px]  p-4 text-center bg-black  rounded-lg"
        >
          {inView && (
            <h2 className="text-3xl font-extrabold text-[#feead8]">
              <CountUp start={0} end={counter.value} suffix="+" duration={2} />
            </h2>
          )}
          <p className="text-[#feead8] mt-2 text-xs">{counter.label}</p>
        </div>
      ))}
    </div>
    </section>
    
  );
};

export default CounterSection;
