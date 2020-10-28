import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import help1 from "../images/help-icon-1.webp";
import help2 from "../images/help-icon-2.webp";
import help3 from "../images/help-icon-3.webp";

export default function Help() {
  return (
    <>
      <Carousel />
      <h1>Need Help?</h1>

      <section className="help">
        <h1>
          In case you <span>Need help</span>
        </h1>
        <div className="help-card-container">
          <div className="help-card">
            <img src={help1} alt="placeholder" />
            <h3>Have a Question?</h3>
            <p>
              No business is too small for a website, but creating and
              maintaining a website can be daunting. How do you know what to put
              on your website? What color should the buttons be? What does “SEO”
              mean? With so many questions, it can be difficult to focus on what
              matters.
              <br />
              <br />
              <span>Click on our chat button</span> and we will gladly answer
              any questions you may have regarding Blue Smoke Digital and
              Printed Media.
            </p>
          </div>
          <div className="help-card">
            <img src={help2} alt="placeholder" />
            <h3>Need Support?</h3>
            <p>
              Ready to get your site updated or build a new website? Starting a
              website for your business is a low-cost investment that will help
              you to both establish credibility and reach a wider customer base
              through digital marketing techniques. If you keep your website
              updated with fresh, current content and are quick to address
              technical issues, you’ll never have to worry about “not existing”
              to your current and future clients. Still have a couple lingering
              questions? Talk to our team, we will answer your questions and
              point you in the right direction.
            </p>
          </div>
          <div className="help-card">
            <img src={help3} alt="placeholder" />
            <h3>
              Digital Reputation
              <br />
              Management
            </h3>
            <p>
              “Identity will be the most valuable commodity for citizens in the
              future, and it will exist primarily online.” <br />
              <span>— Eric Schmidt</span>
              <br />
              <br />
              “Decisions to buy or not buy from a company have increasingly less
              to do with place, packaging, or promotion and almost everything to
              do with how much your friends, family, and even strangers provide
              online assurance that the product or service is worth the cost.”
              <br />
              <span>— Elaine Cheng</span>
              <br />
              <br />
              We interact with friends, family, and colleagues largely through
              text messages, email, and{" "}
              <Link to="/social-media">social media</Link>, where perception and
              reality are often confused. So both digital and in-person first
              impressions are critical!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
