import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PaymentIcon from "react-payment-icons";

import blueSmoke from "../../images/blue-smoke.png";
import youtube from "../../images/youTube.png";
import twitter from "../../images/Twitter.png";
import linkedIn from "../../images/linkedIn_social_media_button.png";
import instagram from "../../images/instagram.png";
import behance from "../../images/Behance.png";
import facebook from "../../images/faceBook.png";
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
          <h3>About Us</h3>
          <ul>
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
              <Link to="/inquirySurveyForm">{chevron}Inquiry Form</Link>
            </li>
            <li>
              <Link to="/contact">{chevron}Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Products</h3>
          <ul>
            <li>
              <Link to="/customWebsiteDesign">{chevron}Website Design</Link>
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
              <Link to="/printAndGraphicServices">{chevron}Graphic Design</Link>
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
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/customWebsiteDesign">
                {chevron}Custom Website Design
              </Link>
            </li>
            {/* <li>
              <Link to="#">Re-Design{chevron} & Updates</Link>
            </li> */}
            <li>
              <Link to="/websiteUsability">{chevron}Website Useability</Link>
            </li>
            <li>
              <Link to="/E-CommerceWebsiteDevelopment">
                {chevron}E-Commerce Website
                <br />
                Development
              </Link>
            </li>
            <li>
              <Link to="/coding">
                {chevron}
                Website Programming
                <br />& Development
              </Link>
            </li>
            <li>
              <Link to="/webMaintenance">{chevron}Website Maintenance</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Organic SEO</h3>
          <ul>
            <li>
              <Link to="/seoFriendly">
                {chevron}
                SEO Friendly
                <br />
                Website Design
              </Link>
            </li>
            <li>
              <Link to="/printAndGraphicServices">
                {chevron}
                Digital & Print
                <br />
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/printedMediaLogos">{chevron}Printed Media Logos</Link>
            </li>
            <li>
              <Link to="/websiteLogoDesign">{chevron}Website Logo Design</Link>
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
          <h3>Portfolio</h3>
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
          <h3>Social Links</h3>
          <ul>
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
              <a href="https://twitter.com/bluesmokemedia/" target="_blank">
                {chevron}
                <img src={twitter} alt="Twitter Social Media Button" />
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
