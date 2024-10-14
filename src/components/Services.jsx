"use client";

import React, { useState } from "react";

export default function Services({ services }) {
  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredServiceId(id);
  };

  const handleMouseLeave = () => {
    setHoveredServiceId(null);
  };

  return (
    <div className="space-y-6">
      {services.map((service) => (
        <div
          key={service.id}
          className={`relative p-4 border border-gray-700 dark:border-gray-300 rounded-lg
          bg-gray-800 dark:bg-zinc-100 transition-transform`}
          onMouseEnter={() => handleMouseEnter(service.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-white dark:text-gray-800">{`0${service.id}`}</span>
            <h2 className="text-2xl font-semibold text-white dark:text-gray-800">
              {service.title}
            </h2>
          </div>
          <p className="text-white dark:text-gray-800 mt-2">
            {service.shortDescription}
          </p>

          {hoveredServiceId === service.id && (
            <div className="absolute top-0 left-1/4 w-1/2 h-fit dark:bg-gray-900 p-4 text-gray-800 bg-zinc-100 dark:text-white flex flex-col justify-center rounded-lg z-10">
              <p>{service.fullDescription}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
