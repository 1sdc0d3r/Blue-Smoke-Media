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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team">Our Team</Link>
        </li>
        <li
          onClick={() => dropdown(document.getElementById("services-content"))}
          className="services"
        >
          Services ^
        </li>
        <ul id="services-content">
          <h3>SEO</h3>
          <li>
            <Link to="/seo/Friendly">SEO - Search Engine Optimization</Link>
          </li>
          <li>
            <Link to="/seo/seoOrganic">Organic Search Engine Optimization</Link>
          </li>
          <li>
            <Link to="/social-media">Social Media</Link>
          </li>
          <h3>Website Design</h3>

          <li>
            <Link to="/website-design/custom-website-design">
              Custom Website Design
            </Link>
          </li>
          <li>
            <Link to="/website-design/eCommerce-website-development">
              E-Commerce Website Development
            </Link>
          </li>
          <li>
            <Link to="/website-design/website-useability">
              Creating Your Website-Useability
            </Link>
          </li>
          <li>
            <Link to="/ad-CopyWriting">Website Ad-Copy Writing</Link>
          </li>
          <li>
            <Link to="/website-design/website-maintenance">
              Website Maintenance
            </Link>
          </li>
          <li>
            <Link to="/website-design/coding">Coding and Programming</Link>
          </li>
          <li>
            <Link to="/website-design/inquiry-form">Inquiry/Survey Form</Link>
          </li>
          <h3>Graphic Design</h3>
          <li>
            <Link to="/graphic-design/website-logo-design">
              Website Logo Design
            </Link>
          </li>
          <li>
            <Link to="/graphic-design/printed-media-logos">
              Print Logo Design
            </Link>
          </li>
          <li>
            <Link to="/graphic-design/digital-and-print-graphic-design">
              Print & Graphic Design Services
            </Link>
          </li>
        </ul>
        <li>
          <Link to="/plans">Pricing</Link>
        </li>
        <li>
          <a
            href="https://bluesmokemedianomads.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
});

function dropdown(evt) {
  evt.classList.toggle("show-drop");
  // console.log(evt.classList);
}
