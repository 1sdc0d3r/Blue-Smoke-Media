import React from "react";
import websiteUsability from "../../images/website_design_useability.png";
//* Images
// const websiteUsability =
//   "https://blue-smoke-media.s3-us-west-1.amazonaws.com/website_design_useability.png";

export default function WebsiteUsability() {
  return (
    <div className="website-usability page-wrapper">
      <img src={websiteUsability} alt="this is the SEO" />
      <div className="content">
        <h1>Creating Your Website</h1>
        <p>
          At <span>Blue Smoke Digital Media,</span> we take website usability
          seriously. Your website is an investment that should benefit you and
          your company by helping your visitors find what they’re looking for.
          In addition to ensuring that your website is clear and easy to use,
          we’ll address issues of necessary information, speed of download, how
          information “flows” through your site, and more . Our website design
          includes solid graphic design skills, high-end programming website
          application, and cutting edge website optimization techniques. We will
          do everything you need to greatly improve your business Web presence.
          We’ll explain exactly what you do or do not need and why, and then
          we’ll do everything for you. Here are the steps we take:
        </p>
        <ul>
          <li>
            Meet with you, in person or on the phone, to learn exactly what you
            want and expect. Here we help you come up with concrete goals you
            want to achieve with the new website. We’ll discuss with you
            possible new Web services and lead generation features you can
            include and what ones you want to include from your old site.
          </li>
          <li>
            We’ll review your old website with you and determine along with you
            what features should be included or left out of the new site (read
            10 Prominent Websites Design Mistakes, article).
          </li>
          <li>
            We’ll investigate what worked and didn’t work with your old site and
            plan your new site accordingly.
          </li>
          <li>
            Assess how your current server platform is working for you. We’ll
            also assess how your site’s Web programming is performing. We’ll
            explain the different computer server platforms and languages you
            can choose from and the pros and cons of each. If you decide you
            want a new platform or technology, we’ll help you determine which to
            choose for your new site and what Web programming will be needed.
          </li>
          <li>
            We will guide you through the development of your new look & feel
            Web design (if you decide you want a new look & feel), helping you
            decide what will best communicate your business message.
          </li>
        </ul>
      </div>
    </div>
  );
}
