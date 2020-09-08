import React from "react";
import Check from "../images/checkmark.svg";
import noCheck from "../images/Red_x.svg";

export default function PriceChart() {
  const startNowHandler = () => {
    console.log("start now");
  };

  return (
    <div className="price-chart">
      <div className="col col-1">
        <div>
          <p>Price Table</p>
        </div>
        <p className="row row-light">Organic SEO</p>
        <p className="row row-dark">Custom Domain Name</p>
        <p className="row row-light">e-mail addresses</p>
        <p className="row row-dark">Bandwidth per month</p>
        <p className="row row-light">Secure Website (SSL)</p>
        <p className="row row-dark">Mobile-Friendly Site</p>
        <p className="row row-light">Website Support</p>
        <p className="row row-dark">PayPal Button</p>
        <p className="row row-light">accept online payments</p>
        <p className="row row-dark">google my business</p>
      </div>
      <div className="col col-2">
        <div>
          <h5>
            5 page
            <br />
            website
          </h5>
          <hr />
          <p>Starts At</p>
          <span>$749</span>
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
        <p
          className="row row-light start-now"
          onClick={() => startNowHandler()}
        >
          Start Now
        </p>
      </div>
      <div className="col col-3">
        <div>
          <h5>
            5-10 page
            <br />
            website
          </h5>
          <hr />
          <p>Starts At</p>
          <span>$1,249</span>
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
        <p
          className="row row-light start-now"
          onClick={() => startNowHandler()}
        >
          Start Now
        </p>
      </div>
      <div className="col col-4">
        <div>
          <h5>
            11-15+ page
            <br />
            website
          </h5>
          <hr />
          <p>Starts At</p>
          <span>$1,899</span>
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
        <p
          className="row row-light start-now"
          onClick={() => startNowHandler()}
        >
          Start Now
        </p>
      </div>
      <div className="col col-5">
        <div>
          <h5>
            5 page
            <br />
            website
          </h5>
          <hr />
          <p>Starts At</p>
          <span>$749</span>
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
        <p
          className="row row-light start-now"
          onClick={() => startNowHandler()}
        >
          Start Now
        </p>
      </div>
    </div>
  );
}
