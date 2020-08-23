import React from "react";
import phone from "../images/phone.png";
import email from "../images/Mail Icon.png";

export default function cta() {
  return (
    <div className="cta">
      <p>
        Request
        <br /> A <span>FREE</span>
        <br />
        Consultation
      </p>
      <div className="btns">
        <img src={email} alt="contact-mail" className="cta-mail cta-btn" />
        <img src={phone} alt="contact-phone" className="cta-phone cta-btn" />
      </div>
    </div>
  );
}
