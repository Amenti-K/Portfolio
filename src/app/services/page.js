"use client";

import React from "react";
import Services from "../../components/Services";

const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    shortDescription:
      "I create beautiful and functional designs that are user-friendly and visually appealing...",
    fullDescription: `I create beautiful and functional designs that are user-friendly, visually appealing, 
      and tailored to meet the specific needs of your audience. My design process focuses on creating seamless 
      user experiences through research, prototyping, and testing to ensure that every design is intuitive and effective.`,
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    shortDescription:
      "From front-end to back-end, I build responsive, high-performance websites and web applications...",
    fullDescription: `From front-end to back-end, I build responsive, high-performance websites and web applications 
      using modern technologies like React, Node.js, and databases. My development process ensures that your website 
      is secure, scalable, and optimized for both user experience and SEO.`,
  },
  {
    id: 3,
    title: "Cross-Platform Mobile App Development",
    shortDescription:
      "I develop cross-platform mobile apps that run smoothly on both iOS and Android devices...",
    fullDescription: `I develop cross-platform mobile apps that run smoothly on both iOS and Android devices using 
      technologies like React Native. My focus is on creating fast, responsive, and user-friendly mobile applications 
      that deliver a seamless experience for users on any platform.`,
  },
];

export default function ServicesPage() {
  return (
    <div className="h-screen p-8 flex justify-center flex-col">
      <h1 className="my-20 mb-10 text-center text-4xl">Services I Provide</h1>
      <div className="w-full md:w-4/5 m-auto">
        <Services services={servicesData} />
      </div>
    </div>
  );
}
