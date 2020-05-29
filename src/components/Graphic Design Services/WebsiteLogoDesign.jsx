import React from "react";
import { Helmet } from "react-helmet";
//* Components
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";
//* Images
import logoDesign from "../../images/Website-logo-design-services.png";

export default function WebsiteLogoDesign() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is what you want to show as the page content in the Google SERP Listing"
        />
      </Helmet>
      {/*{/* <Header /> */} */}
      {/* <Navigation /> */}{" "}
      <div className="website-logo-design">
        <img src={logoDesign} alt="Logos" />
        <div className="content">
          <h1>Website Logos</h1>
          <p>
            Websites without a logo look incomplete — and miss on an important
            “branding” opportunity — while logos that do not look professional
            simply convey a poor impression.
          </p>
          <p>
            With your professionally-designed logo on every page, your customers
            will know that they’ve arrived at your website, your website will
            look uniform and consistent, and your logo will remind potential new
            customers of your company — on every page.
          </p>
          <p>
            If you already have a logo, we can prepare it for usage on the Web,
            helping to bring your offline message and branding to your online
            presence — and identify your website to your customers.
          </p>
          <p>
            We specialize in aesthetic, one-of-a-kind logos that say what you
            do. We use state-of-the-art graphics programs to translate your logo
            into Web formats, cutting down on “download” time as much as
            possible while retaining the quality of the image.
          </p>
          <p>
            If <span>Blue Smoke Digital and Printed Media</span> is designing
            your website, we can design it around the look and feel of your
            logo, arriving at a cohesive balance and color scheme that just
            “looks right”.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
