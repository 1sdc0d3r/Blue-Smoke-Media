"use strict";
const slideList = [
  //* SLIDE 1
  <div className="slide">
    <div className="slide-info">
      <h1>
        Does YOUR website
        <br />
        enhance YOUR internet
        <br />
        presence?
      </h1>
      <h4>
        The first step to an effective web presence is to have a presence!
      </h4>
      <p>
        An abandoned website is almost worse than nothing. Prove to your
        potential customers that you care, and that you're still in business.
      </p>
      <a href="/website-design/inquiry-form">Get Started Now!</a>
    </div>
    <div className="dots">
      <p>0</p>
      <p>1</p>
      <p>2</p>
      {/* <Dot slide={0} />
      <Dot slide={1} />
      <Dot slide={2} /> */}
    </div>
    <img src="../assets/slide-1.png" alt="slide1" />
  </div>,
  //* SLIDE 2
  <div className="slide">
    <div className="slide-info">
      <h1>Does YOUR website encourage sales and focus on results?</h1>
      <h4>Consider these Marketing Goals:</h4>
      <p>
        <span className="bullet">1.</span> Generate more qualified leads.
      </p>
      <p>
        <span className="bullet">2.</span> Improve your website's conversion
        rate.
      </p>
      <p>
        <span className="bullet">3.</span> Improve your business' product
        awareness.
      </p>
      <a href="/website-design/inquiry-form">Get Started Now!</a>
    </div>
    <div className="dots">
      <p>0</p>
      <p>1</p>
      <p>2</p>
      {/* <Dot slide={0} />
    <Dot slide={1} />
    <Dot slide={2} /> */}
    </div>
    <img src="../assets/slide-2.png" alt="slide2" />
  </div>,
  //* SLIDE 3
  <div className="slide">
    <div className="slide-info">
      <h1>
        What sets Blue Smoke Digital and Printed Media apart from the others?
      </h1>
      <p className="description">
        We at Blue Smoke Digital and Printed Media believe that the consumer
        should get everything they pay for. We believe that
        <span> “SEO should be INCLUDED”</span> in a custom built website! It{" "}
        <span>SHOULD NOT</span> be an extra cost. THAT is what sets us apart
        from our competitors.
      </p>
      <a href="/website-design/inquiry-form">Get Started Now!</a>
    </div>
    <div className="dots">
      <p>0</p>
      <p>1</p>
      <p>2</p>
      {/* <Dot slide={0} />
              <Dot slide={1} />
              <Dot slide={2} /> */}
    </div>
    <img src="../assets/slide-3.png" alt="slide3" />
  </div>,
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideList: slideList,
      activeSlide: slideList[0],
      slideTimer: 2500, //6000
      transitionTime: 500,
    };
  }

  render() {
    const { slideList, activeSlide, slideTimer, transitionTime } = this.state;

    setTimeout(() => {
      const slide = document.querySelector(".slide");
      slide.classList.add("fade-out");

      setTimeout(() => {
        slide.classList.remove("fade-out");
        slide.classList.add("fade-in");
        let index = slideList.indexOf(activeSlide);
        if (slideList[index + 1]) index++;
        else index = 0;
        this.setState({ ...this.state, activeSlide: slideList[index] });
      }, transitionTime);
    }, slideTimer);

    return activeSlide;
  }
}

const domContainer = document.querySelector("#carousel");
ReactDOM.render(React.createElement(Carousel), domContainer);
