import React from "react";
import { Link, withRouter } from "react-router-dom";

export default withRouter(function HamburgerMenu(props) {
  props.history.listen(() => {
    document.getElementById("menu").classList.remove("show-drop");
  });
  return (
    <nav role="navigation" className="drop-menu">
      <h2
        onClick={() => {
          const menu = document.getElementById("menu");
          dropdown(menu);
          if (menu.classList.contains("show-drop"))
            document
              .getElementById("services-content")
              .classList.remove("show-drop");
        }}
      >
        Menu
      </h2>
      <ul id="menu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/team">
          <li>Our Team</li>
        </Link>
        <li
          onClick={() => dropdown(document.getElementById("services-content"))}
          className="services"
        >
          Services
        </li>
        <ul id="services-content">
          <h3>SEO</h3>
          <Link to="/seo/Friendly">SEO - Search Engine Optimization</Link>

          <Link to="/seo/seoOrganic">Organic Search Engine Optimization</Link>

          <Link to="/social-media">Social Media</Link>
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

          <Link to="/website-design/coding">Coding and Programming</Link>

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
        </ul>
        <Link to="/plans">
          <li>Pricing</li>
        </Link>
        <a
          href="https://bluesmokemedianomads.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Blog</li>
        </a>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
});

function dropdown(evt) {
  evt.classList.toggle("show-drop");
  // console.log(evt.classList);
}
