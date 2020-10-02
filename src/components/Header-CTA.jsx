import React from "react";

//* Images
// import phone from "../images/phone.png";
// import email from "../images/mail-icon.png";
const email =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Header/mail.png";
const phone =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Header/phone.png";

export default function cta() {
  return (
    <div className="cta">
      <p>
        Request
        <br />A <span>FREE</span>
        <br />
        Consultation
      </p>
      <div className="btns">
        <a href="mailto:services@bluesmokemedia.net">
          <img src={email} alt="contact-mail" className="cta-mail cta-btn" />
        </a>
        <a href="tel:‭+1.865.274.1371‬">
          <img src={phone} alt="contact-phone" className="cta-phone cta-btn" />
        </a>
      </div>
    </div>
  );
}
