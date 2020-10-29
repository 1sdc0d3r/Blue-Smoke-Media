import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [data, setData] = useState({
    business: "",
    name: "",
    email: "",
    subject: "",
    message: "",
    antiSpam: null,
  });

  const onChangeHandler = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    const templateParams = {
      business: data.business,
      reply_to: data.email,
      subject: data.subject,
      from_name: data.name,
      message_subject: data.subject,
      message_html: data.message,
    };
    if (data.antiSpam === null) {
      emailjs.send(
        "service_kys3ouv",
        "template_fd7rhre",
        templateParams,
        "user_AKrWjfONfbrIagrKBIYq0"
      );
    }

    document.querySelector(".contact span").classList.add("message-sent");
    setTimeout(() => {
      document.querySelector(".contact span").classList.remove("message-sent");
    }, 5000);

    setData({
      business: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      antiSpam: null,
    });
  };

  return (
    <>
      <section className="contact clicker">
        <h1>Contact Us</h1>
        <p>
          Effective Internet marketing and Website Design requires a staff of
          diverse disciplines. Our full-service approach will save you time and
          the added expense of discovering the missing pieces and hiring
          multiple companies to collaborate. For quick answers, accurate quotes
          and 24/7 customer service, please call{" "}
          <a href="tel:865-274-1371">865.274.1371</a> or complete the inquiry
          form below and we will contact you at a time and date that is
          convenient to you.
        </p>
        <span>Message sent successfully</span>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="business"
            placeholder="Business"
            id="business"
            value={data.business}
            onChange={onChangeHandler}
            className="field"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            value={data.name}
            onChange={onChangeHandler}
            className="field"
            required
          />
          <input
            type="text"
            name="anti-spam"
            id="anti-spam"
            value={data.antiSpam}
            onChange={onChangeHandler}
            style={{ display: "None", position: "absolute" }}
          />

          <input
            type="text"
            name="email"
            placeholder="Email Address"
            id="email"
            value={data.email}
            onChange={onChangeHandler}
            className="field"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            id="subject"
            value={data.subject}
            onChange={onChangeHandler}
            className="field"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            rows="5"
            value={data.message}
            onChange={onChangeHandler}
            className="field text"
            required
          />
          <input
            className="antiSpam"
            name="antiSpam"
            type="text"
            onChange={onChangeHandler}
            value={data.antiSpam}
            style={{ display: "none" }}
          />
          <div className="actions">
            <input type="submit" value="Send Message" id="submit-btn" />
          </div>
        </form>
      </section>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="Keywords"
          content="Knoxville,TN web design, web development, website studio, logo design, Knoxville, TN graphic design, internet visibility, web presence, search engine optimization, website maintenance, advertising agency, marketing tools, photography, website Toronto design, creative services, web presence, website development in Ogden, UT, website development in Salt Lake City,UT, website development in Spokane, WA, website development in Austin,TX, website development in Kingsport,TN, San Francisco,CA, Tampa,FL "
        />
        <meta
          name="Description"
          content="We are a Digital and Printed Media company with the following services and locations: Knoxville TN website design and development, Ogden UT graphic design, Salt Lake City UT logo and identity creation, Spokane WA search engine optimization, San Francisco CA internet marketing, Austin TX printed media photography and creative services."
        />
      </Helmet>
    </>
  );
}
