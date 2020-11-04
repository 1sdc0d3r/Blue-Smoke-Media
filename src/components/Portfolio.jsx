import React, { useState } from "react";
import projects from "../data/projects";

export default function Portfolio() {
  const [category, setCategory] = useState("websites");
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="categories">
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
        {projects
          //   .filter((e) => e.category === category)
          .map((e) => (
            <div className="project">
              <h3 className="title">{e.title}</h3>
              <div className="info">
                <img src={e.image} alt={e.imgAlt} />
                <p>{e.desc}</p>
                <span>{e.date}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
