import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, featuredProjects, type Project } from "@/data/projects";
import { Github, ExternalLink, Star } from "lucide-react";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : featuredProjects;

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback gradient background if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.innerHTML = `
                <div class="w-full h-48 bg-gradient-primary flex items-center justify-center">
                  <div class="text-white font-semibold text-lg">${project.title}</div>
                </div>
              `;
            }}
          />
          {project.featured && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Star size={12} />
              Featured
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github size={16} />
                Code
              </a>
            </Button>
            {project.liveDemoLink != "" && (
              <Button size="sm" asChild className="flex-1 bg-gradient-primary">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my
            skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {!showAll && projects.length > featuredProjects.length && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="hover:shadow-soft transition-all duration-300"
            >
              View All Projects ({projects.length - featuredProjects.length}{" "}
              more)
            </Button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(false)}
              className="hover:shadow-soft transition-all duration-300"
            >
              Show Less
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-glow rounded-2xl border border-border/50">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Interested in working together?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm always open to discussing new opportunities and exciting
            projects.
          </p>
          <Button
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};
