"use strict";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // import PaymentIcon from "react-payment-icons";
  render() {
    const chevron = (
      <svg
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="chevron-right"
      >
        <polyline
          fill="none"
          stroke="#ee3e0e"
          strokeWidth="3.0"
          points="7 4 13 10 7 16"
        ></polyline>
      </svg>
    );

    return (
      <div>
        <footer>
          <div className="about">
            <h3 onClick={() => dropdown(document.getElementById("drop-about"))}>
              About Us
            </h3>
            <ul id="drop-about">
              <li>
                <a href="/">{chevron}Home</a>
              </li>
              <li>
                <a href="/team">{chevron}Our Team</a>
              </li>
              <li>
                <a href="/plans">{chevron}Plans & Pricing</a>
              </li>
              <li>
                <a href="/help">{chevron}Need Help?</a>
              </li>
              <li>
                <a href="/website-design/inquiry-form">{chevron}Inquiry Form</a>
              </li>
              <li>
                <a href="/contact">{chevron}Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              onClick={() => dropdown(document.getElementById("drop-product"))}
            >
              Products
            </h3>
            <ul id="drop-product">
              <p>Website Design</p>
              <p>
                Search Engine
                <br />
                Optimization
              </p>
              <p>Graphic Design</p>
              <p>Social Media & Marketing</p>
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
                <a href="/website-design/custom-website-design">
                  {chevron}Custom Website Design
                </a>
              </li>
              <li>
                <a href="/website-design/website-useability">
                  {chevron}Website Useability
                </a>
              </li>
              <li>
                <a href="/website-design/eCommerce-website-development">
                  {chevron}E-Commerce Website
                  <br />
                  Development
                </a>
              </li>
              <li>
                <a href="/website-design/coding">
                  {chevron}
                  Website Programming
                  <br />& Development
                </a>
              </li>
              <li>
                <a href="/website-design/website-maintenance">
                  {chevron}Website Maintenance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              onClick={() => dropdown(document.getElementById("drop-organic"))}
            >
              Organic SEO
            </h3>
            <ul id="drop-organic">
              <li>
                <a href="/seo/Friendly">
                  {chevron}
                  SEO Friendly
                  <br />
                  Website Design
                </a>
              </li>
              <li>
                <a href="/seo/organic">
                  {chevron}
                  Organic SEO
                </a>
              </li>
              <li>
                <a href="/graphic-design/digital-and-print-graphic-design">
                  {chevron}
                  Digital & Print
                  <br />
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="/graphic-design/printed-media-logos">
                  {chevron}Printed Media Logos
                </a>
              </li>
              <li>
                <a href="/graphic-design/website-logo-design">
                  {chevron}Website Logo Design
                </a>
              </li>
              <li>
                <a href="/social-media">
                  {chevron}
                  Social Media & Marketing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 onClick={() => dropdown(document.getElementById("drop-sm"))}>
              Social Links
            </h3>
            <ul id="drop-sm">
              <li>
                <a
                  href="https://www.linkedin.com/company/blue-smoke-digital-and-printed-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chevron}
                  <img
                    src="../assets/linkedIn_social_media_button.webp"
                    alt="LinkedIn Social Media Button"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/bluesmokemedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chevron}
                  <img
                    src="../assets/faceBook.webp"
                    alt="Facebook Social Media Button"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/bluesmokemedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chevron}
                  <img
                    src="../assets/Twitter.webp"
                    alt="Twitter Social Media Button"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJJfs6ZcFvWogRJE1LyrS-E5Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chevron}
                  <img
                    src="../assets/icon-Google-review.webp"
                    alt="Google Social Media Button"
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <section className="bottom">
          <div className="payment">
            {/* <PaymentIcon id="visa" className="payment-icon" />
            <PaymentIcon id="paypal" className="payment-icon" />
            <PaymentIcon id="discover" className="payment-icon" />
            <PaymentIcon id="mastercard" className="payment-icon" /> */}
            <p>visa</p>
            <p>paypal</p>
            <p>discover</p>
            <p>mastercard</p>
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
        <p className="copy">
          © 2019-2021 - Blue Smoke Digital and Printed Media - All rights
          reserved
        </p>
      </div>
    );
  }
}

const domContainer = document.querySelector("#footer");
ReactDOM.render(React.createElement(Footer), domContainer);

function dropdown(evt) {
  evt.classList.toggle("show-drop");
  console.log(evt.classList);
}
