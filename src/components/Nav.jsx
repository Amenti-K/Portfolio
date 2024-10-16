"use client";

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(true); // Start in dark mode by default

  // This useEffect hook ensures that dark mode is applied at the start of the app
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Set dark mode on page load
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark"); // Switch to light mode
    } else {
      document.documentElement.classList.add("dark"); // Switch back to dark mode
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logo = "<Amenti/>";

  return (
    <nav className="w-1/2 fixed top-4 left-1/2 transform -translate-x-1/2 py-2 px-2 dark:bg-zinc-100 shadow-lg rounded-lg bg-gray-900 flex justify-between z-20">
      {/* Left side: Logo */}
      <div className="text-2xl dark:text-black text-white">
        <Link href="#home" onClick={() => handleScroll("home")}>
          <p>{logo}</p>
        </Link>
      </div>

      {/* Right side: Navigation and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 dark:bg-white bg-gray-700 rounded-full dark:text-lime-500 text-yellow-300 transition-all duration-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Navigation Links */}
        <a onClick={() => handleScroll("home")} className="cursor-pointer">
          <h3 className="dark:text-black text-gray-300">Home</h3>
        </a>
        <a onClick={() => handleScroll("about")} className="cursor-pointer">
          <h3 className="dark:text-black text-gray-300">About</h3>
        </a>
        <a onClick={() => handleScroll("services")} className="cursor-pointer">
          <h3 className="dark:text-black text-gray-300">Services</h3>
        </a>
        <a onClick={() => handleScroll("projects")} className="cursor-pointer">
          <h3 className="dark:text-black text-gray-300">My Works</h3>
        </a>
        <a onClick={() => handleScroll("contact")} className="cursor-pointer">
          <h3 className="dark:text-black text-gray-300">Contact</h3>
        </a>
      </div>
    </nav>
  );
}
