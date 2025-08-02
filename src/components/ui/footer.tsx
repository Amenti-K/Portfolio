import React from "react";
import { Button } from "./button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/Amenti-K",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "http://www.linkedin.com/in/amenti-kebede-025320335",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:amenti1kebede@gmail.com",
      label: "Email",
    },
    // {
    //   icon: <Twitter className="w-4 h-4" />,
    //   href: "https://twitter.com/yourusername",
    //   label: "Twitter"
    // },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Amenti Kebede
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fullstack Developer passionate about creating exceptional digital
              experiences with modern technologies and clean code.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:text-primary transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Addis Ababa, ET</p>
              <p>amenti1kebede@gmail.com</p>
              <p>+251 94 680-1171</p>
            </div>
            <Button
              variant="outline"
              size="sm"
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

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Amenti Kebede. Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              and lots of coffee.
            </p>

            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
