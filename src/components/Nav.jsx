"use client";

import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

export default function Nav() {
  const [showNav, setShowNav] = useState(true); // to control showing and hiding of nav
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // to toggle mobile menu

  useEffect(() => {
    let timeoutId;

    const handleMouseMovement = () => {
      setShowNav(true);
      if (timeoutId) clearTimeout(timeoutId); // Reset timeout if user interacts
      timeoutId = setTimeout(() => setShowNav(false), 6000); // Hide nav after 3 seconds of inactivity
    };

    const handleScroll = () => {
      setShowNav(true);
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setShowNav(false), 6000);
    };

    // Show nav on mouse move or scroll
    window.addEventListener("mousemove", handleMouseMovement);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close menu when clicked on mobile
    }
  };

  const logo = "<Amenti/>";

  return (
    <nav
      className={`fixed md:top-6 md:w-3/4 left-0 md:left-1/2 top-0 w-screen md:transform md:-translate-x-1/2 py-2 px-4 bg-zinc-100 rounded-lg flex justify-between z-20 transition-transform duration-300 opacity-90 ${
        showNav ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      {/* Left side: Logo */}
      <div className="text-2xl text-black">
        <Link href="#home" onClick={() => handleScrollToSection("home")}>
          <p>{logo}</p>
        </Link>
      </div>

      {/* Right side: Navigation Links and Hamburger for Mobile */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          onClick={() => handleScrollToSection("home")}
          className="cursor-pointer"
        >
          <h3 className="text-black">Home</h3>
        </a>
        <a
          onClick={() => handleScrollToSection("about")}
          className="cursor-pointer"
        >
          <h3 className="text-black">About</h3>
        </a>
        <a
          onClick={() => handleScrollToSection("services")}
          className="cursor-pointer"
        >
          <h3 className="text-black">Services</h3>
        </a>
        <a
          onClick={() => handleScrollToSection("projects")}
          className="cursor-pointer"
        >
          <h3 className="text-black">My Works</h3>
        </a>
        <a
          onClick={() => handleScrollToSection("contact")}
          className="cursor-pointer"
        >
          <h3 className="text-black">Contact</h3>
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none text-black"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 mt-2 bg-zinc-100 shadow-lg rounded-lg w-full flex flex-col items-center space-y-2 py-2 md:hidden">
          <a
            onClick={() => handleScrollToSection("home")}
            className="cursor-pointer"
          >
            <h3 className="text-black">Home</h3>
          </a>
          <a
            onClick={() => handleScrollToSection("about")}
            className="cursor-pointer"
          >
            <h3 className="text-black">About</h3>
          </a>
          <a
            onClick={() => handleScrollToSection("services")}
            className="cursor-pointer"
          >
            <h3 className="text-black">Services</h3>
          </a>
          <a
            onClick={() => handleScrollToSection("projects")}
            className="cursor-pointer"
          >
            <h3 className="text-black">My Works</h3>
          </a>
          <a
            onClick={() => handleScrollToSection("contact")}
            className="cursor-pointer"
          >
            <h3 className="text-black">Contact</h3>
          </a>
        </div>
      )}
    </nav>
  );
}
