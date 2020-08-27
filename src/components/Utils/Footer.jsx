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
// todo make sure everything is in here
export default function Footer() {
  return (
    <>
      <footer>
        <div className="about">
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            {/* <li>
              <Link to="#">Portfolio</Link>
            </li> */}
            {/* <li>
              <a href="#" target="_blank">Our Blog</a>
            </li> */}
            <li>
              <Link to="/inquirySurveyForm">Inquiry Form</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Products</h3>
          <ul>
            <li>
              <Link to="/customWebsiteDesign">Website Design</Link>
            </li>
            {/* //todo NEW SEO PAGE */}
            <li>
              <Link to="/seo">
                Search Engine
                <br />
                Optimization
              </Link>
            </li>
            <li>
              <Link to="/printAndGraphicServices">Graphic Design</Link>
            </li>
            {/* <li>
              <Link to="a/">Social Media Marketing</Link>
            </li> */}
            {/* <li>
              <Link to="l-">Corporate Branding</Link>
            </li> */}
            {/* <li>
              <Link to="#">Reputation Management</Link>
            </li> */}
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/customWebsiteDesign">Custom Website Design</Link>
            </li>
            {/* <li>
              <Link to="#">Re-Design & Updates</Link>
            </li> */}
            <li>
              <Link to="/websiteUsability">Website Useability</Link>
            </li>
            <li>
              <Link to="/E-CommerceWebsiteDevelopment">
                E-Commerce Website
                <br />
                Development
              </Link>
            </li>
            <li>
              <Link to="/coding">
                Website Programming
                <br />& Development
              </Link>
            </li>
            <li>
              <Link to="/webMaintenance">Website Maintenance</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Organic SEO</h3>
          <ul>
            <li>
              <Link to="/seoFriendly">
                SEO Friendly
                <br />
                Website Design
              </Link>
            </li>
            <li>
              <Link to="/printAndGraphicServices">
                Digital & Print
                <br />
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/printedMediaLogos">Printed Media Logos</Link>
            </li>
            <li>
              <Link to="/websiteLogoDesign">Website Logo Design</Link>
            </li>
            {/* //todo social media component */}
            {/* <li>
              <Link to="x-">
                Social Media <br />& Marketing
              </Link>
            </li> */}
            {/* //todo reputation management component */}
            {/* <li>
              <Link to="x-">Reputation & Review Management</Link>
            </li> */}
          </ul>
        </div>
        {/* <div>
        //todo PORTFOLIO
          <h3>Portfolio</h3>
          <ul>
            <li>
              <Link to="#">Websites </Link>
            </li>
            <li>
              <Link to="#">E-commerce Websites </Link>
            </li>
            <li>
              <Link to="#">
                Social Media <br />
                Management
              </Link>
            </li>
            <li>
              <Link to="#">Corporate Branding </Link>
            </li>
            <li>
              <Link to="#">Printed Media </Link>
            </li>
          </ul>
        </div> */}
        <div>
          <h3>Social Links</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/company/blue-smoke-digital-and-printed-media/"
                target="_blank"
              >
                <img src={linkedIn} alt="LinkedIn Social Media Button" />
              </a>
            </li>
            {/* //todo add in all social media accounts
            <li>
              <Link to="" target="">
                <img src="" alt="r Social Media Button" />
              </Link>
            </li>
            <li>
              <Link to="#">Behance</Link>
            </li>
            <li>
              <Link to="#">Youtube</Link>
            </li> */}
          </ul>
        </div>
      </footer>
      <section className="bottom">
        <div className="payment">
          {/* //todo icons */}
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
      {/* //todo copywright
      <p className="copy">
        © 2019-2020 - Blue Smoke Digital and Printed Media - All rights reserved
      </p> */}
    </>
  );
}
