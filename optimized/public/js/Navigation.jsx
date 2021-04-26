"use strict";
// import { FiChevronDown } from "react-icons/fi";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const dropArrow = <FiChevronDown color="#7ff76f" className="arrow" />;
    const dropArrow = (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        color="#7ff76f"
        class="arrow"
        height="1em"
        width="1em"
        // xmlns="http://www.w3.org/2000/svg"
        // style="color: rgb(127, 247, 111)"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    );

    return (
      <nav className="main-nav">
        <div className="dropdown">
          <button className="drop-btn nav-item">
            <a href="/">
              <div>
                <p>Home</p>
                {dropArrow}
              </div>
            </a>
          </button>
          <div className="dropdown-content home-drop">
            <div className="nav-section">
              <a href="/help" className="drop-item">
                Need Help?
              </a>
              <a href="/privacy" className="drop-item">
                Privacy Policy
              </a>
              <a href="/sitemap.xml" className="drop-item">
                Sitemap
              </a>
            </div>
          </div>
        </div>
        <a href="/team" className="nav-item">
          Our Team
        </a>
        <div className="dropdown">
          <button className="drop-btn nav-item">
            <div>
              <p>Services</p>
              {dropArrow}
            </div>
          </button>
          <div className="dropdown-content">
            <div className="nav-section">
              <h3>SEO</h3>
              <a href="/seo/Friendly" className="drop-item">
                SEO - Search Engine Optimization
              </a>

              <a href="/seo/organic" className="drop-item">
                Organic Search Engine Optimization
              </a>

              <a href="/social-media" className="drop-item">
                Social Media
              </a>
            </div>
            <div className="nav-section ">
              <h3>Website Design</h3>
              <div className="split">
                <div>
                  <a
                    href="/website-design/custom-website-design"
                    className="drop-item"
                  >
                    Custom Website Design
                  </a>
                  <a
                    href="/website-design/eCommerce-website-development"
                    className="drop-item"
                  >
                    E-Commerce Website Development
                  </a>
                  <a href="/website-design/coding" className="drop-item">
                    Coding and Programming
                  </a>
                </div>
                <div>
                  <a href="/ad-CopyWriting" className="drop-item">
                    Website Ad-Copy Writing
                  </a>

                  <a
                    href="/website-design/website-maintenance"
                    className="drop-item"
                  >
                    Website Maintenance
                  </a>
                  <a
                    href="/website-design/website-useability"
                    className="drop-item"
                  >
                    Creating Your Website-Useability
                  </a>
                </div>
              </div>
              <a href="/website-design/inquiry-form" className="drop-item">
                Inquiry/Survey Form
              </a>
            </div>
            <div className="nav-section">
              <h3>Graphic Design</h3>
              <a
                href="/graphic-design/website-logo-design"
                className="drop-item"
              >
                Website Logo Design
              </a>

              <a
                href="/graphic-design/printed-media-logos"
                className="drop-item"
              >
                Print Logo Design
              </a>

              <a
                href="/graphic-design/digital-and-print-graphic-design"
                className="drop-item"
              >
                Print & Graphic Design Services
              </a>
            </div>
          </div>
        </div>
        <a href="/plans" className="nav-item">
          Pricing
        </a>
        {/* <a href="/portfolio" className="nav-item">
        Our Work
      </a> */}
        <a
          href="https://bluesmokemedianomads.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          Blog
        </a>
        <a href="/contact" className="nav-item">
          Contact
        </a>
      </nav>
    );
  }
}

const domContainer = document.querySelector("#navigation");
ReactDOM.render(React.createElement(Navigation), domContainer);
