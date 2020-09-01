import React from "react";
import { Link, withRouter } from "react-router-dom";

export default withRouter(function HamburgerMenu(props) {
  props.history.listen(() => {
    document.querySelector("input[type='checkbox']").checked = false;
  });
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
          <li className="sub-menu-btn" uk-icon="icon: triangle-right">
            Services
          </li>
          <ul className="sub-drop-menu">
            <div className="dropdown-content">
              <h3>SEO</h3>

              <Link to="/seo/Friendly">SEO - Search Engine Optimization</Link>

              <Link to="/seo/seoOrganic">
                Organic Search Engine Optimization
              </Link>
              <h3>Website Design</h3>

              <Link to="/website-design/custom-website-design">
                Custom Website Design
              </Link>

              <Link to="/website-design/eCommerce-website-development">
                E-Commerce Website Development
              </Link>

              <Link to="/website-design/website-useability">
                Creating Your Website-Useability
              </Link>

              <Link to="/ad-CopyWriting">Website Ad-Copy Writing</Link>

              <Link to="/website-design/website-maintenance">
                Website Maintenance
              </Link>

              <Link to="/coding">Coding and Programming</Link>

              <Link to="/website-design/inquiry-form">Inquiry/Survey Form</Link>
              <h3>Graphic Design</h3>

              <Link to="/graphic-design/website-logo-design">
                Website Logo Design
              </Link>

              <Link to="/graphic-design/printed-media-logos">
                Print Logo Design
              </Link>

              <Link to="/graphic-design/digital-and-print-graphic-design">
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
});
