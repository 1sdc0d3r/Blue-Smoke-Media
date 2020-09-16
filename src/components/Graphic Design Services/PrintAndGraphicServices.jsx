import React from "react";
import fingersCrossed from "../../images/fingers-crossed.png";
import light from "../../images/recognition-remembrance-image.png";
import respect from "../../images/respect-image.png";
import eagle from "../../images/eagle.png";
import coffeeShelf from "../../images/coffee-shelf.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
//* Images
// const fingersCrossed =
// "https://blue-smoke-media.s3-us-west-1.amazonaws.com/fingers-crossed.png";
				  {*/ todo LINKS */}

export default function PrintAndDesignGraphicServices() {
  return (
    <div className="print-and-graphic-design-services page-wrapper">
      <img src={fingersCrossed} alt="Blue Smoke Digital and Printed Media Graphic Design Experts" />

      <h1>Print and Graphic Design Services</h1>
      <div className="content">
        <p>
          Design will take an ordinary experience and turn it into a powerful
          experience, one that is not quickly forgotten. Leaving this kind of
          impression on your customer, is an integral key to success. Good
          design has power; it may be hard to measure, but there are ways to see
          the value inherent in purposeful, targeted and personal design.
        </p>
        <div className="bottom-content">
          <div className="images-left"></div>
          <div className="text-right">
            <section>
              <img src={light} loading="lazy" alt="Remembrance and Recognition - The Twin Towers Memorial Light at Night." />
              <div>
                <p>
                  <span>Recognition - </span>Who are you? What do you do? It’s
                  got to show, and it’s got to be clear. If people can recognize
                  and differentiate you from the crowd, you’re going to do
                  better than the crowd.
                </p>
                <p>
                  <span>Remembrance - </span>If they can’t remember who you were
                  or what you were about, your chances of doing business with
                  them again are probably slim. Good design will make an
                  impression on your customers or clients. They won’t forget
                  about you.
                </p>
              </div>
            </section>
            <section>
              <img src={respect} loading="lazy" alt="Man with a T-shirt that reads RESPECT!" />{" "}
              <p>
                <span>Respect - </span>Believe it or not, <Link to="123Article/Three Things You Must Do When Designing and Building Your Small Business Web site">good design</Link> is
                apparent to almost everyone. They might not know exactly why,
                but they know when something looks good. People respect design
                because it shows that you care about how you look. It’s an easy
                connection to make that if you care about how you look, you care
                just as much about your products, services and ideas. People
                will see that and respect you.
              </p>
            </section>
            <section>
              <img src={eagle} loading="lazy" alt="Eagle with handler." id="eagle" />{" "}
              <p>
                <span>Trust - </span>Respect leads to Trust and Trust is
                priceless! <Link to=""></Link>Design plays a very important part in establishing
                Trust with the people you work with. It’s not the only part, but
                it’s something that is often overlooked as unnecessary, or not
                worth the expense. It is worth it; you want to give your client
                the right impression.
              </p>
            </section>
            <section>
              <img
                src={coffeeShelf}
                loading="lazy"
                alt="Small Business and Corporate Branding"
                id="coffeeShelf"
              />
              <p>
                An appropriate brochure, business card, logo or any printed
                media is a necessity when it comes to spreading the word about
                your company. And “appropriate” might mean the use of a burlap
                envelope, a tipped-on photo, or a cinnamon-stick binding — it
                all depends on your industry and your objectives. We get to know
                you and what you do to be sure that your literature conveys an
                accurate image. Every project at{" "}
				  {*/ todo LINK */}
                <span>Blue Smoke Digital and Printed Media,</span> is <Link to="123Article/Website Manifestation - 7 Steps to a Successful Web Site">custom
                designed</Link> to your digital or graphic media needs, specifically to
                address the individual challenges of each project we work on.
                Whether it’s the introduction of a product or service, a new
                corporate identity, or a 
				  				  {*/ todo LINK */}<Link to="123Article/Attract Targeted Local Customers With Online Marketing">one-of-a-kind promotion</Link> you have our
                guarantee that it will be unique.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/#/website-design/PrintAndGraphicServices"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Print and Graphic Design Services</title>
        <meta
          name="description"
          content="Every project at Blue Smoke Digital and Printed Media, is custom designed to your digital or graphic media needs, specifically to address the individual challenges of each project we work on. "
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Print and Graphic Design Services" />
        <meta
          itemprop="description"
          content="Every project at Blue Smoke Digital and Printed Media, is custom designed to your digital or graphic media needs, specifically to address the individual challenges of each project we work on. "
        />
        <meta itemprop="image" content="../../images/fingers-crossed.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Print and Graphic Design Services" />
        <meta
          property="og:description"
          content="Every project at Blue Smoke Digital and Printed Media, is custom designed to your digital or graphic media needs, specifically to address the individual challenges of each project we work on. "
        />
        <meta property="og:image" content="../../images/fingers-crossed.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Print and Graphic Design Services"
        />
        <meta
          name="twitter:description"
          content="Every project at Blue Smoke Digital and Printed Media, is custom designed to your digital or graphic media needs, specifically to address the individual challenges of each project we work on. "
        />
        <meta name="twitter:image" content="../../images/fingers-crossed.png" />
      </Helmet>
    </div>
  );
}
