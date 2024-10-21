"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Services({ services }) {
  const [hoveredServiceId, setHoveredServiceId] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredServiceId(id);
  };

  const handleMouseLeave = () => {
    setHoveredServiceId(null);
  };

  const handleToggleService = (id) => {
    setSelectedServiceId(selectedServiceId === id ? null : id);
  };

  return (
    <div>
      {services.map((service) => (
        <div
          key={service.id}
          className={`relative p-4 rounded-lg transition-transform`}
          onMouseEnter={() => handleMouseEnter(service.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-start space-x-4">
              <span className="text-lg sm:text-xl font-bold text-white md:mr-10">{`0${service.id}`}</span>
              <div className="">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  {service.title}
                </h2>
                {/* Short description for md and lg devices */}
                <p className="hidden md:flex text-white mt-2">
                  {service.shortDescription}
                </p>
              </div>
            </div>
            {/* Arrow for mobile view */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => handleToggleService(service.id)}
            >
              <FaChevronDown
                className={`text-white transition-transform ${
                  selectedServiceId === service.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
          {/* Service Details on Hover (for larger devices) */}
          {hoveredServiceId === service.id && !selectedServiceId && (
            <div
              className="hidden md:flex absolute -top-10 left-1/4 w-1/2 h-fit p-4 text-gray-800
                 bg-zinc-100 flex flex-col justify-center rounded-lg z-10"
            >
              <p>{service.fullDescription}</p>
            </div>
          )}

          {/* Toggleable full description for mobile */}
          {selectedServiceId === service.id && (
            <div className="mt-4 text-white">
              <p>{service.fullDescription}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
