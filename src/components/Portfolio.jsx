import React, { useState, useEffect } from "react";
import projects from "../data/projects";
import { Link } from "react-router-dom";

export default function Portfolio({ location }) {
  const [category, setCategory] = useState("websites");

  useEffect(() => {
    setCategory(location.hash.replace("#", "").replaceAll("%20", " "));
  }, [location.hash]);

  return (
    <div className="page-wrapper portfolio-wrapper">
      <h1>Portfolio</h1>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="portfolio">
        <div className="categories">
          <ul>
            <li>
              <Link to="#websites">Websites</Link>
            </li>
            <li>
              <Link to="#E-Commerce Websites">E-Commerce Websites</Link>
            </li>
            <li>
              <Link to="#Logos">Logos</Link>
            </li>
            <li>
              <Link to="#Branding">Branding</Link>
            </li>
            <li>
              <Link to="#Photo Manipulation">Photo Manipulation</Link>
            </li>
            <li>
              <Link to="#Videography">Videography</Link>
            </li>
            <li>
              <Link to="#Social Media Marketing">Social Media Marketing</Link>
            </li>
          </ul>
        </div>
        <div className="projects">
          {projects
            //   .filter((e) => e.category === category)
            .map((e) => (
              <div className="project" key={e.id}>
                <h3 className="title">{e.title}</h3>
                <img src={e.image} alt={e.imgAlt} />
                <div className="info">
                  <p>{e.desc}</p>
                  <span>{e.date}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
