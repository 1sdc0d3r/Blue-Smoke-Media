"use strict";

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}

const domContainer = document.querySelector("#template");
ReactDOM.render(React.createElement(Template), domContainer);
