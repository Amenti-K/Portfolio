import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Portfolio from "./portfolio/page";

export default function Landing() {
  return (
    <div>
      {/* Assign IDs to sections for navigation */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="projects" className="min-h-screen">
        <Portfolio />
      </section>
      {/* Add other sections similarly if needed */}
    </div>
  );
}
