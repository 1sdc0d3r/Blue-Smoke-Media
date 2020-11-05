import React, { useState, useEffect } from "react";
import projects from "../data/projects";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faVideo,
//   faShoppingCart,
// } from "@fortawesome/free-solid-svg-icons";
import { SiBrandDotAi } from "react-icons/si";
import { MdPhoto } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { GiPenguin } from "react-icons/gi";
import {
  FaStore,
  FaBattleNet,
  FaCompass,
  FaVideo,
  FaShoppingCart,
  FaDev,
} from "react-icons/fa";

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
              <Link to="#">
                <GiPenguin className="react-icon" /> All
              </Link>
            </li>
            <li>
              <Link to="#websites">
                <FaCompass className="react-icon" /> Websites
              </Link>
            </li>
            <li>
              <Link to="#E-Commerce Websites">
                {/* //todo choose icon */}
                <FaShoppingCart className="react-icon" />
                <FaStore className="react-icon" /> E-Commerce Websites
              </Link>
            </li>
            <li>
              <Link to="#Logos">
                <FaBattleNet className="react-icon" /> Logos
              </Link>
            </li>
            <li>
              <Link to="#Branding">
                <SiBrandDotAi className="react-icon" /> Branding
              </Link>
            </li>
            <li>
              <Link to="#Photo Manipulation">
                <MdPhoto className="react-icon" /> Photo Manipulation
              </Link>
            </li>
            <li>
              <Link to="#Videography">
                <FaVideo className="react-icon" /> Videography
              </Link>
            </li>
            <li>
              <Link to="#Social Media Marketing">
                <FiShare2 className="react-icon" /> Social Media Marketing
              </Link>
            </li>
          </ul>
        </div>
        <div className="projects">
          {projects
            .filter((e) => {
              if (category === "") return e;
              return e.category.toLowerCase() === category.toLowerCase();
            })
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
