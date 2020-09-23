import React from "react";
//* Images
import silhouettes from "../../images/black-silhouettes.png";
import blueSmoke from "../../images/blue-smoke.png";
import flame from "../../images/flame.png";

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
      <div className="silhouette-div">
        <img
          src={silhouettes}
          alt="people silhouettes"
          className="silhouettes"
        />
      </div>
    </header>
  );
}
