import React from "react";

export default function ProjectCard({
  name,
  picture,
  description,
  tools,
  index,
}) {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full md:h-[80vh]
                 transition-colors duration-300 rounded-lg overflow-hidden p-10"
    >
      {/* Image section */}
      <div className="flex-1 h-full w-full order-1 md:order-2">
        <img
          src={picture}
          alt={name}
          className="w-full max-h-[70vh] md:h-full object-contain md:object-contain rounded-none md:rounded-l-lg shadow-lg"
        />
      </div>
      {/* Text section */}
      <div className="flex-1 text-left py-10 px-10 flex flex-col justify-center md:order-1 order-2 md:text-left text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {name}
        </h2>
        <p className="text-gray-300 mb-4 text-md md:text-lg">{description}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="bg-gray-600 px-4 py-2 rounded-full text-sm font-semibold text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
