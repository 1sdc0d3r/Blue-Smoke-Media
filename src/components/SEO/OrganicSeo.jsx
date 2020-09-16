import React from "react";
import seoBanner from "../../images/seo-banner.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// const seoBanner =
// "https://blue-smoke-media.s3-us-west-1.amazonaws.com/seo-banner.png";

export default function OrganicSeo() {
  return (
    <div className="organic-seo page-wrapper">
      <img src={seoBanner} alt="Organic Search Engine Optimization Banner" />
      <h2>Organic Search Engine Optimization</h2>
      <p>
        {/* <!-- //todo link --> */}
        Organic search engine optimization{" "}
        <Link to="">
          (see “what is organic search and how it can help your company),
        </Link>{" "}
        also referred to as traditional search engine optimization, is the
        process of enhancing your web site with the goal of increasing your
        visibility in the top search engines when specific keywords or phrases
        are searched for. The overall process involves a variety of aspects
        including keyword analysis and selection, web site optimization for
        optimal search engine positioning, search engine crawler inclusion,
        creating and submitting directory listings , link popularity enhancement
        and ongoing campaign reporting and maintenance. The end result is that
        people will be able to easily find your web site when searching for
        products and services related to your business.
      </p>
      <p>
        <span>Organic or Natural Keyword Optimization</span> is critical to
        ensuring your site is organized properly and that your content, (we
        suggest at least 250 words of rich content), reflects your target
        keyword phrases accurately. Relevant content is key for top search
        engine rankings. We start with Title and Meta Tags and work through the
        on-page text content and layout and internal linking of your web pages
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
        <a href="mailto:info@BlueSmokeDigitalMedia.com">
          info@BlueSmokeDigitalMedia
        </a>
        .
      </p>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/#/SEO/OrganicSeo"
        />

        {/* // <!-- HTML Meta Tags --> */}
        <title>Organic Search Engine Optimization</title>
        <meta
          name="description"
          content="Organic search engine optimization also referred to as traditional search engine optimization, is the process of enhancing your web site with the goal of
increasing your visibility in the top search engines when specific keywords or phrases are searched for."
        />

        <meta
          name="keywords"
          content="social media marketing strategy, smm marketing, digital and social media marketing, social marketing agency, digital marketing solution service, digital marketing service, digital marketing company, digital marketing strategy, internet marketing, social media marketing agency, online marketing agency, content marketing agency, best digital marketing agency, top digital marketing agencies, web marketing agency, sms marketing, digital ad agency, digital marketing advertising, seo and digital marketing, online digital marketing agency, online media marketing, corporate digital marketing, online and social media marketing, digital marketing online marketing"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Organic Search Engine Optimization" />
        <meta
          itemprop="description"
          content="Organic search engine optimization also referred to as traditional search engine
optimization, is the process of enhancing your web site with the goal of
increasing your visibility in the top search engines when specific keywords
or phrases are searched for."
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
          content="Organic search engine optimization  also referred to as traditional search engine
optimization, is the process of enhancing your web site with the goal of
increasing your visibility in the top search engines when specific keywords
or phrases are searched for."
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
          content="Organic search engine optimization  also referred to as traditional search engine optimization, is the process of enhancing your web site with the goal of increasing your visibility in the top search engines when specific keywords or phrases are searched for."
        />
        <meta name="twitter:image" content="../../images/seo-banner.png" />
      </Helmet>
    </div>
  );
}
