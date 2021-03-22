import React from "react";

//* Images
// import phone from "../images/phone.webp";
// import email from "../images/mail-icon.webp";
import { FiPhone, FiMail } from "react-icons/fi";
const email = "https://bluesmokemedia.s3-us-west-1.amazonaws.com/mail.webp";
const phone = "https://bluesmokemedia.s3-us-west-1.amazonaws.com/phone.webp";

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
          {/* <img src={email} alt="contact-mail" className="cta-mail cta-btn" /> */}
          <FiMail className="react-icon cta-mail cta-btn" alt="contact-mail" />
        </a>
        <a href="tel:‭+1.865.274.1371‬">
          {/* <img src={phone} alt="contact-phone" className="cta-phone cta-btn" /> */}
          <FiPhone
            className="react-icon cta-phone cta-btn"
            alt="contact-phone"
          />
        </a>
      </div>
    </div>
  );
}
