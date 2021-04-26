"use strict";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blueSmoke: "../assets/blue-smoke.webp",
      flame: "../assets/flame.webp",
      silhouettes: "../assets/black-silhouettes.webp",
    };
  }

  render() {
    const { flame, blueSmoke, silhouettes } = this.state;
    return (
      <div className="header">
        <img src={flame} alt="logo-flame" id="flame" />
        <div className="blue-smoke">
          <img src={blueSmoke} alt="blue-smoke" />
          <p>Digital and Printed Media</p>
        </div>
        <div className="center">
          <p>
            Getting <span>your</span> business
          </p>
          <p>
            <span>Back</span> into Business!!
          </p>
        </div>
        <div className="silhouette-div">
          <img
            src={silhouettes}
            alt="people silhouettes"
            className="silhouettes"
          />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#header");
ReactDOM.render(React.createElement(Header), domContainer);
