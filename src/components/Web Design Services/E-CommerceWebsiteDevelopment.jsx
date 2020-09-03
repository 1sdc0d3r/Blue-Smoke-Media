import React from "react";
import eCommerce from "../../images/E-commerce_image.png";
//* Images
// const eCommerce =
//   "https://blue-smoke-media.s3-us-west-1.amazonaws.com/E-commerce_image.png";

export default function ECommerceWebsiteDevelopment() {
  return (
    <div className="e-commerce-website-development page-wrapper">
      <img src={eCommerce} alt="this is the SEO" />
      <div className="content">
        <h1> Websites and E - Commerce </h1>{" "}
        <h2> E - Commerce...Build an ONLINE Store </h2>{" "}
        <p>
          If your Company wants to increase its customer base, make shopping
          easier for its customers, or promote their products, Building an
          Online Store is the right thing for them.We at{" "}
          <span> Blue Smoke digital and printed Media, </span> offer complete
          e-commerce solutions from online shopping systems to a wide variety of
          revenue processing facilities and supporting services for our
          customers businesses.{" "}
        </p>{" "}
        <p>
          The Web has always been a great tool for selling and marketing
          products and services.Web - based selling is the best option for most
          businesses, and often the least expensive option.{" "}
        </p>{" "}
        <p>
          <span> Blue Smoke digital and printed Media, </span> has helped
          businesses, large and small(and everything in between), understand how
          to use the Web to their advantage.By taking the time in getting to
          know your business, your goals, objectives, strengths and weaknesses,
          we are better able to formulate an effective strategy specifically for
          you.{" "}
        </p>{" "}
        <p>
          Remember, no two businesses are exactly alike, and because a business
          Web site is really an extension of the business itself, no two
          business Web sites are exactly alike - nor should they be.{" "}
        </p>{" "}
        <p>
          E - commerce is no exception. Sure, the concept is the same(to sell a
          product), but selling your product in the most efficient, cost -
          effective manner is what’ s going to help you grow, out - perform and
          out - last your competitors.{" "}
          <span
            style={{
              fontStyle: "italic",
            }}
          >
            We just don’ t want to help you sell product, we want to help you
            exceed expectations!
          </span>
        </p>
      </div>
    </div>
  );
}
