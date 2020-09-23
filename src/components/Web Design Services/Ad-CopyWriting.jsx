import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import AdCopyWritingImg from "../../images/ad-copy-writing-image.png";

export default function AdCopyWriting() {
  return (
    <div className="ad-copy-writing page-wrapper">
      <img
        src={AdCopyWritingImg}
        alt="Creating copy that will allow your clients to envision your product or service."
      />
      <div className="content">
        <h1>
          Writing Compelling Ad Copy for Your <br />
          Business Website
        </h1>
        <p>
          No one sets out to <Link to="/article/15">write</Link> boring copy for
          their Website, but start clicking around, and you will find plenty of
          bad copy Here are some useful tips that will help you turn your
          existing Website content into compelling copy. The overall aim is to
          give your customers enough information, properly presented and
          illustrated, to enable them to choose your company, your product or
          service.
        </p>
        <p>
          <span className="orange">1. Step back from your site.</span> Many site
          owners are too close to their products to describe them effectively.
          You can begin to lose sight of what makes your product different, and
          how you can describe how they will benefit someone. While you may
          think that a certain feature is extremely obvious and needs no
          description, someone who has never seen the same product may not
          understand this. <span>Blue Smoke Digital Media</span> will help you
          take that “step back” and analyze your site making recommendations
          about any potential need for change.
        </p>
        <p>
          <span className="orange"> 2. Use psychology.</span> People often make
          purchases because they{" "}
          <Link to="/article/8">
            believe the item will make them feel better or make their lives
            easier.
          </Link>{" "}
          How can your product or service benefit someone? Make a list of the
          different benefits that your product can offer and then use these
          points in your copy.
        </p>
        <p>
          <span className="orange">3. Keep it brief.</span>{" "}
          <span>Blue Smoke Digital Media</span> will help you decide what the
          critical points are, present the information is an accessible manner.
          Short sentences, bulleted lists, and other ways that don’t overwhelm
          your visitors are just a few of the suggestions we might purpose.
        </p>
        <p>
          Compelling copy is essential for online businesses. Your customers
          will not be able to physically see or touch the items that they are
          going to buy. You need to help them by creating copy that will allow
          them to picture how a product or service will help them and encourages
          them to buy. <span>Blue Smoke Digital Media</span> will help you
          inform your customers about a product,{" "}
          <Link to="/article/3">use quality website ad copy</Link> to show them
          how it will work or how it can improve their lives.
        </p>
      </div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/#/website-design/Ad-CopyWriting"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Writing Compelling Ad Copy for Your Business Website</title>
        <meta
          name="description"
          content="Compelling copy is essential for online businesses. Your customers will not be able to physically see or touch the items that they are going to buy. You need to help them by creating copy that will allow them to picture how a product or service will help them and encourages them to buy"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="Writing Compelling Ad Copy for Your Business Website"
        />
        <meta
          itemprop="description"
          content="Compelling copy is essential for online businesses. Your customers will not be able to physically see or touch the items that they are going to buy. You need to help them by creating copy that will allow them to picture how a product or service will help them and encourages them to buy"
        />
        <meta
          itemprop="image"
          content="../../images/ad-copy-writing-image.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Writing Compelling Ad Copy for Your Business Website"
        />
        <meta
          property="og:description"
          content="Compelling copy is essential for online businesses. Your customers will not be able to physically see or touch the items that they are going to buy. You need to help them by creating copy that will allow them to picture how a product or service will help them and encourages them to buy"
        />
        <meta
          property="og:image"
          content="../../images/ad-copy-writing-image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Writing Compelling Ad Copy for Your Business Website"
        />
        <meta
          name="twitter:description"
          content="Compelling copy is essential for online businesses. Your customers will not be able to physically see or touch the items that they are going to buy. You need to help them by creating copy that will allow them to picture how a product or service will help them and encourages them to buy"
        />
        <meta
          name="twitter:image"
          content="../../images/ad-copy-writing-image.png"
        />
      </Helmet>
    </div>
  );
}
