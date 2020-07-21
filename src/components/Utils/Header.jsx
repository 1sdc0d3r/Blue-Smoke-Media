import React from "react";
import silhouettes from "../../images/black-silhouettes.png";
import blueSmoke from "../../images/blue-smoke.png";
import flame from "../../images/flame.png";

// const blueSmoke =
//   "https://blue-smoke-media.s3-us-west-1.amazonaws.com/blue-smoke.png";

// const flame = "https://blue-smoke-media.s3-us-west-1.amazonaws.com/flame.png";

export default function Header() {
  return (
    <header>
      <img src={flame} alt="logo-flame" id="flame" />
      <div className="blue-smoke">
        <img src={blueSmoke} alt="blue-smoke" />
        <p>Digital and Printed Media</p>
      </div>
      <div className="center">
        <p>
          Getting <span>your</span> business
        </p>
        <p>
          <span>Back</span> into Business!!
        </p>
      </div>
      <img src={silhouettes} alt="people silhouettes" className="silhouettes" />
    </header>
  );
}
