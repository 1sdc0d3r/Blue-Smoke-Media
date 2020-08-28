import React from "react";
//* Components
import Header from "./Utils/Header";
import Navigation from "./Utils/Navigation";
import Footer from "./Utils/Footer";
//* Images
import placeholder from "../images/globe-stretch.png";

export default function Template() {
  return (
    <>
      {" "}
      <div className="Template page-wrapper">
        <img src={placeholder} alt="this is the SEO" />
        <div className="content">
          <h1>Title</h1>
          <p>lorem</p>
        </div>
      </div>
    </>
  );
}
