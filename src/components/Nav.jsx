"use client";

import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-screen fixed bg-zinc-100 shadow-lg dark:bg-gray-800 py-6 px-32 flex justify-between items-center">
      {/* Left side: Logo */}
      <div className="text-2xl text-black dark:text-white">
        <Link href="#home" onClick={() => handleScroll("home")}>
          <h3>Amenti</h3>
        </Link>
      </div>

      {/* Right side: Navigation and Dark Mode Toggle */}
      <div className="flex items-center space-x-6">
        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-white dark:bg-gray-700 rounded-full text-lime-500 dark:text-yellow-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Navigation Links */}
        <a onClick={() => handleScroll("home")} className="cursor-pointer">
          <h3 className="text-black dark:text-gray-300">Home</h3>
        </a>
        <a onClick={() => handleScroll("about")} className="cursor-pointer">
          <h3 className="text-black dark:text-gray-300">About</h3>
        </a>
        <a onClick={() => handleScroll("projects")} className="cursor-pointer">
          <h3 className="text-black dark:text-gray-300">My Works</h3>
        </a>
        <a onClick={() => handleScroll("contact")} className="cursor-pointer">
          <h3 className="text-black dark:text-gray-300">Contact</h3>
        </a>
      </div>
    </nav>
  );
}
