import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import slide_seo from "../images/seo_file.png";
import slide_custom from "../images/custom_website_design.png";
import slide_sm from "../images/social_media.png";
import slide_graphic from "../images/graphic_design.png";
const cover = lazy(() => import("../images/now-open-cover.png"));

const socialMedia =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Now-open-video_HD720.mp4";
//LINKS
export default function Home() {
  return (
    <div className="home">
      <section className="globe">
        <div>
          <h1>
            Blue Smoke Digital and
            <br />
            Printed Media
          </h1>
          <br />
          produces a growing roster of local, regional and national clients
          ranging from one-person companies, small and medium sized business to
          non-profit organizations. Our websites are fast loading,
          <Link to="/seo/seoOrganic">
            {" "}
            Organically Search Engine Optimized,
          </Link>{" "}
          visually appealing, and easy to navigate.
          <p>
            What do your customers see... <span>Are You SURE??</span>
          </p>
        </div>
      </section>
      <section className="social-media">
        <div className="content">
          <h1>Social Media</h1>
          <video
            title="Social-Media-Vid"
            id="sm-video"
            alt="Video of Services by Blue Smoke Digital and Printed Media"
            type="video/mp4"
            src={socialMedia}
            preload="none"
            poster={cover}
            controls
          />

          <h2>Emerging Social Media Channels and Trends</h2>
          <p>
            <span>Social media trends are like friends, they come and go.</span>{" "}
            However, the best friends and trends usually end up sticking around
            and evolving into a permanent part of our lives with qualities such
            as integrity, dependability, trust, quality and even ROI.
          </p>
          <h2>Video Crushes It</h2>
          <p>
            More than 28% of users from four major social media platforms engage
            with live streams each month on any one of these services. “Video is
            the hottest platform on the planet right now and the cheapest to
            distribute through social media,” said{" "}
            <a href="https://www.mattjohnstononline.com/">
              Matt Johnston, CEO, and Founder
            </a>{" "}
            of Guide Social, an exclusive video marketing agency that
            experienced a 400 percent growth spurt in the last six months. “A
            reminder to brands, video does NOT have to be expensively produced
            to be effective.”
          </p>
          <p>
            Daily Activity Almost 3.5 billion social media users worldwide
            coexist with devices.
          </p>
          <Link to="/social-media">Learn More</Link>
        </div>
        {/* <img src={socialMedia} alt="social media globe" /> */}
      </section>

      <section className="services">
        <h1>
          <span>Our </span>Services
        </h1>
        <p className="sub-text">
          If you should need a service not offered on our site, PLEASE do not
          hesitate to call us.
          <br /> We will make every effort to help you - and if we cannot, we
          will do our very best to find someone who can!
        </p>
        <div className="services-card-container">
          <div className="service-card">
            <img src={slide_custom} alt="placeholder" />
            <h3>Custom Website Design</h3>
            <p>
              Custom website design is a process because so much goes into it,
              but businesses get a lot more out of it over the long term.{" "}
              <Link to="/article/1"> Custom-made websites </Link> look better,
              do more, and accomplish specific business goals.
            </p>
          </div>
          <div className="service-card">
            <img src={slide_seo} alt="Search Engine Optimization" />
            <h3>Search Engine Optimization (SEO)</h3>
            <p>
              Making a website <Link to="/article/5">SEO friendly</Link> means
              that Google and other search engines can crawl each page on the
              website efficiently, interpret the content effectively, and index
              it in their database. Once indexed, they can then serve the most
              relevant and valuable web pages to their users based on the topics
              they search for.
            </p>
          </div>
          <div className="service-card">
            <img src={slide_graphic} alt="Digital and Printed Graphic Design" />
            <h3>Digital and Printed Graphic Design</h3>
            <p>
              The question of engagement in{" "}
              <Link to="/graphic-design/digital-and-print-graphic-design">
                digital and printed design
              </Link>{" "}
              is oriented mostly around how and where a viewer will encounter
              the work. The Blue Smoke Media <Link to="/team">team,</Link> are
              responsible for the design and layout of interactive and printed
              informational materials such as:{"  "}
              <span>
                Websites, Brochures, Advertising Flyers, Billboards, and
                Business Cards.
              </span>
            </p>
          </div>
          <div className="service-card">
            <img src={slide_sm} alt="Social Media and Internet Marketing" />
            <h3>Social Media and Internet Marketing</h3>
            <p>
              It’s crucial you determine which platforms you’re going to share
              your content on. There’s not necessarily a right or wrong answer
              when it comes to which <Link to="/article/8">social media </Link>
              channels your business should use — it’s more about the needs of
              your target audience and where they tend to spend their time.
            </p>
          </div>
        </div>
      </section>
      <section className="plans-pricing">
        <h1>
          <span>Our </span>Plans & Pricing
        </h1>
        <p className="sub-text">
          (All prices may be subject to change without
          <br />
          notice, unless under contract.)
        </p>
        <div className="plans-card-container">
          <div className="plan-card-set">
            <div className="plan-card">
              <h3>
                5 Page
                <br />
                Website
              </h3>
              <h6>Includes Organic SEO</h6>
              <hr className="line" />
              <p>Starts At</p>
              <p className="price">$849</p>
              <Link to="/plans">View Plans</Link>
            </div>
            <div className="plan-card">
              <h3>
                6-10 Page
                <br />
                Website
              </h3>
              <h6>Includes Organic SEO</h6>
              <hr className="line" />
              <p>Starts At</p>
              <p className="price">$1,449</p>
              <Link to="/plans">View Plans</Link>
            </div>
          </div>
          <div className="plan-card-set">
            <div className="plan-card">
              <h3>
                11-15+ Page
                <br />
                Website
              </h3>
              <h6>Includes Organic SEO</h6>
              <hr className="line" />
              <p>Starts At</p>
              <p className="price">$2,249</p>
              <Link to="/plans">View Plans</Link>
            </div>
            <div className="plan-card">
              <h3>
                E-Commerce
                <br />
                Website
              </h3>
              <h6>
                Includes Organic SEO
                <br /> Price is for 5 pages and 10 items.
              </h6>
              <hr className="line" />
              <p>Starts At</p>
              <p className="price">$1,749</p>
              <Link to="/plans">View Plans</Link>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* <!-- Mobile Meta --> */}

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>
          Blue Smoke Digital and Printed Media is an online Digital company
          specializing in Custom Designed Websites with Organic SEO built into
          your site at NO EXTRA COST, a Digital and Printed Media company and
          Social Media Marketing company.
        </title>

        <meta
          name="keywords"
          content="custom website design, website design useability, graphic design, website application, website optimization, web design, website design and development, e-commerce development, web design and development company, e-commerce website development company, web graphic design, custom web design services, best website development company, web design company near me, custom website creation"
        />

        <meta
          name="description"
          content="Blue Smoke Digital and Printed Media is a full-service marketing agency. We partner with clients to either supplement their in-house marketing department or serve as their full outsourced marketing department. Our areas of expertise include Website Design, Branding, Graphic Design, Online Marketing and Traditional Marketing, Social Media Marketing, and Reputation Management and Review. We are located in TN, UT, FL, NC, SC, VA, ID and WA."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Blue Smoke Digital and Printed Media" />
        <meta
          itemprop="description"
          content="Blue Smoke Digital and Printed Media is a full-service marketing agency. We partner with clients to either supplement their in-house marketing department or serve as their full outsourced marketing department. Our areas of expertise include Website Design, Branding, Graphic Design, Online Marketing and Traditional Marketing, Social Media Marketing, and Reputation Management and Review. We are located in TN, UT, FL, NC, SC, VA, ID and WA."
        />
        <meta itemprop="image" content="../images/Web-Development.jpg" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blue Smoke Digital and Printed Media is an online Digital company specializing in Custom Designed Websites with Organic SEO built into your site at NO EXTRA COST, a Digital and Printed Media company and Social Media Marketing company."
        />
        <meta
          property="og:description"
          content="Blue Smoke Digital and Printed Media is a full-service marketing agency. We partner with clients to either supplement their in-house marketing department or serve as their full outsourced marketing department. Our areas of expertise include Website Design, Branding, Graphic Design, Online Marketing and Traditional Marketing, Social Media Marketing, and Reputation Management and Review. We are located in TN, UT, FL, NC, SC, VA, ID and WA."
        />
        <meta property="og:image" content="../images/Web-Development.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blue Smoke Digital and Printed Media is an online Digital company specializing in Custom Designed Websites with Organic SEO built into your site at NO EXTRA COST, a Digital and Printed Media company and Social Media Marketing company."
        />
        <meta
          name="twitter:description"
          content="Blue Smoke Digital and Printed Media is a full-service marketing agency. We partner with clients to either supplement their in-house marketing department or serve as their full outsourced marketing department. Our areas of expertise include Website Design, Branding, Graphic Design, Online Marketing and Traditional Marketing, Social Media Marketing, and Reputation Management and Review. We are located in TN, UT, FL, NC, SC, VA, ID and WA."
        />
        <meta name="twitter:image" content="../images/Web-Development.jpg" />
      </Helmet>
    </div>
  );
}
