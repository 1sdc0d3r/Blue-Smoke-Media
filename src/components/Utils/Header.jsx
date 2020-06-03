import React from "react";
import blueSmoke from "../../images/blue-smoke.png";
// import blueSmoke from "../../images/background_image_w_flame-BSlogo-only.png";

export default function Header() {
  return (
    <header>
      <img src={blueSmoke} alt="blue-smoke" />
      <p>Digital and Printed Media</p>
      <div className="sub-text">
        <span>What do your customers see...</span>
        <span>...Are you SURE?</span>
      </div>
    </header>
  );
}
