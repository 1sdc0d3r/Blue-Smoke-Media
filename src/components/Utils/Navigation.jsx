import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <div className="dropdown">
        <button className="drop-btn nav-item">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </button>
        <div className="dropdown-content">
          <div className="nav-section">
            <NavLink to="/sitemap" className="drop-item">
              Sitemap
            </NavLink>
            <NavLink to="/privacy" className="drop-item">
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink to="/team" className="nav-item">
        Our Team
      </NavLink>
      <div className="dropdown">
        <button className="drop-btn nav-item">Services</button>
        <div className="dropdown-content">
          <div className="nav-section">
            <h3>SEO</h3>
            <a href="/seoFriendly" className="drop-item">
              SEO - Search Engine Optimization
            </a>

            <a href="/seoOrganic" className="drop-item">
              Organic Search Engine Optimization
            </a>
          </div>
          <div className="nav-section ">
            <h3>Website Design</h3>
            <div className="split">
              <div>
                <a href="/customWebsiteDesign" className="drop-item">
                  Custom Website Design
                </a>
                <a href="/E-CommerceWebsiteDevelopment" className="drop-item">
                  E-Commerce Website Development
                </a>
                <a href="/websiteUsability" className="drop-item">
                  Creating Your Website-Useability
                </a>
              </div>
              <div>
                <a href="/ad-CopyWriting" className="drop-item">
                  Website Ad-Copy Writing
                </a>

                <a href="/webMaintenance" className="drop-item">
                  Website Maintenance
                </a>

                <a href="/coding" className="drop-item">
                  Coding and Programming
                </a>
                <a href="/inquirySurveyForm" className="drop-item">
                  Inquiry/Survey Form
                </a>
              </div>
            </div>
          </div>
          <div className="nav-section">
            <h3>Graphic Design</h3>
            <a href="/websiteLogoDesign" className="drop-item">
              Website Logo Design
            </a>

            <a href="/printedMediaLogos" className="drop-item">
              Print Logo Design
            </a>

            <a href="/printAndGraphicServices" className="drop-item">
              Print & Graphic Design Services
            </a>
          </div>
        </div>
      </div>

      {/* <NavLink to="/portfolio" className="nav-item">
        Our Work
      </NavLink> */}
      {/* //todo BLOG */}
      <a href="/blog" className="nav-item">
        Blog
      </a>
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
}
