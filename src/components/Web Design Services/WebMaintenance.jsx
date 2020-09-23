import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import websiteMaintenance from "../../images/website-maintenance.jpg";

export default function WebMaintenance() {
  return (
    <div className="web-maintenance page-wrapper">
      <img
        src={websiteMaintenance}
        alt="Website Maintenance -bug fixes, updates, keyword update, content update, improper graphics."
      />
      <div className="content">
        <h1>Website Maintenance Agreements</h1>
        <p>
          <span>Blue Smoke Digital and Printed Media,</span> provides
          maintenance agreements to fit your specific maintenance needs,
          offering comprehensive website maintenance solutions to maintain your
          website. Whether your site requires an occasional update or ongoing
          weekly maintenance, we have a solution to keep your site fresh,
          up-to-date, and accurate. Our cost-effective and convenient website
          maintenance plans are designed to fit your updating needs and
          budget.With a Website Maintenance agreement, updates are normally
          completed within 24 - 48 hours of the request. This ensures that
          visitors and potential clients will receive accurate information. From
          an occasional update, to weekly and daily updates,{" "}
          <Link to="/website-design/inquiry-form">
            we would be honored to provide our services.
          </Link>
        </p>
        <h3>Option One:</h3>
        <p>
          Pay Per Incident
          <br />
          Pay for web site maintenance as it is needed. The Client pays an “as
          needed” hourly rate based on current hourly rates to be agreed upon at
          the onset of the contract.
        </p>
        <h3>Option Two:</h3>
        <p>
          Your website is checked regularly for correct functionality. Every
          month we will perform a web site maintenance check to ensure that
          pages and links are working correctly and that forms within the site
          are functioning as required. Any identified malfunctions are fixed.
          Any updates required will be made within 48 hours of the request. The
          amount of estimated services will determine the cost per month.
        </p>
      </div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/Web Design Services/WebMaintenance"
        />

        {/* // <!-- HTML Meta Tags --> */}
        <title>Website Maintenance Agreements</title>
        <meta
          name="description"
          content="Blue Smoke Digital and Printed Media, provides maintenance agreements to fit your specific maintenance needs, offering comprehensive website maintenance solutions to maintain your website."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Website Maintenance Agreements" />
        <meta
          itemprop="description"
          content="Blue Smoke Digital and Printed Media, provides maintenance agreements to fit your specific maintenance needs, offering comprehensive website maintenance solutions to maintain your website."
        />
        <meta itemprop="image" content="../../images/website-maintance.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Website Maintenance Agreements" />
        <meta
          property="og:description"
          content="Blue Smoke Digital and Printed Media, provides maintenance agreements to fit your specific maintenance needs, offering comprehensive website maintenance solutions to maintain your website."
        />
        <meta
          property="og:image"
          content="../../images/website-maintance.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Maintenance Agreements" />
        <meta
          name="twitter:description"
          content="Blue Smoke Digital and Printed Media, provides maintenance agreements to fit your specific maintenance needs, offering comprehensive website maintenance solutions to maintain your website."
        />
        <meta
          name="twitter:image"
          content="../../images/website-maintance.png"
        />
      </Helmet>
    </div>
  );
}
