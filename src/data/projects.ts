// Portfolio Projects Data
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  liveDemoLink: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "TravelBuddy",
    description:
      "A travel companion app with real-time chat and trip discovery.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/src/assets/project1.jpg",
    githubLink: "https://github.com/Amenti-K/TravelBuddy",
    liveDemoLink: "https://travel-buddy-ten-theta.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/src/assets/project2.jpg",
    githubLink: "https://github.com/yourusername/task-manager",
    liveDemoLink: "https://your-taskmanager-demo.vercel.app",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
