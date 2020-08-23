import React from "react";
import { Link } from "react-router-dom";

import Carousel from "./Carousel";
// import { faDollarSign } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//todo SEO FOR REACTJS!!!!
//todo set up google analytics
//analytics.google.com/analytics/web/provision/#/a168002604p234303565/admin/streams/promo
// todo remove react helmet
export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <section className="globe">
        <p>
          <h1>
            Blue Smoke Digital and
            <br />
            Printed Media
          </h1>
          <br />
          produces a growing roster of local, regional and national clients
          ranging from one-person companies, small and medium sized business to
          non-profit organizations. Our websites are fast loading, Organically
          Search Engine Optimized, visually appealing, and easy to navigate.
          <p>
            What do your customers see... <span>Are You SURE??</span>
          </p>
        </p>
      </section>
      <section className="plans-pricing">
        <h1>
          <span>Our </span>Plans & Pricing
        </h1>
        <p className="sub-text">
          (All prices may be subject to change without
          <br />
          notice, unless under contract.)
        </p>
        <div className="card-container">
          <div className="card">
            <h3>
              5 Page
              <br />
              Website
            </h3>
            <h6>Includes Organic SEO</h6>
            <hr className="line" />
            <p>Starts At</p>
            <p className="price">$749</p>
            <Link to="#">View Plans</Link>
          </div>
          <div className="card">
            <h3>
              6-10 Page
              <br />
              Website
            </h3>
            <h6>Includes Organic SEO</h6>
            <hr className="line" />
            <p>Starts At</p>
            <p className="price">$1,399</p>
            <Link to="#">View Plans</Link>
          </div>
          <div className="card">
            <h3>
              11-15+ Page
              <br />
              Website
            </h3>
            <h6>Includes Organic SEO</h6>
            <hr className="line" />
            <p>Starts At</p>
            <p className="price">$2,299</p>
            <Link to="#">View Plans</Link>
          </div>
          <div className="card">
            <h3>
              E-Commerce
              <br />
              Website
            </h3>
            <h6>
              Includes Organic SEO
              <br /> Price is for 5 pages and 10 items.
            </h6>
            <hr className="line" />
            <p>Starts At</p>
            <p className="price">$1,749</p>
            <Link to="#">View Plans</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
