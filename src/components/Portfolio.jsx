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
import { GiFlyingShuriken } from "react-icons/gi";
import { GoMegaphone } from "react-icons/go";
import { HiShare } from "react-icons/hi";
import { FaStore, FaCompass, FaVideo, FaPhoenixSquadron } from "react-icons/fa";

export default function Portfolio({ location }) {
  const [category, setCategory] = useState("websites");

  useEffect(() => {
    setCategory(location.hash.replace("#", "").replaceAll("%20", " "));
  }, [location.hash]);

  return (
    <div className="page-wrapper portfolio-wrapper">
      <div className="portfolio">
        <h1 className="title-lg">Portfolio</h1>
        <h2 className="title-lg">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
        <div className="categories">
          <ul>
            <li>
              <Link to="#">
                <GiFlyingShuriken className="react-icon" /> All
              </Link>
            </li>
            <li>
              <Link to="#websites">
                <FaCompass className="react-icon" /> Websites
              </Link>
            </li>
            <li>
              <Link to="#E-Commerce Websites">
                <FaStore className="react-icon" /> E-Commerce Websites
              </Link>
            </li>
            <li>
              <Link to="#Logos">
                <FaPhoenixSquadron className="react-icon" /> Logos
              </Link>
            </li>
            <li>
              <Link to="#Advertizing">
                <GoMegaphone className="react-icon" /> Advertizing
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
                <HiShare className="react-icon" /> Social Media Marketing
              </Link>
            </li>
          </ul>
        </div>
        {/* <div> */}
        <div style={{ width: "100%" }}>
          <h1 className="title-sm">Portfolio</h1>
          <h2 className="title-sm">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <div className="projects">
            {/* //todo add right hand banner (roast.io) for categories on "All"  */}
            {projects
              .filter((e) => {
                if (category === "") return e;
                return e.category.toLowerCase() === category.toLowerCase();
              })
              .map((e) => (
                <div className="project" key={e.id}>
                  <h3 className="title">{e.title}</h3>
                  <div className="card">
                    <img src={e.image} alt={e.imgAlt} />
                    <div className="info">
                      <p>{e.desc}</p>
                      <div className="btm">
                        <span>{e.date}</span>
                        {e.url ? (
                          <a href={e.url} target="_blank" rel="nofollow">
                            Visit Website
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
