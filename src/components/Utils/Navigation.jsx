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
            <NavLink to="/seoFriendly" className="drop-item">
              SEO - Search Engine Optimization
            </NavLink>

            <NavLink to="/seoOrganic" className="drop-item">
              Organic Search Engine Optimization
            </NavLink>
          </div>
          <div className="nav-section ">
            <h3>Website Design</h3>
            <div className="split">
              <div>
                <NavLink to="/customWebsiteDesign" className="drop-item">
                  Custom Website Design
                </NavLink>
                <NavLink
                  to="/E-CommerceWebsiteDevelopment"
                  className="drop-item"
                >
                  E-Commerce Website Development
                </NavLink>
                <NavLink to="/websiteUsability" className="drop-item">
                  Creating Your Website-Useability
                </NavLink>
              </div>
              <div>
                <NavLink to="/ad-CopyWriting" className="drop-item">
                  Website Ad-Copy Writing
                </NavLink>

                <NavLink to="/webMaintenance" className="drop-item">
                  Website Maintenance
                </NavLink>

                <NavLink to="/coding" className="drop-item">
                  Coding and Programming
                </NavLink>
                <NavLink to="/inquirySurveyForm" className="drop-item">
                  Inquiry/Survey Form
                </NavLink>
              </div>
            </div>
          </div>
          <div className="nav-section">
            <h3>Graphic Design</h3>
            <NavLink to="/websiteLogoDesign" className="drop-item">
              Website Logo Design
            </NavLink>

            <NavLink to="/printedMediaLogos" className="drop-item">
              Print Logo Design
            </NavLink>

            <NavLink to="/printAndGraphicServices" className="drop-item">
              Print & Graphic Design Services
            </NavLink>
          </div>
        </div>
      </div>

      {/* <NavLink to="/portfolio" className="nav-item">
        Our Work
      </NavLink> */}
      {/* //todo BLOG */}
      <a href="/blog" target="_blank" className="nav-item">
        Blog
      </a>
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
}
