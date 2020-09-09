import React, { useState } from "react";
import * as emailjs from "emailjs-com";
//todo finish this form
export default function Contact() {
  const [data, setData] = useState({
    company: "",
    fName: "",
    lName: "",
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
    console.log(data);
    // const templateParams = {
    //   reply_to: data.email,
    //   subject: "Portfolio Contact",
    //   to_name: "Braden",
    //   from_name: data.name,
    //   message_html: data.message,
    // };

    //   emailjs.send(
    //     "gmail",
    //     "template_SswCjIcl",
    //     templateParams,
    //     "user_vhx6Zrv5irvL2nLhnctr5"
    //   );

    resetHandler();
  };

  const resetHandler = () => {
    setData({
      company: "",
      fName: "",
      lName: "",
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
      <div className="contact">
        <h2>Contact Us</h2>
        <p>
          Effective Internet marketing and Web site Design requires a staff of
          diverse disciplines. Our full-service approach will save you time and
          the added expense of discovering the missing pieces and hiring
          multiple companies to collaborate. For quick answers, accurate quotes
          and 24/7 customer service, please call{" "}
          <a href="tel:865-274-1371">865.274.1371</a> or complete the inquiry
          form below and we will contact you at a time and date that is
          convenient to you.
        </p>
      </div>
    </>
  );
}
