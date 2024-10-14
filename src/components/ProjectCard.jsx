import React from "react";

export default function ProjectCard({
  name,
  picture,
  description,
  tools,
  index,
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-1/2 h-[50vh]
                 dark:bg-zinc-100 bg-gray-800 transition-colors duration-300 rounded-lg"
    >
      {/* Conditional rendering for even/odd layout */}
      <div
        className={`flex-1 ${
          isEven ? "order-2" : "order-1"
        } h-full overflow-hidden`}
      >
        <img
          src={picture}
          alt={name}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className={`flex-1 ${isEven ? "order-1" : "order-2"} text-left p-6`}>
        <h2 className="text-2xl font-bold mb-4 dark:text-black text-white">
          {name}
        </h2>
        <p className="dark:text-gray-600 text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="dark:bg-gray-200 bg-gray-600 px-4 py-2 rounded-full text-sm font-semibold dark:text-black text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
