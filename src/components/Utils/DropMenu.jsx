import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default withRouter(function HamburgerMenu(props) {
  props.history.listen(() => {
    document.getElementById("menu").classList.remove("show-drop");
  });
  const chevron = <FiChevronDown color="#f52618" />;
  return (
    <nav role="navigation" className="drop-menu">
      <h2
        onClick={() => {
          const menu = document.getElementById("menu");
          dropdown("menu");
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
          id="services"
          className="category"
          onClick={() => dropdown("services-content", "services")}
        >
          Services{chevron}
        </li>
        <ul id="services-content" className="drop-content">
          <li>
            <Link to="/social-media">Social Media</Link>
          </li>
          <li
            id="seo"
            onClick={() => dropdown("seo-content", "seo")}
            className="category sub-category"
          >
            SEO{chevron}
          </li>
          <ul id="seo-content" className="drop-content sub-drop-content">
            <li>
              <Link to="/seo/Friendly">SEO - Search Engine Optimization</Link>
            </li>
            <li>
              <Link to="/seo/seoOrganic">
                Organic Search Engine Optimization
              </Link>
            </li>
          </ul>
          <li
            id="web-design"
            onClick={() => dropdown("web-content", "web-design")}
            className="category sub-category"
          >
            Website Design{chevron}
          </li>
          <ul id="web-content" className="drop-content sub-drop-content">
            <li>
              <Link to="/ad-CopyWriting">Website Ad-Copy Writing</Link>
            </li>
            <li>
              <Link to="/website-design/coding">Coding and Programming</Link>
            </li>
            <li>
              <Link to="/website-design/custom-website-design">
                Custom Website Design
              </Link>
            </li>
            <li>
              <Link to="/website-design/website-useability">
                Creating Your Website-Useability
              </Link>
            </li>
            <li>
              <Link to="/website-design/eCommerce-website-development">
                E-Commerce Website Development
              </Link>
            </li>
            <li>
              <Link to="/website-design/inquiry-form">Inquiry/Survey Form</Link>
            </li>
            <li>
              <Link to="/website-design/website-maintenance">
                Website Maintenance
              </Link>
            </li>
          </ul>

          <li
            id="graphic-design"
            onClick={() => dropdown("graphic-content", "graphic-design")}
            className="category sub-category"
          >
            Graphic Design{chevron}
          </li>
          <ul id="graphic-content" className="drop-content sub-drop-content">
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
        </ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/plans">Pricing</Link>
        </li>
        <li>
          <a
            href="https://bluesmokemedianomads.com"
            target="_blank"
            rel="noopener"
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

function dropdown(list, active) {
  document.getElementById(list).classList.toggle("show-drop");
  const orange = "rgb(251, 52, 0)";
  const blue = "#1e92f6";

  if (active) {
    const aStyle = document.getElementById(active).style;
    aStyle.color === orange ? (aStyle.color = blue) : (aStyle.color = orange);
  }
  // todo close sub drop menu's on closing of menu
  // if (active === "services") {
  //   const categoryList = document.getElementsByClassName("sub-drop-content");
  //   // console.log(categoryList);
  //   for (let i = 0; i < categoryList.length; i++) {
  //     console.log(categoryList[i]);
  //     categoryList[i].classList.remove("show-drop");
  //     categoryList[i].style.color = blue;
  //   }
  // }
}
