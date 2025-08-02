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
      "A full-stack travel companion web app with real-time chat, detailed trip planning, flight integration, and trust-based user scoring. Designed to help users discover trips and safely connect with potential travel partners.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Mantine UI",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Cloudinary",
    ],
    image: "/src/assets/TravelBuddy.png",
    githubLink: "https://github.com/Amenti-K/TravelBuddy",
    liveDemoLink: "https://travel-buddy-ten-theta.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Just ToDo",
    description:
      "A cross-platform mobile app built with Expo and React Native for efficient task management. Features offline-first local database, categorized task organization, calendar integration, and notification support. Designed with a clean and minimal UX.",
    technologies: [
      "React Native",
      "Expo",
      "SQLite",
      "Expo Notifications",
      "Expo Calendar",
    ],
    image: "/src/assets/JustTodo.jpg",
    githubLink: "https://github.com/Amenti-K/JustToDo",
    liveDemoLink: "",
    featured: true,
  },
  {
    id: "3",
    title: "GuestHouse Booking System",
    description:
      "A simple web-based platform to manage guest houses with listing features, booking system, and availability tracking. Built as a class project with PHP and MySQL.",
    technologies: ["PHP", "Tailwind CSS", "MySQL", "XAMPP"],
    image: "/src/assets/GHM.jpeg",
    githubLink: "https://github.com/Amenti-K/CS_webDev_PHP",
    liveDemoLink: "",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
