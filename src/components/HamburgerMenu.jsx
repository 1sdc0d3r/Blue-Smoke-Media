import React from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  return (
    <nav role="navigation" className="hamburger-menu">
      <div id="menuToggle">
        {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
        <input type="checkbox" />
        {/* Spans act as a hamburger */}
        <span />
        <span />
        <span />

        <ul id="menu">
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>

          <Link to="/team">
            <li>Our Team</li>
          </Link>
          <li className="sub-menu-btn">Services ></li>
          <ul className="sub-drop-menu">
            <div className="dropdown-content">
              <h3>SEO</h3>

              <Link to="/seoFriendly">SEO - Search Engine Optimization</Link>

              <Link to="/seoOrganic">Organic Search Engine Optimization</Link>
              <h3>Website Design</h3>

              <Link to="/customWebsiteDesign">Custom Website Design</Link>

              <Link to="/E-CommerceWebsiteDevelopment">
                E-Commerce Website Development
              </Link>

              <Link to="/websiteUsability">
                Creating Your Website-Useability
              </Link>

              <Link to="/ad-CopyWriting">Website Ad-Copy Writing</Link>

              <Link to="/webMaintenance">Website Maintenance</Link>

              <Link to="/coding">Coding and Programming</Link>

              <Link to="/inquirySurveyForm">Inquiry/Survey Form</Link>
              <h3>Graphic Design</h3>

              <Link to="/websiteLogoDesign">Website Logo Design</Link>

              <Link to="/printedMediaLogos">Print Logo Design</Link>

              <Link to="/printAndGraphicServices">
                Print & Graphic Design Services
              </Link>
            </div>
          </ul>

          <a href="#blog" target="_blank">
            <li>Blog</li>
          </a>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
