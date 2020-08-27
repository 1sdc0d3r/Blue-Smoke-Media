import React from "react";

export default function HamburgerMenu() {
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
          <a href="/">
            {" "}
            <li>Home</li>
          </a>

          <a href="/team">
            <li>Our Team</li>
          </a>
          <li className="sub-menu-btn">Services ></li>
          <ul className="sub-drop-menu">
            <div className="dropdown-content">
              <h3>SEO</h3>

              <a href="/seoFriendly">SEO - Search Engine Optimization</a>

              <a href="/seoOrganic">Organic Search Engine Optimization</a>
              <h3>Website Design</h3>

              <a href="/customWebsiteDesign">Custom Website Design</a>

              <a href="/E-CommerceWebsiteDevelopment">
                E-Commerce Website Development
              </a>

              <a href="/websiteUsability">Creating Your Website-Useability</a>

              <a href="/ad-CopyWriting">Website Ad-Copy Writing</a>

              <a href="/webMaintenance">Website Maintenance</a>

              <a href="/coding">Coding and Programming</a>

              <a href="/inquirySurveyForm">Inquiry/Survey Form</a>
              <h3>Graphic Design</h3>

              <a href="/websiteLogoDesign">Website Logo Design</a>

              <a href="/printedMediaLogos">Print Logo Design</a>

              <a href="/printAndGraphicServices">
                Print & Graphic Design Services
              </a>
            </div>
          </ul>

          <a href="#" target="_blank">
            <li>Blog</li>
          </a>

          <a href="/contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
