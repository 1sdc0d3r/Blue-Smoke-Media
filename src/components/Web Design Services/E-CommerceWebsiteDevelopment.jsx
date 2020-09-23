import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import eCommerce from "../../images/E-commerce_image.png";

export default function ECommerceWebsiteDevelopment() {
  return (
    <div className="e-commerce-website-development page-wrapper">
      <img
        src={eCommerce}
        alt="E-commerce and all it entails to become a successful business."
      />
      <div className="content">
        <h1>Websites and E - Commerce</h1>{" "}
        <h2>E - Commerce... Build an ONLINE Store</h2>{" "}
        <p>
          If your Company wants to increase its customer base, make shopping
          easier for its customers, or promote their products,{" "}
          <Link to="/article/16">Building an Online Store</Link> is the right
          thing for them. We at{" "}
          <span style={{ color: "#1e92f6" }}>
            {" "}
            Blue Smoke Digital and Printed Media,{" "}
          </span>{" "}
          offer complete e-commerce solutions from online shopping systems to a
          wide variety of revenue processing facilities and supporting services
          for our customers businesses.{" "}
        </p>{" "}
        <p>
          The Web has always been a great tool for selling and marketing
          products and services. Web - based selling is the best option for most
          businesses, and often the least expensive option.{" "}
        </p>{" "}
        <p>
          <span> Blue Smoke Digital and Printed Media </span> has helped
          businesses, large and{" "}
          <Link to="/article/12">small (and everything in between)</Link>,
          understand how to use the Web to their advantage. By taking the time
          in getting to know your business, your goals, objectives, strengths
          and weaknesses, we are better able to formulate an effective strategy
          specifically for you.
        </p>{" "}
        <p>
          Remember, no two businesses are exactly alike, and because a business
          Website is really an extension of the business itself, no two business
          Websites are exactly alike - nor should they be.{" "}
        </p>{" "}
        <p>
          E - commerce is no exception. Sure, the concept is the same (to sell a
          product), but selling your product in the most efficient,{" "}
          <Link to="/plans">cost - effective manner</Link> is what’ s going to
          help you grow, out - perform and out - last your competitors.{" "}
          <span
            style={{
              fontStyle: "italic",
            }}
          >
            We just don’ t want to help you sell your products; we want to help
            you exceed expectations!
          </span>
        </p>
      </div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/website-design/eCommerce-website-development"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>
          E-Commerce...Build an ONLINE Store with E-commerce website design.
        </title>

        <meta
          name="description"
          content="Blue Smoke digital and printed Media in Knoxville, TN, UT, WA, NC, SC and ID, offer complete e-commerce solutions from online shopping systems to a wide variety of revenue processing facilities and supporting services for our customers businesses."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="E-Commerce...Build an ONLINE Store with E-commerce website design. "
        />
        <meta
          itemprop="description"
          content="Blue Smoke digital and printed Media in Knoxville, TN, UT, WA, NC, SC and ID, offer complete e-commerce solutions from online shopping systems to a wide variety of revenue processing facilities and supporting services for our customers businesses."
        />
        <meta itemprop="image" content="../../images/E-commerce_image.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="E-Commerce...Build an ONLINE Store with E-commerce website design. "
        />
        <meta
          property="og:description"
          content="Blue Smoke digital and printed Media in Knoxville, TN, UT, WA, NC, SC and ID, offer complete e-commerce solutions from online shopping systems to a wide variety of revenue processing facilities and supporting services for our customers businesses."
        />
        <meta property="og:image" content="../../images/E-commerce_image.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E-Commerce...Build an ONLINE Store with E-commerce website design. "
        />
        <meta
          name="twitter:description"
          content="Blue Smoke digital and printed Media in Knoxville, TN, UT, WA, NC, SC and ID, offer complete e-commerce solutions from online shopping systems to a wide variety of revenue processing facilities and supporting services for our customers businesses."
        />
        <meta
          name="twitter:image"
          content="../../images/E-commerce_image.png"
        />
      </Helmet>
    </div>
  );
}
