import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import logoDesign from "../../images/Website-logo-design-services.png";

export default function WebsiteLogoDesign() {
  return (
    <div className="website-logo-design page-wrapper">
      <img
        src={logoDesign}
        alt="Professionally Designed Branded Logos"
        className="hero-image"
      />
      <div className="content">
        <h1>Custom Designed Website Logos</h1>
        <p>
          Websites without a logo look incomplete — and miss on an important
          “branding” opportunity — while logos that do not look professional
          simply convey a poor impression.
        </p>
        <p>
          With your professionally-designed logo on every page, your customers
          will know that they’ve arrived at your website. Your website will look
          uniform and consistent, and your logo will remind potential new
          customers of your company — on every page.
        </p>
        <p>
          If you already have a <Link to="/article/4">custom designed printed logo</Link>, we can
          prepare it for usage on the Web, helping to bring your offline message
          and branding to your online presence — and identify your website to
          your customers.
        </p>
        <p>
          We specialize in aesthetic, one-of-a-kind logos that say what you do.
          We use <Link to="/team">state-of-the-art graphics programs</Link> to
          translate your logo into Web formats, cutting down on “download” time
          as much as possible while retaining the quality of the image.
        </p>
        <p>
          If <span>Blue Smoke Digital and Printed Media</span> is designing your
          website, we can design it around the look and feel of your logo,
          arriving at a cohesive balance and color scheme that just “looks
          right”.
        </p>
      </div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/website-design/WebsiteLogoDesign"
        />

        {/* // <!-- HTML Meta Tags --> */}
        <title>Website Logo Design</title>
        <meta
          name="description"
          content="Blue Smoke Digital and Printed Media is a Digital and Printed Media agency specializing in custom website logo designs, with offices in the following cities: Erwin, TN; Johnson City, TN; Kingsport, TN; Bristol TN; Pigeon Forge, TN; Gatlinburg, TN; Sevierville, TN; Knoxville, TN; Asheville, NC; Charleston, SC; Ogden, UT; Salt Lake City, UT; Tyler, TX; Dallas, TX; Fort Worth, TX; Spokane, WA."
        />

        <meta
          name="keywords"
          content="Logo Design; Branding; Corporate Branding; Custom Logo Design; Logo; Logo Online; Company Logo; Logo design online; business logo design; custom logo; logo design knoxville; logo design firm in knoxville tn; logo design tennessee; graphic design firm tennessee; graphic design knoxville tn; custom graphic in tennessee; graphic design tennessee; graphic design knoxville; custom logo design Spokane WA; custom logo design Tampa, FL; custom logo design Ogden UT; custom logo design Tri-cities TN"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Website Logo Design" />
        <meta
          itemprop="description"
          content="Blue Smoke Digital and Printed Media specializes in aesthetic, one-of-a-kind custom designed logos that say what you do. We use state-of-the-art graphics programs to translate your logo into Web formats, cutting down on “download” time as much as possible while retaining the quality of the image."
        />
        <meta
          itemprop="image"
          content="../../images/Website-logo-design-services.png.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Website Logo Design" />
        <meta
          property="og:description"
          content="Blue Smoke Digital and Printed Media specializes in aesthetic, one-of-a-kind custom designed logos that say what you do. We use state-of-the-art graphics programs to translate your logo into Web formats, cutting down on “download” time as much as possible while retaining the quality of the image."
        />
        <meta
          property="og:image"
          content="../../images/Website-logo-design-services.png.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Logo Design" />
        <meta
          name="twitter:description"
          content="Blue Smoke Digital and Printed Media specializes in aesthetic, one-of-a-kind custom designed logos that say what you do. We use state-of-the-art graphics programs to translate your logo into Web formats, cutting down on “download” time as much as possible while retaining the quality of the image."
        />
        <meta
          name="twitter:image"
          content="../../images/Website-logo-design-services.png"
        />
      </Helmet>
    </div>
  );
}
