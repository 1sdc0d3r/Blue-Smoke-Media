import React from "react";
import { NavLink, withRouter } from "react-router-dom";
//todo choose chevron import
//todo change this on blog nav
import { FiChevronDown } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

export default withRouter(function Navigation({ history }) {
  // history.listen(() => {});
  const dropArrow = <FiChevronDown color="#7ff76f" />;
  // const dropArrow = (
  //   <svg
  //     style={{
  //       width: "20",
  //       height: "20",
  //       viewBox: "0 0 20 20",
  //       fill: "#7ff76f",
  //     }}
  //   >
  //     <polygon points="5,5 13,15 20,5" />
  //   </svg>
  // //  uk-icon="icon: triangle-down-NOTHING"
  // );
  // todo fix dropdown-content not going away on change
  return (
    <nav className="main-nav">
      <div className="dropdown">
        <button className="drop-btn nav-item" onClick={() => history.push("/")}>
          Home{dropArrow}
        </button>
        <div className="dropdown-content home-drop">
          <div className="nav-section">
            <NavLink to="/plans" className="drop-item">
              Plans & Pricing
            </NavLink>
            <NavLink to="/help" className="drop-item">
              Need Help?
            </NavLink>
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
        <button className="drop-btn nav-item">
          Services
          {dropArrow}
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
      <a
        href="https://bluesmokemedianomads.com"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        Blog
      </a>
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
});
