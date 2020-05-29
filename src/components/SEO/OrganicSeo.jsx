import React from "react";
import { Helmet } from "react-helmet";
//* Components
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";
import seoBanner from "../../images/seo-banner.png";

export default function OrganicSeo() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is what you want to show as the page content in the Google SERP Listing"
        />
      </Helmet>
      {/* <Header /> */}
      {/* <Navigation /> */}{" "}
      <div className="organic-seo">
        <img src={seoBanner} alt="seo" />
        <h2>Organic Search Engine Optimization</h2>
        <p>
          Organic search engine optimization (see “what is organic search and
          how it can help your company), also referred to as traditional search
          engine optimization, is the process of enhancing your web site with
          the goal of increasing your visibility in the top search engines when
          specific keywords or phrases are searched for. The overall process
          involves a variety of aspects including keyword analysis and
          selection, web site optimization for optimal search engine
          positioning, search engine crawler inclusion, creating and submitting
          directory listings , link popularity enhancement and ongoing campaign
          reporting and maintenance. The end result is that people will be able
          to easily find your web site when searching for products and services
          related to your business.
        </p>
        <p>
          <span>Organic or Natural Keyword Optimization</span> is critical to
          ensuring your site is organized properly and that your content, (we
          suggest at least 250 words of rich content), reflects your target
          keyword phrases accurately. Relevant content is key for top search
          engine rankings. We start with Title and Meta Tags and work through
          the on-page text content and layout and internal linking of your web
          pages to ensure proper page formatting and keyword relevancy.
        </p>
        <p>
          Organic Search Engine Optimization will increase the likelihood that
          your site will show up on a search for a particular keyword. Since
          over time a substantial amount of a client’s site traffic will result
          from search engines, optimization should be looked at as a long-term
          investment.
        </p>
        <p>
          For more information on Organic Search Engine Optimization, contact us
          at info@BlueSmokeDigitalMedia.
        </p>
      </div>
      {/* <Footer /> */}
    </>
  );
}
