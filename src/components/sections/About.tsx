import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Coffee, Lightbulb } from "lucide-react";

export const About = () => {
  const handleResumeDownload = () => {
    // Replace with your actual resume path
    const resumeUrl = "/src/assets/AK Resume 2025.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Amenti_Kebede_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "3+ Years Experience",
      description: "Building modern web applications",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "10+ Projects",
      description: "Successfully completed",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Creative solutions for complex challenges",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for
            development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-primary p-1 animate-glow">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                  <img
                    src="/src/assets/profile.jpg"
                    alt="Amenti Kebede - Fullstack Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-primary flex items-center justify-center text-6xl font-bold text-white">
                          JD
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-float">
                <Code className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Passionate Fullstack Developer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated fullstack developer with over 3 years of
                  experience creating modern, scalable web applications. My
                  journey began with a curiosity for how things work on the web,
                  which led me to master both frontend and backend technologies.
                </p>
                <p>
                  I specialize in React.js, Node.js, and modern JavaScript
                  frameworks, with a strong focus on creating intuitive user
                  experiences and robust backend systems. I'm passionate about
                  writing clean, maintainable code and staying up-to-date with
                  the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  mentoring fellow developers in the community.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:shadow-soft transition-all duration-300"
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-primary mb-2 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resume Download */}
            <div className="pt-4">
              <Button
                onClick={handleResumeDownload}
                className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
