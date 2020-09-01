import React from "react";
import { Link } from "react-router-dom";
import PaymentIcon from "react-payment-icons";

import twitter from "../../images/Twitter.png";
import linkedIn from "../../images/linkedIn_social_media_button.png";
import facebook from "../../images/faceBook.png";
import googleReview from "../../images/icon-Google-review.png";

// todo links
// todo make sure everything is in here & in right place
const chevron = (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    data-svg="chevron-right"
  >
    <polyline
      fill="none"
      stroke="#ee3e0e"
      stroke-width="3.0"
      points="7 4 13 10 7 16"
    ></polyline>
  </svg>
);
export default function Footer() {
  return (
    <>
      <footer>
        <div className="about">
          <h3 onClick={() => dropdown(document.getElementById("drop-about"))}>
            About Us
          </h3>
          <ul id="drop-about">
            <li>
              <Link to="/">{chevron}Home</Link>
            </li>
            <li>
              <Link to="/team">{chevron}Our Team </Link>
            </li>
            {/* <li>
              < to="#">Portfolio</{chevron}Link>
            </li> */}
            {/* <li>
              <a href="#" target="_blank">Our Blog</a>
            </li> */}
            <li>
              <Link to="/website-design/inquiry-form">
                {chevron}Inquiry Form
              </Link>
            </li>
            <li>
              <Link to="/contact">{chevron}Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 onClick={() => dropdown(document.getElementById("drop-product"))}>
            Products
          </h3>
          <ul id="drop-product">
            <li>
              <Link to="/website-design/custom-website-design">
                {chevron}Website Design
              </Link>
            </li>
            {/* //todo NEW SEO PAGE */}
            <li>
              <Link to="/seo">
                {chevron}
                Search Engine
                <br />
                Optimization
              </Link>
            </li>
            <li>
              <Link to="/graphic-design/digital-and-print-graphic-design">
                {chevron}Graphic Design
              </Link>
            </li>
            {/* <li>
              <Link to="a/">{chevron}Social Media Marketing</Link>
            </li> */}
            {/* <li>
              <Link to="l-">{chevron}Corporate Branding</Link>
            </li> */}
            {/* <li>
              <Link to="#">Reputation Management{chevron}</Link>
            </li> */}
          </ul>
        </div>
        <div>
          <h3
            onClick={() => dropdown(document.getElementById("drop-services"))}
          >
            Our Services
          </h3>
          <ul id="drop-services">
            <li>
              <Link to="/website-design/custom-website-design">
                {chevron}Custom Website Design
              </Link>
            </li>
            {/* <li>
              <Link to="#">Re-Design{chevron} & Updates</Link>
            </li> */}
            <li>
              <Link to="/website-design/website-useability">
                {chevron}Website Useability
              </Link>
            </li>
            <li>
              <Link to="/website-design/eCommerce-website-development">
                {chevron}E-Commerce Website
                <br />
                Development
              </Link>
            </li>
            <li>
              <Link to="/website-design/coding">
                {chevron}
                Website Programming
                <br />& Development
              </Link>
            </li>
            <li>
              <Link to="/website-design/website-maintenance">
                {chevron}Website Maintenance
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 onClick={() => dropdown(document.getElementById("drop-organic"))}>
            Organic SEO
          </h3>
          <ul id="drop-organic">
            <li>
              <Link to="/seo/Friendly">
                {chevron}
                SEO Friendly
                <br />
                Website Design
              </Link>
            </li>
            <li>
              <Link to="/graphic-design/digital-and-print-graphic-design">
                {chevron}
                Digital & Print
                <br />
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/graphic-design/printed-media-logos">
                {chevron}Printed Media Logos
              </Link>
            </li>
            <li>
              <Link to="/graphic-design/website-logo-design">
                {chevron}Website Logo Design
              </Link>
            </li>
            {/* //todo social media component */}
            {/* <li>
              <Link to="x-">{chevron}
                Social Media <br />& Marketing
              </Link>
            </li> */}
            {/* //todo reputation management component */}
            {/* <li>
              <Link to="x-">{chevron}Reputation & Review Management</Link>
            </li> */}
          </ul>
        </div>
        {/* <div>
        //todo PORTFOLIO
          <h3 id="drop-Portfolio">Portfolio</h3>
          <ul>
            <li>
              < to="#">Websites </{chevron}Link>
            </li>
            <li>
              <Link to="#">E-commerce{chevron} Websites </Link>
            </li>
            <li>
              <Link to="#">
                Social Media{chevron} <br />
                Management
              </Link>
            </li>
            <li>
              <Link to="#">Corporate Branding{chevron} </Link>
            </li>
            <li>
              <Link to="#">Printed Media{chevron} </Link>
            </li>
          </ul>
        </div> */}
        <div>
          <h3 onClick={() => dropdown(document.getElementById("drop-sm"))}>
            Social Links
          </h3>
          <ul id="drop-sm">
            <li>
              {/* //todo add in all social media accounts */}
              <a
                href="https://www.linkedin.com/company/blue-smoke-digital-and-printed-media/"
                target="_blank"
              >
                {chevron}
                <img src={linkedIn} alt="LinkedIn Social Media Button" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                {chevron}
                <img src={facebook} alt="Facebook Social Media Button" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bluesmokemedia/" target="_blank">
                {chevron}
                <img src={twitter} alt="Twitter Social Media Button" />
              </a>
            </li>
            <li>
              <a href="https://google.com/" target="_blank">
                {chevron}
                <img src={googleReview} alt="Google Social Media Button" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <section className="bottom">
        <div className="payment">
          <PaymentIcon id="visa" className="payment-icon" />
          <PaymentIcon id="paypal" className="payment-icon" />
          <PaymentIcon id="discover" className="payment-icon" />
          <PaymentIcon id="mastercard" className="payment-icon" />
        </div>
        <div className="contact">
          <p>call support:</p>
          <div className="numbers">
            <p>
              <Link to="tel:+1.865.274.1371">+1 865.274.1371</Link>
            </p>
            <p>
              <Link to="tel:+1.801.690.1189">+1 801.690.1189</Link>
            </p>
          </div>
        </div>
      </section>
      <p className="copy">
        © 2019-2020 - Blue Smoke Digital and Printed Media - All rights reserved
      </p>
    </>
  );
}

function dropdown(evt) {
  evt.classList.toggle("show-drop");
  console.log(evt.classList);
}
