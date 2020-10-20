import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import seoPuzzle from "../../images/seo-puzzle.png";

export default function OrganicSeo() {
  return (
    <div className="seo-friendly page-wrapper">
      <img
        src={seoPuzzle}
        alt="Search Engine Friendly Web Design Puzzle Pieces"
        className="hero-image"
      />
      <h1>
        Search Engine Friendly Web Design
        <br />
        and Search Engine Optimization
      </h1>
      <h2>
        First, what is search engine friendly web design and search engine
        optimization?
      </h2>
      <p>
        Search engines are a major source of traffic to most websites, but many
        website owners have discovered, simply having a website does not mean
        that people will find it. Enter search engine friendly web design. In
        today’s competitive market, it isn’t just about having great meta tags
        any longer - websites must be built to rank well within the search
        engines.
      </p>
      <p>
        At <span>Blue Smoke Digital Media</span>, we know that a website’s basic{" "}
        <Link to="/article/5">search engine “friendliness” </Link>
        should, in most cases, be part of the overall design plan for a new
        website. Good search engine rankings are often crucial to the goals of
        our clients. This is why we incorporate these fundamental techniques in
        our designs as a standard part of even our most affordable packages.
      </p>
      <h4>What about high rankings in the search engines?</h4>
      <p>
        Search engines are constantly changing. Additionally, as the number of
        pages on the Web grows, some search engines drop pages in order to make
        room for more — and almost all change how they “rank” pages over time.
      </p>
      <p>
        While developing your custom designed website from the ground up,
        <span> Blue Smoke Digital Media </span>
        includes built in organic search engine optimization. This includes
        online architectural design principles carefully combining information
        delivery and intuitive navigation to satisfy the visitor’s needs.
        However, paid or not, most search engines base how high your website
        ranks on various factors. If yours meets their criteria, you’ll get a
        better ranking than the next website. As part of your website package,
        we will utilize our organic search engine friendly design methodology,
        which has been successful in gaining excellent rankings in the search
        engines.
      </p>
      <p>
        Get traffic and potential clients with a search engine friendly website.{" "}
        <Link to="/contact">
          <span id="contact">Contact us</span>{" "}
        </Link>
        today.
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
        <title>
          Search Engine Friendly Web Design and Search Engine Optimization
        </title>
        <meta
          name="description"
          content="At Blue Smoke Digital Media, we know that a website’s basic search engine “friendliness” should, in most cases, be part of the overall design plan for a new website. Good search engine rankings are often crucial to the goals of our clients. This is why we incorporate these fundamental techniques in our designs as a standard part of even our most affordable packages."
        />

        <meta
          name="keywords"
          content="social media marketing strategy, smm marketing, digital and social media marketing, social marketing agency, digital marketing solution service, digital marketing service, digital marketing company, digital marketing strategy, internet marketing, social media marketing agency, online marketing agency, content marketing agency, best digital marketing agency, top digital marketing agencies, web marketing agency, sms marketing, digital ad agency, digital marketing advertising, seo and digital marketing, online digital marketing agency, online media marketing, corporate digital marketing, online and social media marketing, digital marketing online marketing"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="Search Engine Friendly Web Design and Search Engine Optimization"
        />
        <meta
          itemprop="description"
          content="At Blue Smoke Digital Media, we know that a website’s basic search engine “friendliness” should, in most cases, be part of the overall design plan for a new website. Good search engine rankings are often crucial to the goals of our clients. This is why we incorporate these fundamental techniques in our designs as a standard part of even our most affordable packages."
        />
        <meta itemprop="image" content="../../images/seo-puzzle.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Search Engine Friendly Web Design and Search Engine Optimization"
        />
        <meta
          property="og:description"
          content="At Blue Smoke Digital Media, we know that a website’s basic search engine “friendliness” should, in most cases, be part of the overall design plan for a new website. Good search engine rankings are often crucial to the goals of our clients. This is why we incorporate these fundamental techniques in our designs as a standard part of even our most affordable packages."
        />
        <meta property="og:image" content="../../images/seo-puzzle.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Search Engine Friendly Web Design and Search Engine Optimization"
        />
        <meta
          name="twitter:description"
          content="At Blue Smoke Digital Media, we know that a website’s basic search engine “friendliness” should, in most cases, be part of the overall design plan for a new website. Good search engine rankings are often crucial to the goals of our clients. This is why we incorporate these fundamental techniques in our designs as a standard part of even our most affordable packages."
        />
        <meta name="twitter:image" content="../../images/seo-puzzle.png" />
      </Helmet>
    </div>
  );
}
