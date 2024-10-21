"use client";

import React from "react";
import Image from "next/image";
import Expertise from "@/components/Expertise";

export default function About() {
  return (
    <div className="p-8">
      <div className="h-screen">
        <h2 className="my-20 mb-10 text-center text-4xl">About Me</h2>
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-72 h-80">
              <Image
                src="/assets/images/profile.jpg" // Correct path to your image in the public folder
                alt="Amenti Kebede"
                fill // Replaces layout="fill"
                style={{ objectFit: "cover" }} // Replaces objectFit="cover"
              />
            </div>
          </div>

          {/* Right Section: Paragraph */}
          <div className="w-full md:w-1/2 my-4 p-4 lg:p-8">
            <p className="text-md">
              With over two years of experience as a professional web and mobile
              app developer, I have acquired the skills and expertise necessary
              to ensure the success of your project. I take pride in every step
              of the design process, from collaborative discussions to creating
              user-centered solutions.
            </p>
          </div>
        </div>
      </div>
      <Expertise />
    </div>
  );
}
