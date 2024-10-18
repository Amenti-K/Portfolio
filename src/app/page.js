import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Services from "./services/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";

export default function Landing() {
  return (
    <div className="max-w-screen">
      {/* Assign IDs to sections for navigation */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="services" className="min-h-screen">
        <Services />
      </section>
      <section id="projects" className="min-h-screen">
        <Portfolio />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      {/* Add other sections similarly if needed */}
    </div>
  );
}
