class HeaderCTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            Email
            {/* <img src={"../assets/email} alt="contact-mail" className="cta-mail cta-btn" /> */}
            {/* <FiMail
              className="react-icon cta-mail cta-btn"
              alt="contact-mail"
            /> */}
          </a>
          <a href="tel:‭+1.865.274.1371‬">
            Phone
            {/* <img src={"../assets/phone} alt="contact-phone" className="cta-phone cta-btn" /> */}
            {/* <FiPhone
              className="react-icon cta-phone cta-btn"
              alt="contact-phone"
            /> */}
          </a>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#header-cta");
ReactDOM.render(React.createElement(HeaderCTA), domContainer);
