import React from "react";
import customDesign from "../../images/custom_website_design_image.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function CustomWebsiteDesign() {
  return (
    <div className="custom-website-design page-wrapper">
      <img src={customDesign} alt="Watercolor Wireframes of Website Design" />
      <div className="content">
        <h1>Custom Website Design</h1>
        <p>
          ....Every business of every size should have a professional presence
          on the internet. YOUR website should reflect the look and feel of YOUR
          business, achieve YOUR marketing objectives and enhance YOUR business
          image.
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
          <span>Blue Smoke Digital and Printed Media,</span> views a website as
          a vital asset to any company and a method to get out on the front
          lines of today’s business battlefield. You want YOUR site to be
          focused on YOUR users. You want it to bring results. We can help. For
          fast answers and an accurate quote, please fill out the{" "}
          <Link to="/website-design/inquiry-form">inquiry form</Link>
          and a representative will contact you.
        </p>
      </div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/#/website-design/custom-website-design"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>How You Can Benefit from a Custom Website Design!</title>

        <meta
          name="description"
          content="Blue Smoke Digital and Printed Media views a website as a vital asset to any company and a method to get out on the front lines of today's business battlefield. "
        />

        <meta
          name="keywords"
          content="custom website design, website design useability, graphic design, website application, website optimization, web design, website design and development, e-commerce development, web design and development company, e-commerce website development company, web graphic design, custom web design services, best website development company, web design company near me, custom website creation"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="How You Can Benefit from a Custom Website Design"
        />
        <meta
          itemprop="description"
          content="Blue Smoke Digital and Printed Media views a website as a vital asset to any company and a method to get out on the front lines of today's business battlefield. "
        />
        <meta
          itemprop="image"
          content="../../images/custom_website_design_image.jpg"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="How You Can Benefit from a Custom Website Design"
        />
        <meta
          property="og:description"
          content="Blue Smoke Digital and Printed Media views a website as a vital asset to any company and a method to get out on the front lines of today's business battlefield. "
        />
        <meta
          property="og:image"
          content="../../images/custom_website_design_image.jpg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How You Can Benefit from a Custom Website Design"
        />
        <meta
          name="twitter:description"
          content="Blue Smoke Digital and Printed Media views a website as a vital asset to any company and a method to get out on the front lines of today's business battlefield. "
        />
        <meta
          name="twitter:image"
          content="../../images/custom_website_design_image.jpg"
        />
      </Helmet>
    </div>
  );
}
