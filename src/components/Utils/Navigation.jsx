import React from "react";
import { NavLink, withRouter } from "react-router-dom";

export default withRouter(function Navigation(props) {
  return (
    <nav className="main-nav">
      <div className="dropdown">
        <button
          className="drop-btn nav-item"
          onClick={() => props.history.push("/")}
          uk-icon="icon: triangle-down"
        >
          Home
        </button>
        <div className="dropdown-content home-drop">
          <div className="nav-section">
            <a href="plans" className="drop-item">
              Plans & Pricing
            </a>
            <NavLink to="/privacy" className="drop-item">
              Privacy Policy
            </NavLink>
            <NavLink to="/sitemap" className="drop-item">
              Sitemap
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink to="/team" className="nav-item">
        Our Team
      </NavLink>
      <div className="dropdown">
        <button className="drop-btn nav-item" uk-icon="icon: triangle-down">
          Services
        </button>
        <div className="dropdown-content">
          <div className="nav-section">
            <h3>SEO</h3>
            <NavLink to="/seo/Friendly" className="drop-item">
              SEO - Search Engine Optimization
            </NavLink>

            <NavLink to="/seo/seoOrganic" className="drop-item">
              Organic Search Engine Optimization
            </NavLink>

            <NavLink to="/social-media" className="drop-item">
              Social Media
            </NavLink>
          </div>
          <div className="nav-section ">
            <h3>Website Design</h3>
            <div className="split">
              <div>
                <NavLink
                  to="/website-design/custom-website-design"
                  className="drop-item"
                >
                  Custom Website Design
                </NavLink>
                <NavLink
                  to="/website-design/eCommerce-website-development"
                  className="drop-item"
                >
                  E-Commerce Website Development
                </NavLink>
                <NavLink to="/website-design/coding" className="drop-item">
                  Coding and Programming
                </NavLink>
              </div>
              <div>
                <NavLink to="/ad-CopyWriting" className="drop-item">
                  Website Ad-Copy Writing
                </NavLink>

                <NavLink
                  to="/website-design/website-maintenance"
                  className="drop-item"
                >
                  Website Maintenance
                </NavLink>
                <NavLink
                  to="/website-design/website-useability"
                  className="drop-item"
                >
                  Creating Your Website-Useability
                </NavLink>
              </div>
            </div>
            <NavLink to="/website-design/inquiry-form" className="drop-item">
              Inquiry/Survey Form
            </NavLink>
          </div>
          <div className="nav-section">
            <h3>Graphic Design</h3>
            <NavLink
              to="/graphic-design/website-logo-design"
              className="drop-item"
            >
              Website Logo Design
            </NavLink>

            <NavLink
              to="/graphic-design/printed-media-logos"
              className="drop-item"
            >
              Print Logo Design
            </NavLink>

            <NavLink
              to="/graphic-design/digital-and-print-graphic-design"
              className="drop-item"
            >
              Print & Graphic Design Services
            </NavLink>
          </div>
        </div>
      </div>

      {/* <NavLink to="/portfolio" className="nav-item">
        Our Work
      </NavLink> */}
      {/* //todo BLOG */}
      <a href="#blog" target="_blank" className="nav-item">
        Blog
      </a>
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
});
