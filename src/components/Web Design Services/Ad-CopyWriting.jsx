import React from "react";
import AdCopyWritingImg from "../../images/ad-copy-writing-image.png";
//* Images
// const AdCopyWritingImg =
//   "https://blue-smoke-media.s3-us-west-1.amazonaws.com/ad-copy-writing-image.png";

export default function AdCopyWriting() {
  return (
    <div className="ad-copy-writing page-wrapper">
      <img src={AdCopyWritingImg} alt="this is the SEO" />
      <div className="content">
        <h1>
          Writing Compelling Ad Copy for Your <br />
          Business Website
        </h1>
        <p>
          No one sets out to write boring copy for their Web site,but start
          clicking around, and you will find plenty of bad copy Here are some
          useful tips that will help you turn your existing Web site content
          into compelling copy. The overall aim is to give your customers enough
          information, properly presented and illustrated, to enable them to
          choose your company, your product or service.
        </p>
        <p>
          <span className="orange">1. Step back from your site.</span> Many site
          owners are too close to their products to describe them effectively.
          You can begin to lose sight of what makes your product different, and
          how you can describe how they will benefit someone. While you may
          think that a certain feature is extremely obvious and needs no
          description, someone who has never seen the same product may not
          understand this. <span>Blue Smoke Media</span> will help you take that
          “step back” and analyze your site making recommendations about any
          potential need for change.
        </p>
        <p>
          <span className="orange"> 2. Use psychology.</span> People often make
          purchases because they believe the item will make them feel better or
          make their lives easier. How can your product or service benefit
          someone? Make a list of the different benefits that your product can
          offer and then use these points in your copy.
        </p>
        <p>
          <span className="orange">3. Keep it brief.</span>{" "}
          <span>Blue Smoke Media</span> will help you decide what the critical
          points are, present the information is an accessible manner. Short
          sentences, bulleted lists, and other ways that don’t overwhelm your
          visitors are just a few of the suggestions we might purpose.
        </p>
        <p>
          Compelling copy is essential for online businesses. Your customers
          will not be able to physically see or touch the items that they are
          going to buy. You need to help them by creating copy that will allow
          them to picture how a product or service will help them and encourages
          them to buy. <span>Blue Smoke Media</span> will help you inform your
          customers about a product, use quality website ad copy to show them
          how it will work or how it can improve their lives.
        </p>
      </div>
    </div>
  );
}
