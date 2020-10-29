import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [data, setData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    time: "",
    customWebDesign: false,
    reDesignUpdate: false,
    eCommerce: false,
    adCopy: false,
    webMaintenance: false,
    seo: false,
    printLogo: false,
    webLogo: false,
    blog: false,
    printedMedia: false,
    antiSpam: null,
  });

  const onChangeHandler = (evt) => {
    if (evt.target.type === "checkbox") {
      setData({
        ...data,
        [evt.target.name]: !data[evt.target.name],
      });
    } else {
      setData({
        ...data,
        [evt.target.name]: evt.target.value,
      });
    }
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    const templateParams = {
      company: data.company,
      from_name: data.name,
      reply_to: data.email,
      phone: data.phone,
      website_url: data.website,
      time: data.time,
      customWebDesign: data.customWebDesign,
      reDesignUpdate: data.reDesignUpdate,
      eCommerce: data.eCommerce,
      adCopy: data.adCopy,
      webMaintenance: data.webMaintenance,
      seo: data.seo,
      printLogo: data.printLogo,
      webLogo: data.webLogo,
      blog: data.blog,
      printedMedia: data.printedMedia,
    };

    if (data.antiSpam === null) {
      emailjs.send(
        "service_kys3ouv",
        "template_x9c27y2",
        templateParams,
        "user_AKrWjfONfbrIagrKBIYq0"
      );
    }

    document.querySelector(".inquiryForm span").classList.add("message-sent");
    setTimeout(() => {
      document
        .querySelector(".inquiryForm span")
        .classList.remove("message-sent");
    }, 5000);

    resetHandler();
  };

  const resetHandler = () => {
    setData({
      company: "",
      name: "",
      email: "",
      phone: "",
      website: "",
      time: "",
      customWebDesign: false,
      reDesignUpdate: false,
      eCommerce: false,
      adCopy: false,
      webMaintenance: false,
      seo: false,
      printLogo: false,
      webLogo: false,
      blog: false,
      printedMedia: false,
    });
  };

  return (
    <>
      {" "}
      <div className="inquiryForm">
        <h1>Inquiry Form</h1>
        <span>Message sent successfully</span>
        <p>
          To receive more information about our company, services,
          industry-specific recent projects and case studies, please fill out
          the form below.
        </p>
        <form onSubmit={onSubmitHandler}>
          <div className="left">
            <label for="company">
              Company:
              <input
                type="text"
                name="company"
                id="company"
                value={data.company}
                onChange={onChangeHandler}
              />
            </label>
            <label for="name">
              Name:
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={onChangeHandler}
                required
              />
            </label>
            <label for="email">
              Email:
              <input
                type="text"
                name="email"
                id="email"
                value={data.email}
                onChange={onChangeHandler}
                required
              />
            </label>
            <label for="phone">
              Contact Number:
              <input
                type="text"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={onChangeHandler}
              />
            </label>
            <label for="website">
              Website URL:
              <input
                type="text"
                name="website"
                id="website"
                value={data.website}
                onChange={onChangeHandler}
              />
            </label>
            <div className="time">
              <label for="time">Best Time to be Reached: </label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="time"
                    className="radio"
                    value="morning"
                    onChange={onChangeHandler}
                  />
                  Morning
                </label>
                <label>
                  <input
                    type="radio"
                    name="time"
                    className="radio"
                    value="afternoon"
                    onChange={onChangeHandler}
                  />
                  Afternoon
                </label>
                <label>
                  <input
                    type="radio"
                    name="time"
                    className="radio"
                    value="evening"
                    onChange={onChangeHandler}
                  />
                  Evening
                </label>
              </div>
            </div>
          </div>
          <h3>Interested in:</h3>
          <div className="right">
            <label for="customWebDesign">
              <input
                name="customWebDesign"
                type="checkbox"
                checked={data.customWebDesign}
                onChange={onChangeHandler}
              />{" "}
              <span class="check-mark"></span>
              {"  "} Custom Website Design
            </label>
            <label for="reDesignUpdate">
              <input
                name="reDesignUpdate"
                type="checkbox"
                checked={data.reDesignUpdate}
                onChange={onChangeHandler}
              />
              {"  "}Re-Design And Update
            </label>
            <label for="eCommerce">
              <input
                name="eCommerce"
                type="checkbox"
                checked={data.eCommerce}
                onChange={onChangeHandler}
              />
              {"  "} E-Commerce
            </label>
            <label for="adCopy">
              <input
                name="adCopy"
                type="checkbox"
                checked={data.adCopy}
                onChange={onChangeHandler}
              />
              {"  "} Ad-Copy Writing
            </label>
            <label for="webMaintenance">
              <input
                name="webMaintenance"
                type="checkbox"
                checked={data.webMaintenance}
                onChange={onChangeHandler}
              />
              {"  "} Website Maintenance
            </label>
            <label for="seo">
              <input
                Name="seo"
                type="checkbox"
                checked={data.seo}
                onChange={onChangeHandler}
              />
              {"  "} SEO{" "}
            </label>
            <label for="printLogo">
              <input
                name="printLogo"
                type="checkbox"
                checked={data.printLogo}
                onChange={onChangeHandler}
              />
              {"  "} Print Logo{" "}
            </label>
            <label for="webLogo">
              <input
                Name="webLogo"
                type="checkbox"
                checked={data.webLogo}
                onChange={onChangeHandler}
              />
              {"  "} Website Logo
            </label>
            <label for="blog">
              <input
                Name="blog"
                type="checkbox"
                checked={data.blog}
                onChange={onChangeHandler}
              />
              {"  "} Blog{" "}
            </label>
            <label for="printedMedia">
              <input
                name="printedMedia"
                type="checkbox"
                checked={data.printedMedia}
                onChange={onChangeHandler}
              />
              {"  "} Printed Media{" "}
            </label>
            <input
              className="antiSpam"
              name="antiSpam"
              type="text"
              onChange={onChangeHandler}
              value={data.antiSpam}
            />
          </div>
          <div className="actions">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Helmet>
        <meta name="title" content=" Inquiry Form" />
        <meta
          name="description"
          content="We are a Digital & Printed Media company in the following locations: Knoxville TN, Ogden UT, Salt Lake City UT, Spokane WA, Austin TX"
        />
        <meta
          name="keywords"
          content="Custom Website Design, Search Engine Optimization (SEO), Social Media Marketing (SMM)"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="content-Type" content="text/html" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
      </Helmet>
    </>
  );
}
