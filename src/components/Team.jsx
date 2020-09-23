import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Data
import team from "../data/team";
//* Images
import languages from "../images/Coding-Web-Development.jpg";
const womanStudio =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/graphic-design-video-MTT.mp4";
const globeVid =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/local-regional-nationalClients-MTT-globe.mp4";
const seoVid =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/SEO-search-engine-optimization-MTT.mp4";

export default function Team() {
  return (
    <div className="team page-wrapper">
      <section className="team-top">
        <h1>Meet Our Team</h1>
        <p> 
          <span>Blue Smoke Digital and Printed Media,</span> was founded
          in 2019, by a group of talented individuals with a combined 35 years of programming,
          graphic design, search engine optimization, and sales and marketing experience. Each <span>Blue 
          Smoke Digital Media</span> team member is a student or graduate of{" "}
          <a
            href="https://lambdaschool.com/"
            rel="nofollow noopener noreferrer"
          >
            Lambda School.
          </a>
        </p>
      </section>
      <section className="team-middle">
        <div>
          <video
            type="video/mp4"
            src={womanStudio}
            alt="Video of a woman in her studio painting"
            preload="auto"
            autoPlay
            loading="lazy"
            loop
          ></video>
          <p>
            The <span>Blue Smoke Digital and Printed Media</span> design staff
            consists of graphic designers, web designers,{" "}
            <Link to="/graphic-design/website-logo-design">logo designers</Link>
            , and usability experts versed in the latest up to date design
            standards.
          </p>
        </div>
        <div>
          <img
            src={languages}
            alt="Man pointing to programming languages, marketing and design programs"
          />
          <p>
            The <span>Blue Smoke Digital Media</span>{" "}
            <Link to="/website-design/coding">
              Full-Stack and Front-End developers
            </Link>{" "}
            are proficient in, but not limited to the following languages: HTML5
            • CSS3 • SASS • Tailwind • Bootstrap • JSON • Javascript • Python •
            React • Redux • NodeJS • Express • REST • SQL • SQLite • Postgres •
            UI/UX • Github • Testing (Jest • Cypress) • Computer Science
          </p>
        </div>
        <div>
          {/* <img src={globe} alt="alternation" /> */}
          <video
            type="video/mp4"
            src={seoVid}
            alt="Video of how SEO can act like a lightbulb moment going off on your website."
            preload="auto"
            autoPlay
            loading="lazy"
            loop
          ></video>
          <p>
            "The <span>Blue Smoke Digital Media</span> marketing staff consists
            of search engine optimization (SEO) specialists, copywriters,
            Corporate Branding specialists, publicists, and{" "}
            <Link to="/social-media">Social Media marketing</Link> experts."
          </p>
        </div>
        <div>
          <video
            type="video/mp4"
            src={globeVid}
            alt="Video of a digital spinning globe. "
            preload="auto"
            autoPlay
            loading="lazy"
            loop
          ></video>
          <p>
            <span> Blue Smoke Digital and Printed Media,</span> enjoys a growing
            roster of local, regional and national clients ranging from one -
            person companies, small and medium sized business to non - profit
            organizations.
          </p>
        </div>
      </section>
      <section className="team-bottom">
        <p>
          At<span> Blue Smoke Digital and Printed Media,</span> our product is
          built on appealing, solid websites and{" "}
          <Link to="/graphic-design/digital-and-print-graphic-design">
            graphic design
          </Link>
          , that represents the client while appealing to their customers. We
          will always remember that we are a service company. Each and every
          customer is valued as we will work to earn our customers’ trust and
          loyalty. And more than simply responding to customer needs, we will
          work to anticipate them - With unquestionable honesty, fairness and
          respect.
        </p>
        {teamMembers(team)}
      </section>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/Components/Team"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Meet the Team of Blue Smoke Digital and Printed Media</title>
        <meta
          name="description"
          content="Blue Smoke Digital and Printed Media, a company founded in 2019, was formed by a cooperative interaction of talented individuals from a variety of disciplines, with a combined 35 years of programming, graphic design, search engine optimization, and sales experience. Each Blue Smoke Media team member is a student or graduate of Lambda School."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="Meet the Team of Blue Smoke Digital and Printed Media"
        />
        <meta
          itemprop="description"
          content="Blue Smoke Digital and Printed Media, a company founded in 2019, was formed by a cooperative interaction of talented individuals from a variety of disciplines, with a combined 35 years of programming, graphic design, search engine optimization, and sales experience. Each Blue Smoke Media team member is a student or graduate of Lambda School."
        />
        <meta itemprop="image" content="../images/Coding-Web-Development.jpg" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Meet the Team of Blue Smoke Digital and Printed Media"
        />
        <meta
          property="og:description"
          content="Blue Smoke Digital and Printed Media, a company founded in 2019, was formed by a cooperative interaction of talented individuals from a variety of disciplines, with a combined 35 years of programming, graphic design, search engine optimization, and sales experience. Each Blue Smoke Media team member is a student or graduate of Lambda School."
        />
        <meta
          property="og:image"
          content="../images/Coding-Web-Development.jpg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Meet the Team of Blue Smoke Digital and Printed Media"
        />
        <meta
          name="twitter:description"
          content="Blue Smoke Digital and Printed Media, a company founded in 2019, was formed by a cooperative interaction of talented individuals from a variety of disciplines, with a combined 35 years of programming, graphic design, search engine optimization, and sales experience. Each Blue Smoke Media team member is a student or graduate of Lambda School."
        />
        <meta
          name="twitter:image"
          content="../images/Coding-Web-Development.jpg"
        />
      </Helmet>
    </div>
  );
}

function teamMembers(team) {
  return team.map((member) => (
    <div className="member">
      <img src={member.img} loading="lazy" alt="profile img" />
      <p>
        <span>{member.name}</span>
        {"  "}
        {member.description}
      </p>
    </div>
  ));
}
