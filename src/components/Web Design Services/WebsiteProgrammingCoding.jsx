import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import coding from "../../images/programming_coding.webp";

export default function WebsiteProgrammingCoding() {
  return (
    <>
      <div className="website-programming-coding page-wrapper">
        <img
          src={coding}
          alt="Matching your business needs with the most appropriate Web technology."
          className="hero-image"
        />
        <div className="content">
          <h1>Coding and Web Programming</h1>
          <p>
            <span className="bold">Blue Smoke Digital Media, </span>will match
            your business needs with the most appropriate Web technology, and
            then we develop it for you and give you the code. We can automate
            recurring tasks that you have to pay employees to do, freeing them
            up to produce and sell more.
          </p>
          <p>
            New programming languages or software burst onto the scene and it
            often becomes difficult to know what to believe. How do you know
            what your site should be using? How do you know which technologies
            are the best to use and when? How can you keep up?
          </p>
          <p>
            Allow us to help you navigate all these issues. We can work with
            your I.T. department in developing your code or integrating
            applications as well. <Link to="/contact">Ask</Link>{" "}
            <span className="bold">Blue Smoke Digital Media</span> to be your
            Web department. It is beneficial to break down the abstract concept
            of web technology into four subsections:{" "}
            <span
              style={{
                fontStyle: "italic",
              }}
            >
              client/server model, hosting, processes and functionality, and
              databases.
            </span>
          </p>
          <h2>The programming and coding we offer:</h2>
          <ul>
            <li>
              Web application development in numerous Web programming languages
            </li>
            <li>Database creation, development and manipulation</li>
            <li>
              Dynamically database-driven web content in most popular databases
            </li>
            <li>Web form creation and lead management</li>
            <li>
              Web application development specifically for automating recurring
              employee tasks
            </li>
            <li>Transferring business processes to the web</li>
            <li>Intranet development with web services</li>
            <li>
              Consultation on existing and emerging technologies Technical
              advice and training
            </li>
            <li>Application development & Web programming for your business</li>
            <li>Consultation on database construction and integration</li>
            <li>
              Best known practices for bringing your{" "}
              <Link to="/article/17">marketing</Link> to life on the web
            </li>
          </ul>
        </div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />

          {/* <!-- Mobile Meta --> */}

          <link
            rel="canonical"
            href="https://www.bluesmokedigitalandprintedmedia.com/Web Design Services/WebsiteProgramingCoding"
          />

          {/* // <!-- HTML Meta Tags --> */}
          <title>Coding and Web Programming</title>
          <meta
            name="description"
            content="Blue Smoke Digital Media, will match your business needs with the most appropriate Web technology, and then we develop it for you and give you the code. We can automate recurring tasks that you have to pay employees to do, freeing them up to produce and sell more."
          />

          <meta
            name="keywords"
            content="coding web development,  web coding, python web programming, java web programming, web design coding, full stack coding, back end web programming, web design and coding, web developer coding, web page development using html, creating a website with javascript, creating a website using html css and javascript"
          />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemprop="name" content="Coding and Web Programming" />
          <meta
            itemprop="description"
            content="Blue Smoke Digital Media, will match your business needs with the most appropriate Web technology, and then we develop it for you and give you the code. We can automate recurring tasks that you have to pay employees to do, freeing them up to produce and sell more."
          />
          <meta
            itemprop="image"
            content="../../images/programming_coding.webp"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta
            property="og:url"
            content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Coding and Web Programming" />
          <meta
            property="og:description"
            content="Blue Smoke Digital Media, will match your business needs with the most appropriate Web technology, and then we develop it for you and give you the code. We can automate recurring tasks that you have to pay employees to do, freeing them up to produce and sell more."
          />
          <meta
            property="og:image"
            content="../../images/programming_coding.webp"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Coding and Web Programming" />
          <meta
            name="twitter:description"
            content="Blue Smoke Digital Media, will match your business needs with the most appropriate Web technology, and then we develop it for you and give you the code. We can automate recurring tasks that you have to pay employees to do, freeing them up to produce and sell more."
          />
          <meta
            name="twitter:image"
            content="../../images/programming_coding.webp"
          />
        </Helmet>
      </div>
    </>
  );
}
