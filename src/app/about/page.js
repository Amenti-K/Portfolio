"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Use Next.js Link for the resume download
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import CountUp from "react-countup"; // Import CountUp for the counting effect
import { useInView } from "react-intersection-observer"; // Hook to detect visibility

export default function About() {
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
    <div>
      <div className="flex items-center justify-center h-screen dark:bg-zinc-100 bg-gray-900 p-10">
        {/* Left Section: Bold Text */}
        <div className="w-1/2 flex justify-center items-start">
          <h1 className="text-5xl font-bold dark:text-black text-white p-4">
            2+
          </h1>
          <p className="text-5xl font-bold dark:text-black text-white p-4">
            Years
          </p>
        </div>

        {/* Right Section: About Me */}
        <div className="w-1/2 p-6 flex flex-col items-start space-y-6">
          {/* Title */}
          <h2 className="text-3xl font-bold dark:text-lime-500 text-yellow-300">
            About Me
          </h2>

          {/* Paragraph */}
          <p className="text-lg dark:text-gray-800 text-gray-300">
            With over two years of experience as a professional web and mobile
            app developer, I have acquired the skills and expertise necessary to
            ensure the success of your project. I take pride in every step of
            the design process, from collaborative discussions to creating
            user-centered solutions.
          </p>

          {/* Resume Button */}
          <Link href="/assets/resume.pdf" passHref>
            <button className="px-4 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-600 transition">
              Resume
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col h-screen bg-zinc-100 dark:bg-gray-900 p-10">
        <div className="flex items-center justify-center bg-zinc-100 dark:bg-gray-900 p-10 pb-0">
          {/* Left Section: Expert Title and Paragraph */}
          <div className="w-1/2 p-6 flex flex-col items-start space-y-6">
            <h2 className="text-4xl font-bold text-lime-500 dark:text-yellow-300">
              My Expertise
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              Welcome to my portfolio! I am passionate about modern web and app
              development, leveraging cutting-edge technologies to create
              dynamic, responsive, and user-friendly applications. Whether you
              want to express yourself however and whenever you want, or need a
              robust platform for your business, I am here to help you bring
              your vision to life.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              I specialize in utilizing a variety of powerful tools and
              frameworks to build high-quality web and mobile applications.
            </p>
          </div>

          {/* Right Section: Skills and Education Buttons */}
          <div className="w-1/2 p-6 flex flex-col items-start space-y-6">
            {/* Skills Section */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Skills
            </h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <FaReact className="text-blue-500 text-4xl" />
                <span className="text-gray-800 dark:text-white">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaReact className="text-blue-500 text-4xl" />
                <span className="text-gray-800 dark:text-white">
                  React Native
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <SiNextdotjs className="text-black text-4xl" />
                <span className="text-gray-800 dark:text-white">Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaNodeJs className="text-green-500 text-4xl" />
                <span className="text-gray-800 dark:text-white">Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <SiExpress className="text-gray-500 text-4xl" />
                <span className="text-gray-800 dark:text-white">
                  Express.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <SiMongodb className="text-green-700 text-4xl" />
                <span className="text-gray-800 dark:text-white">MongoDB</span>
              </div>
              <div className="flex items-center space-x-2">
                <SiPostgresql className="text-blue-500 text-4xl" />
                <span className="text-gray-800 dark:text-white">Postgres</span>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Education
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-300">
                2022 - Present: Computer Science, Addis Ababa University
              </p>
            </div>
          </div>
        </div>
        <div
          ref={ref}
          className="flex justify-between w-full px-32 text-center pt-10"
        >
          {/* Coding Hours */}
          <div>
            {startCount && (
              <CountUp
                start={0}
                end={6000}
                duration={3}
                className="text-5xl font-bold text-lime-500"
              />
            )}
            <p className="text-xl text-gray-800 dark:text-white mt-2">
              Coding Hours
            </p>
          </div>

          {/* Completed Projects */}
          <div>
            {startCount && (
              <CountUp
                start={0}
                end={10}
                duration={3}
                className="text-5xl font-bold text-lime-500"
              />
            )}
            <p className="text-xl text-gray-800 dark:text-white mt-2">
              Completed Projects
            </p>
          </div>

          {/* Satisfied Customers */}
          <div>
            {startCount && (
              <CountUp
                start={0}
                end={3}
                duration={3}
                className="text-5xl font-bold text-lime-500"
              />
            )}
            <p className="text-xl text-gray-800 dark:text-white mt-2">
              Satisfied Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
