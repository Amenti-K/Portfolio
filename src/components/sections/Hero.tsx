import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    const resumeUrl = "/public/assets/AK Resume 2025.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Amenti_Kebede_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground font-medium">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Amenti Kebede
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mt-4">
              Fullstack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I create exceptional digital experiences by building modern web
            applications with cutting-edge technologies. Passionate about clean
            code, user experience, and turning ideas into reality.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-4">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              asChild
            >
              <a
                href="https://github.com/Amenti-K"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              asChild
            >
              <a
                href="http://www.linkedin.com/in/amenti-kebede-025320335"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              asChild
            >
              <a
                href="mailto:amenti1kebede@gmail.com"
                aria-label="Email Contact"
              >
                <Mail size={18} />
              </a>
            </Button>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" onClick={handleResumeDownload}>
              Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
