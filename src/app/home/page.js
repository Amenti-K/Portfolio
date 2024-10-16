"use client";

import Link from "next/link";
import { FaTelegram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Social icons
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-100 dark:bg-gray-950 px-32 relative">
      {/* Left: HTML-like Enclosure */}
      <div className="justify-end justify-self-end text-4xl font-bold text-9xl w-1/6 bg-gradient-to-r from-[#00c8d6] to-[#262dfd] text-transparent bg-clip-text">
        &lt;
      </div>

      {/* main Section: Content */}
      <div className="w-1/2 p-6 flex flex-col items-start space-y-2">
        {/* Name */}
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Amenti Kebede
        </h1>

        {/* Professions with Typing Effect */}
        <h2 className="text-xl text-lime-500 dark:text-yellow-300">
          ___You'r goto{" "}
          <span className="text-2xl text-lime-500 dark:text-yellow-300">
            <Typewriter
              words={[
                "Website Developer",
                "UI/UX Designer",
                "Mobile App Developer",
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
        <p className="text-lg text-gray-800 dark:text-gray-300">
          I am a website and mobile application developer based in Addis Ababa,
          and I’m very passionate and dedicated to my work.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* My Works Button */}
          <Link href="/projects" passHref>
            <button className="px-8 py-2 text-white rounded-md border hover:bg-opacity-80 bg-gray-900 transition duration-300">
              My Works
            </button>
          </Link>

          {/* Resume Button */}
          <Link href="/resume.pdf" passHref>
            <button className="px-8 py-2 text-white rounded-md border hover:bg-opacity-80 bg-gray-900 transition duration-300">
              Resume
            </button>
          </Link>
        </div>
      </div>

      {/* Right: HTML-like Enclosure */}
      <div className="text-4xl font-bold text-9xl w-1/6 flex justify-end bg-gradient-to-r from-[#262dfd] via-[#12a4ff] via-[#9f0fff] to-[#e9006a] text-transparent bg-clip-text">
        /&gt;
      </div>
    </div>
  );
}
