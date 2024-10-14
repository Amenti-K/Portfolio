import React from "react";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      picture: "/assets/images/profile.jpg",
      description: "A personal portfolio to showcase my projects and skills.",
      tools: ["React", "Tailwind CSS", "Next.js"],
      index: 0,
    },
    {
      name: "E-Commerce App",
      picture: "/assets/images/profile.jpg",
      description: "A fully functional e-commerce app with a custom CMS.",
      tools: ["Node.js", "Express", "MongoDB", "React"],
      index: 1,
    },
    {
      name: "Mobile Banking App",
      picture: "/assets/images/profile.jpg",
      description: "A banking app built with React Native and Firebase.",
      tools: ["React Native", "Firebase"],
      index: 2,
    },
  ];

  return (
    <div className="flex items-center flex-col bg-zinc-100 dark:bg-gray-800 transition-colors duration-300  px-4 py-24 gap-y-8">
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
