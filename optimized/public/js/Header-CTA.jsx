class HeaderCTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const email = (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="react-icon cta-mail cta-btn"
        alt="contact-mail"
        height="1em"
        width="1em"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    );
    const phone = (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="react-icon cta-phone cta-btn"
        alt="contact-phone"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    );
    return (
      <div className="cta">
        <p>
          Request
          <br />A <span>FREE</span>
          <br />
          Consultation
        </p>
        <div className="btns">
          <a href="mailto:services@bluesmokemedia.net">{email}</a>
          <a href="tel:‭+1.865.274.1371‬">{phone}</a>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#header-cta");
ReactDOM.render(React.createElement(HeaderCTA), domContainer);
