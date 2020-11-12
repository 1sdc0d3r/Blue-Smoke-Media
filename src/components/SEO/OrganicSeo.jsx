import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import seoBanner from "../../images/seo-banner.png";

export default function OrganicSeo() {
  return (
    <div className="organic-seo page-wrapper">
      <img
        src={seoBanner}
        alt="Organic Search Engine Optimization Banner"
        className="hero-image"
      />
      <h1>Organic Search Engine Optimization</h1>
      <p>
        Organic search engine optimization{" "}
        <Link to="/article/13">
          (see “what is organic search and how it can help your company),
        </Link>{" "}
        also referred to as traditional search engine optimization, is the
        process of enhancing your website with the goal of increasing your
        visibility in the top search engines when specific keywords or phrases
        are searched for. The overall process involves a variety of aspects
        including keyword analysis and selection, website content optimization for
        optimal search engine positioning, search engine crawler inclusion,
        creating and submitting directory listings , link popularity enhancement
        and ongoing campaign reporting and maintenance. The end result is that
        people will be able to easily find your website when searching for
        products and services related to your
        <Link to="/article/16"> business.</Link>
      </p>
      <p>
        <span>Organic or Natural Keyword Optimization</span> is critical to
        ensuring your site is organized properly and that your content, (we
        suggest at least 250 words of rich content), reflects your targeted
        keyword phrases accurately. Relevant content is key for top search
        engine rankings. We start with Title and Description Meta Tags and work through the
        on-page text content, layout and internal linking of your web pages
        to ensure proper page formatting and keyword relevancy.
      </p>
      <p>
        Organic Search Engine Optimization will increase the likelihood that
        your site will show up on a search for a particular keyword. Since over
        time a substantial amount of a client’s site traffic will result from
        search engines, optimization should be looked at as a long-term
        investment.
      </p>
      <p>
        For more information on Organic Search Engine Optimization, contact us
        at{" "}
        <a href="mailto:services@bluesmokemedia.net">
          services@bluesmokemedia.net
        </a>
        .
      </p>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/SEO/OrganicSeo"
        />

        {/* // <!-- HTML Meta Tags --> */}
        <title>Organic Search Engine Optimization</title>
        <meta
          name="description"
          content="Blue Smoke Digital and Printed Media is a Search Engine Marketing agency specializing in Organic SEO, with offices in the following cities: Erwin, TN; Johnson City, TN; Kingsport, TN; Bristol TN; Pigeon Forge, TN; Gatlinburg, TN; Sevierville, TN; Knoxville, TN; Asheville, NC; Charleston, SC; Ogden, UT; Salt Lake City, UT; Tyler, TX; Dallas, TX; Fort Worth, TX; Spokane, WA."
        />

        <meta
          name="keywords"
          content="SEO, Search Engine Optimization, SEO Marketing, Organic Search Engine Optimization, Search Engine Ranking, SEO Ranking, Organic SEO, SEO Services, Google SEO, Backlinks, SEO Site Checkup, seo website, organic search, white hat SEO, seo packages, seo website content, website optimization, afforadable seo, keyword ranking, google search engine optimization, mobile seo, seo content writing, small business seo, seo management, page ranking, search engine optimization services, website seo services, bing seo, google search engine optimization, e-commerce seo services, local search engine optimization, local search"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Organic Search Engine Optimization" />
        <meta
          itemprop="description"
          content="Blue Smoke Digital and Printed Media is a Search Engine Marketing agency specializing in Organic SEO, with offices in the following cities: Erwin, TN; Johnson City, TN; Kingsport, TN; Bristol TN; Pigeon Forge, TN; Gatlinburg, TN; Sevierville, TN; Knoxville, TN; Asheville, NC; Charleston, SC; Ogden, UT; Salt Lake City, UT; Tyler, TX; Dallas, TX; Fort Worth, TX; Spokane, WA."
        />
        <meta itemprop="image" content="../../images/seo-banner.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Organic Search Engine Optimization"
        />
        <meta
          property="og:description"
          content="Blue Smoke Digital and Printed Media is a Search Engine Marketing agency specializing in Organic SEO, with offices in the following cities: Erwin, TN; Johnson City, TN; Kingsport, TN; Bristol TN; Pigeon Forge, TN; Gatlinburg, TN; Sevierville, TN; Knoxville, TN; Asheville, NC; Charleston, SC; Ogden, UT; Salt Lake City, UT; Tyler, TX; Dallas, TX; Fort Worth, TX; Spokane, WA."
        />
        <meta property="og:image" content="../../images/seo-banner.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Organic Search Engine Optimization"
        />
        <meta
          name="twitter:description"
          content="Blue Smoke Digital and Printed Media is a Search Engine Marketing agency specializing in Organic SEO, with offices in the following cities: Erwin, TN; Johnson City, TN; Kingsport, TN; Bristol TN; Pigeon Forge, TN; Gatlinburg, TN; Sevierville, TN; Knoxville, TN; Asheville, NC; Charleston, SC; Ogden, UT; Salt Lake City, UT; Tyler, TX; Dallas, TX; Fort Worth, TX; Spokane, WA."
        />
        <meta name="twitter:image" content="../../images/seo-banner.png" />
      </Helmet>
    </div>
  );
}
