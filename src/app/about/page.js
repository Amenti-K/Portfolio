"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Expertise from "@/components/Expertise";

export default function About() {
  // Ref for the About section
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  // Framer motion variants for animations
  const imageAnimation = {
    hidden: { x: "-100vw", opacity: 0 }, // Start off the screen to the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textAnimation = {
    hidden: { x: "100vw", opacity: 0 }, // Start off the screen to the right
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div ref={aboutRef} className="p-8">
      <div className="h-screen">
        <h2 className="my-20 mb-10 text-center text-4xl">About Me</h2>

        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          {/* Left Section: Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            variants={imageAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
          >
            <div className="relative w-72 h-80">
              <Image
                src="/assets/images/profile.jpg" // Correct path to your image in the public folder
                alt="Amenti Kebede"
                fill
                style={{ objectFit: "cover" }} // Replaces objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Right Section: Paragraph */}
          <motion.div
            className="w-full md:w-1/2 my-4 p-4 lg:p-8"
            variants={textAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
          >
            <p className="text-md">
              With over two years of experience as a professional web and mobile
              app developer, I have acquired the skills and expertise necessary
              to ensure the success of your project. I take pride in every step
              of the design process, from collaborative discussions to creating
              user-centered solutions.
            </p>
          </motion.div>
        </div>
      </div>
      <Expertise />
    </div>
  );
}
