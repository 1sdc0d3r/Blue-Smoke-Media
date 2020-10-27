import React from "react";
import { Link } from "react-router-dom";
//* Images
import Check from "../images/checkmark.svg";
import noCheck from "../images/Red_x.svg";

export default function PriceChart() {
  const startNowHandler = () => {
    // console.log("start now");
  };

  return (
    <>
      <div className="price-chart">
        <h1 style={{ display: "none" }}>Plans and Pricing</h1>
        <div className="col col-1">
          <div>
            <p>
              Price
              <br />
              Table
            </p>
          </div>
          <p className="row row-light">Organic SEO</p>
          <p className="row row-dark domain-name">Custom Domain Name</p>
          <p className="row row-light">E-mail Addresses</p>
          <p className="row row-dark">Bandwidth per Month</p>
          <p className="row row-light">Secure Website (SSL)</p>
          <p className="row row-dark">Mobile-Friendly Site</p>
          <p className="row row-light">Website Support</p>
          <p className="row row-dark">PayPal Button</p>
          <p className="row row-light">Online Payments</p>
          <p className="row row-dark">Google My Business</p>
        </div>
        <div className="col col-2">
          <div>
            {/* <div> */}
            <h5>
              5 page
              <br />
              website
            </h5>
            <hr />
            <p>
              Starts At <br />
              <span>$849</span>
            </p>
            {/* </div> */}
          </div>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light blue-text">5</p>
          <p className="row row-dark blue-text">5 GB</p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            {" "}
            <img src={noCheck} alt="checkmark" />
          </p>
          <p className="row row-light">
            {" "}
            <img src={noCheck} alt="checkmark" />
          </p>
          <p className="row row-dark">
            {" "}
            <img src={noCheck} alt="checkmark" />
          </p>
          <Link
            className="row row-light start-now"
            to="/website-design/inquiry-form"
          >
            Start Now
          </Link>
        </div>
        <div className="col col-3">
          <div>
            {/* <div> */}
            <h5>
              6-10 page
              <br />
              website
            </h5>
            <hr />
            <p>
              Starts At <br />
              <span>$1,449</span>
            </p>
            {/* </div> */}
          </div>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light blue-text">10</p>
          <p className="row row-dark blue-text">15 GB</p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            {" "}
            <img src={noCheck} alt="checkmark" />
          </p>
          <p className="row row-light">
            {" "}
            <img src={noCheck} alt="checkmark" />
          </p>
          <p className="row row-dark">
            {" "}
            <img src={noCheck} alt="checkmark" />
          </p>
          <Link
            className="row row-light start-now"
            to="/website-design/inquiry-form"
          >
            Start Now
          </Link>
        </div>
        <div className="col col-4">
          <div>
            {/* <div> */}
            <h5>
              11-15+ page
              <br />
              website
            </h5>
            <hr />
            <p>
              Starts At <br />
              <span>$2,249</span>
            </p>
            {/* </div> */}
          </div>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light blue-text">20</p>
          <p className="row row-dark blue-text">Unlimited</p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <Link
            className="row row-light start-now"
            to="/website-design/inquiry-form"
          >
            Start Now
          </Link>
        </div>
        <div className="col col-5">
          <div>
            {/* <div> */}
            <h5>
              E-Commerce
              <br />
              website
            </h5>
            <hr />
            <p>
              Starts At <br />
              <span>$1,749</span>
            </p>
            {/* </div> */}
          </div>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light blue-text">10</p>
          <p className="row row-dark blue-text">Unlimited</p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-light">
            <img src={Check} alt="checkmark" />
          </p>
          <p className="row row-dark">
            <img src={Check} alt="checkmark" />
          </p>
          <Link
            className="row row-light start-now"
            onClick={() => startNowHandler}
            to="/website-design/inquiry-form"
          >
            Start Now
          </Link>
        </div>
      </div>
      <p className="domain-name-info domain-table">
        Included free for first year.
      </p>
      <div className="price-cards">
        <div className="card">
          <h3>5 page website</h3>
          <p>
            Starts At <span>$849</span>
          </p>
          <div className="w-space" />
          <ul>
            <li>Organic SEO</li>
            <li className="domain-name">Custom Domain Name</li>
            <li>5 e-mail addresses</li>
            <li>5 GB Bandwidth per month</li>
            <li>Secure Website (SSL)</li>
            <li>Mobile-Friendly Site</li>
            <li>Website Support</li>
          </ul>
          <div className="start">
            <Link to="/website-design/inquiry-form">Start</Link>
          </div>
        </div>
        <div className="card">
          <h3>6-10 page website</h3>
          <p>
            Starts At <span>$1,449</span>
          </p>
          <div className="w-space" />
          <ul>
            <li>Organic SEO</li>
            <li className="domain-name">Custom Domain Name</li>
            <li>10 e-mail addresses</li>
            <li>15 GB Bandwidth per month</li>
            <li>Secure Website (SSL)</li>
            <li>Mobile-Friendly Site</li>
            <li>Website Support</li>
          </ul>
          <div className="start">
            <Link to="/website-design/inquiry-form">Start</Link>
          </div>
        </div>
        <div className="card">
          <h3>11-15+ page website</h3>
          <p>
            Starts At <span>$2,249</span>
          </p>
          <div className="w-space" />
          <ul>
            <li>Organic SEO</li>
            <li className="domain-name">Custom Domain Name</li>
            <li>20 e-mail addresses</li>
            <li>Unlimited Bandwidth</li>
            <li>Secure Website (SSL)</li>
            <li>Mobile-Friendly Site</li>
            <li>Website Support</li>
            <li>PayPal Button</li>
            <li>online payments</li>
            <li>google my business</li>
          </ul>
          <div className="start">
            <Link to="/website-design/inquiry-form">Start</Link>
          </div>
        </div>
        <div className="card">
          <h3>E-Commerce website</h3>
          <p>
            Starts At <span>$1,749</span>
          </p>
          <div className="w-space" />
          <ul>
            <li>Organic SEO</li>
            <li className="domain-name">Custom Domain Name</li>
            <li>10 e-mail addresses</li>
            <li>Unlimited Bandwidth</li>
            <li>Secure Website (SSL)</li>
            <li>Mobile-Friendly Site</li>
            <li>Website Support</li>
            <li>PayPal Button</li>
            <li>online payments</li>
            <li>google my business</li>
          </ul>
          <div className="start">
            <Link to="/website-design/inquiry-form">Start</Link>
          </div>
        </div>
      </div>
      <p className="domain-name-info domain-cards">
        Included free for first year.
      </p>
    </>
  );
}
