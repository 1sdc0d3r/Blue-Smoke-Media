import React, { useState } from "react";
import projects from "../data/projects";

export default function Portfolio() {
  const [category, setCategory] = useState("");
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <h4>{category}</h4>
      <div className="nav">
        <ul>
          <li>Websites</li>
          <li>E-Commerce Websites</li>
          <li>Logos</li>
          <li>Branding</li>
          <li>Photo Manipulation</li>
          <li>Videography</li>
          <li>Social Media Marketing</li>
        </ul>
      </div>
      <div className="projects">
        {projects.map((e) => (
          <div className="project">
            <h4>{e.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
