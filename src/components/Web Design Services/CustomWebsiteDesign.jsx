import React from "react";
import customDesign from "../../images/watercolor-papers.jpg";

//* Images
// const customDesign =
//   "https://blue-smoke-media.s3-us-west-1.amazonaws.com/watercolor-papers.jpg";

export default function CustomWebsiteDesign() {
  return (
    <div className="custom-website-design page-wrapper">
      <img src={customDesign} alt="imageHere" />
      <div className="content">
        <h1>Custom Website Design</h1>
        <p>
          ....Every business of every size should have a professional presence
          on the internet. YOUR web site should reflect the look and feel of
          YOUR business, achieve YOUR marketing objectives and enhance YOUR
          business image.
        </p>
        <p>
          Your custom website design must represent you well while appealing
          effectively to your customers. Your website will be designed to rank
          well in search engines increasing your exposure and attracting
          interested potential customers to your website, giving you these
          benefits:
        </p>
        <ol>
          <li>Looks professional and represents your company well.</li>
          <li>Targeted to your customers needs.</li>
          <li>Is not confusing and easy to get around.</li>
          <li>Designed to make people remember your company.</li>
          <li>
            Images and text created to sell as well as present your product.
          </li>
          <li>Contains the information needed to make a decision.</li>
          <li>Enables people to find what they’re looking for.</li>
          <li>Downloads fast and built for easy future updates and growth.</li>
          <li>Has forms, shopping carts and databases where needed.</li>
          <li>
            Increases your exposure and attracts interested potential customers
            through built-in SEO techniques designed for high search engine
            rankings.
          </li>
        </ol>
        <p>
          <span>Blue Smoke Digital and Printed Media,</span> views a web site as
          a vital asset to any company and a method to get out on the front
          lines of today’s business battlefield. You want YOUR site to be
          focused on YOUR users. You want it to bring results. We can help. For
          fast answers and an accurate quote, please fill out the inquiry form
          and a representative will contact you.
        </p>
      </div>
    </div>
  );
}
