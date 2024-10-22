"use client";

import React from "react";
import { FaTelegramPlane } from "react-icons/fa"; // Import Telegram icon

export default function Contact() {
  const phoneNumber = "+2519 46 80 11 71"; // Replace with your actual phone number
  const emailAddress = "amenti1kebede@gmail.com"; // Replace with your actual email

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center">
        Let’s work <br /> together
      </h1>

      {/* Button */}
      <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center space-x-2">
        <FaTelegramPlane className="text-2xl" />
        <span className="text-lg font-medium">Say Hello</span>
      </button>

      {/* Contact Info */}
      <div className="mt-12 text-center flex flex-col space-y-4 md:flex-row md:space-y-0 justify-around w-full md-w-3/4">
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold">Call:</span>
          <span className="text-lg">{phoneNumber}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold">Email:</span>
          <span className="text-lg">{emailAddress}</span>
        </div>
      </div>
    </div>
  );
}
