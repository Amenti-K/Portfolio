"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectCard({ name, picture, description, tools }) {
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
    <div
      ref={aboutRef}
      className="flex flex-col md:flex-row items-center justify-center w-full md:h-[80vh]
                 transition-colors duration-300 rounded-lg overflow-hidden p-10"
    >
      {/* Image section */}
      <motion.div
        className="flex-1 h-full w-full md:order-1 order-2"
        variants={imageAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
      >
        <img
          src={picture}
          alt={name}
          className="w-full max-h-[70vh] md:h-full object-contain md:object-contain rounded-none md:rounded-l-lg shadow-lg"
        />
      </motion.div>
      {/* Text section */}
      <motion.div
        className="flex-1 text-left py-10 md:px-10 flex flex-col justify-start
                       order-1 md:order-2 md:text-left space-y-6"
        variants={textAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white w-max">
          {name}
        </h2>
        <p className="text-gray-300 mb-4 text-md md:text-lg w-full">
          {description}
        </p>
        <div className="flex flex-wrap md:justify-start gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="bg-gray-600 px-4 py-2 rounded-full text-sm font-semibold text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
