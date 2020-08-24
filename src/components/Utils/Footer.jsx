import React, { useEffect } from "react";
import blueSmoke from "../../images/blue-smoke.png";
import youtube from "../../images/youTube.png";
import twitter from "../../images/Twitter.png";
import linkedIn from "../../images/linkedIn_social_media_button.png";
import instagram from "../../images/instagram.png";
import behance from "../../images/Behance.png";
import facebook from "../../images/faceBook.png";
// todo links
//todo make sure everything is in here
export default function Footer() {
  return (
    <>
      <footer>
        <div className="about">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/team">Our Team</a>
            </li>
            {/* <li>
              <a href="#">Portfolio</a>
            </li> */}
            {/* <li>
              <a href="#">Our Blog</a>
            </li> */}
            <li>
              <a href="/inquirySurveyForm">Inquiry Form</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Products</h3>
          <ul>
            <li>
              <a href="/customWebsiteDesign">Website Design</a>
            </li>
            {/* //todo NEW SEO PAGE */}
            <li>
              <a href="/seo">
                Search Engine
                <br />
                Optimization
              </a>
            </li>
            <li>
              <a href="/printAndGraphicServices">Graphic Design</a>
            </li>
            {/* <li>
              <a href="a/">Social Media Marketing</a>
            </li> */}
            {/* <li>
              <a href="l-">Corporate Branding</a>
            </li> */}
            {/* <li>
              <a href="#">Reputation Management</a>
            </li> */}
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="/customWebsiteDesign">Custom Website Design</a>
            </li>
            {/* //todo  */}
            {/* <li>
              <a href="#">Re-Design & Updates</a>
            </li> */}
            {/* //todo fix breaking line? */}
            <li>
              <a href="/websiteUsability">Website Useability</a>
            </li>
            <li>
              <a href="/E-CommerceWebsiteDevelopment">
                E-Commerce Website
                <br />
                Development
              </a>
            </li>
            <li>
              <a href="/coding">
                Website Programming
                <br />& Development
              </a>
            </li>
            <li>
              <a href="/webMaintenance">Website Maintenance</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Organic SEO</h3>
          <ul>
            <li>
              <a href="/seoFriendly">
                SEO Friendly
                <br />
                Website Design
              </a>
            </li>
            <li>
              <a href="/printAndGraphicServices">
                Digital & Print
                <br />
                Graphic Design
              </a>
            </li>
            <li>
              <a href="/printedMediaLogos">Printed Media Logos</a>
            </li>
            <li>
              <a href="/websiteLogoDesign">Website Logo Design</a>
            </li>
            {/* //todo social media component */}
            {/* <li>
              <a href="x-">
                Social Media <br />& Marketing
              </a>
            </li> */}
            {/* //todo reputation management component */}
            {/* <li>
              <a href="x-">Reputation & Review Management</a>
            </li> */}
          </ul>
        </div>
        {/* <div>
        //todo PORTFOLIO
          <h3>Portfolio</h3>
          <ul>
            <li>
              <a href="#">Websites </a>
            </li>
            <li>
              <a href="#">E-commerce Websites </a>
            </li>
            <li>
              <a href="#">
                Social Media <br />
                Management
              </a>
            </li>
            <li>
              <a href="#">Corporate Branding </a>
            </li>
            <li>
              <a href="#">Printed Media </a>
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
              <a href="" target="">
                <img src="" alt="r Social Media Button" />
              </a>
            </li>
            <li>
              <a href="#">Behance</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li> */}
          </ul>
        </div>
      </footer>
      <section className="bottom">
        <div className="payment">
          {/* //todo icons */}
          <p>Visa</p>
          <p>PayPal</p>
          <p>Discover</p>
          <p>MasterCard</p>
        </div>
        <div className="contact">
          <p>call support:</p>
          <div className="numbers">
            <p>
              <a href="tel:+1.865.274.1371">+1 865.274.1371</a>
            </p>
            <p>
              <a href="tel:+1.801.690.1189">+1 801.690.1189</a>
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
