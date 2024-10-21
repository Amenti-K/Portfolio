"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="flex items-center justify-around min-h-screen px-8 md:px-20 lg:px-32 relative text-white">
      {/* Left: HTML-like Enclosure */}
      <div className="hidden md:flex text-8xl font-bold w-1/6 bg-gradient-to-r from-[#00c8d6] to-[#262dfd] text-transparent bg-clip-text">
        &lt;
      </div>

      {/* Main Section: Content */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-4 md:p-6 flex flex-col items-start space-y-4">
        {/* Name */}
        <h1 className="text-3xl md:text-5xl w-max">Amenti Kebede</h1>

        {/* Professions with Typing Effect */}
        <h2 className="hidden md:flex text-1xl md:text-xl text-lime-500 w-max">
          ___You're goto{" "}
          <span className="sm:flex text-2xl text-lime-500">
            <Typewriter
              words={[
                " Website Developer",
                " UI/UX Designer",
                " Mobile App Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm md:text-lg text-gray-300">
          I am a website and mobile application developer based in Addis Ababa,
          and I’m very passionate and dedicated to my work.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap space-x-2">
          {/* My Works Button */}
          <Link href="/projects" passHref>
            <button className="px-4 md:px-8 py-2 text-white rounded-md border hover:bg-opacity-80 bg-gray-700 transition duration-300">
              My Works
            </button>
          </Link>

          {/* Resume Button */}
          <Link href="/resume.pdf" passHref>
            <button className="px-4 md:px-8 py-2 text-white rounded-md border hover:bg-opacity-80 bg-gray-700 transition duration-300">
              Resume
            </button>
          </Link>
        </div>
      </div>

      {/* Right: HTML-like Enclosure */}
      <div className="hidden md:flex text-8xl font-bold w-1/6 justify-end bg-gradient-to-r from-[#262dfd] via-[#12a4ff] via-[#9f0fff] to-[#e9006a] text-transparent bg-clip-text">
        /&gt;
      </div>
    </div>
  );
}
