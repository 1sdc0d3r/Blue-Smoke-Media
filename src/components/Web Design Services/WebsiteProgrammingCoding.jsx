import React from "react";
import coding from "../../images/programming_coding.png";
//* Images
// const coding =
//   "https://blue-smoke-media.s3-us-west-1.amazonaws.com/programming_coding.png";

export default function WebsiteProgrammingCoding() {
  return (
    <>
      <div className="website-programming-coding page-wrapper">
        <img src={coding} alt="this is the SEO" />
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
            applications as well. Ask{" "}
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
              Best known practices for bringing your marketing to life on the
              web
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
