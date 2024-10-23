import React from "react";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "Just Todo",
      picture: "/assets/images/JustTodo.jpg", // Update this with the correct image path
      description:
        "A responsive and dynamic to-do list application with task management, reminders, and calendar integration.",
      tools: ["React", "React Native", "SQLite", "Expo"],
      index: 0,
    },
    {
      name: "Guest House",
      picture: "/assets/images/GHM.jpeg",
      description:
        "The Guest House Rental Company Website offers travelers a convenient platform to find and book comfortable accommodations in various locations.",
      tools: ["PHP", "XAMPP", "MySQL"],
      index: 1,
    },
  ];

  return (
    <div className="flex items-center flex-col transition-colors duration-300 min-h-full px-4 py-24 gap-y-8">
      <h1 className="text-center text-4xl">Projects</h1>
      {projects.map((project) => (
        <ProjectCard
          key={project.index}
          name={project.name}
          picture={project.picture}
          description={project.description}
          tools={project.tools}
          index={project.index}
        />
      ))}
    </div>
  );
}
