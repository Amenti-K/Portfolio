// Skills Data Structure
export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "SASS/SCSS",
      "Framer Motion",
      "Responsive Design",
      "Shad CN",
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "RESTful APIs",
      "Socket.io",
      "JWT Authentication",
      "Microservices",
      "API Design",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Vercel",
      "Heroku",
      "Render",
      "Docker",
      "Cloudinary",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Vite",
      "ESLint/Prettier",
      "CI/CD",
      "Agile/Scrum",
    ],
  },
];

export default skillsData;
