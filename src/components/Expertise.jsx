import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import CountUp from "react-countup"; // Import CountUp for the counting effect
import { useInView } from "react-intersection-observer"; // Hook to detect visibility

export default function Expertise() {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // The counting starts only once when visible
    threshold: 0.3, // Trigger when 30% of the div is visible
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true); // Start counting when div is in view
    }
  }, [inView]);
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <h2 className="text-center text-4xl">My Expertise</h2>
      <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-md text-gray-300">
            Welcome to my portfolio! I am passionate about modern web and app
            development, leveraging cutting-edge technologies to create dynamic,
            responsive, and user-friendly applications. Whether you want to
            express yourself however and whenever you want, or need a robust
            platform for your business, I am here to help you bring your vision
            to life.
            <br />I specialize in utilizing a variety of powerful tools and
            frameworks to build high-quality web and mobile applications.
          </p>
        </div>
        {/* Skills and Education Section */}
        <div className="flex flex-col justify-between w-full md:w-1/2 space-y-4 p-4">
          {/* Skills */}
          <div className="w-full p-6 flex flex-col items-start space-y-6">
            <h3 className="text-1xl text-gray-300">Skills:</h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex items-center space-y-2 flex-col">
                <FaReact className="text-blue-500 text-1xl" />
                <span className="text-gray-300">React</span>
              </div>
              <div className="flex items-center space-y-2 flex-col">
                <FaReact className="text-blue-500 text-1xl" />
                <span className="text-gray-300">React Native</span>
              </div>
              <div className="flex items-center space-y-2 flex-col">
                <SiNextdotjs className="text-black text-1xl text-white" />
                <span className="text-gray-300">Next.js</span>
              </div>
              <div className="flex items-center space-y-2 flex-col">
                <FaNodeJs className="text-green-500 text-1xl" />
                <span className="text-gray-300">Node.js</span>
              </div>
              <div className="flex items-center space-y-2 flex-col">
                <SiExpress className="text-gray-500 text-1xl" />
                <span className="text-gray-300">Express.js</span>
              </div>
              <div className="flex items-center space-y-2 flex-col">
                <SiMongodb className="text-green-700 text-1xl" />
                <span className="text-gray-300">MongoDB</span>
              </div>
              <div className="flex items-center space-y-2 flex-col">
                <SiPostgresql className="text-blue-500 text-1xl" />
                <span className="text-gray-300">Postgres</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="w-full p-6 flex flex-col items-start space-y-6">
            <h3 className="text-1xl text-gray-300">Education:</h3>
            <p className="text-md text-gray-300 ml-4">
              2022 - Present: Computer Science, Addis Ababa University
            </p>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div
        ref={ref}
        className="flex flex-col md:flex-row justify-center md:justify-between w-full md:w-4/5 mt-10 space-y-4"
      >
        {/* Coding Hours */}
        <div className="flex flex-row">
          {startCount && (
            <div className="flex flex-row text-center">
              <CountUp
                start={0}
                end={6000}
                duration={3}
                className="text-5xl font-bold text-lime-500"
              />
              <p className="text-3xl text-lime-500">+</p>
            </div>
          )}
          <p className="text-xl text-gray-300 pl-2">
            Coding <br /> Hours
          </p>
        </div>

        {/* Completed Projects */}
        <div className="flex flex-row">
          {startCount && (
            <div className="flex flex-row text-center">
              <CountUp
                start={0}
                end={10}
                duration={3}
                className="text-5xl font-bold text-lime-500"
              />
              <p className="text-3xl text-lime-500">+</p>
            </div>
          )}
          <p className="text-xl text-gray-300 pl-2">
            Completed <br /> Projects
          </p>
        </div>

        {/* Satisfied Customers */}
        <div className="flex flex-row">
          {startCount && (
            <div className="flex flex-row text-center">
              <CountUp
                start={0}
                end={3}
                duration={3}
                className="text-5xl font-bold text-lime-500"
              />
              <p className="text-3xl text-lime-500">+</p>
            </div>
          )}
          <p className="text-xl text-gray-300 pl-2">
            Satisfied <br /> Customers
          </p>
        </div>
      </div>
    </div>
  );
}
