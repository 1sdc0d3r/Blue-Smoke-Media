import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Carousel/carousel.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";

export default function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={45}
      totalSlides={3}
      // isPlaying={true}
      interval={6000}
      currentSlide={0}
    >
      <Slider className="slider">
        <Slide index={0}>
          <div className="inner-slide">
            <div className="slide-info">
              <h1>
                Does YOUR website
                <br />
                enhance YOUR internet
                <br />
                presence?
              </h1>
              <h4>
                The first step to an effective web presence is to have a
                presence!
              </h4>
              <p>
                An abandoned website is almost worse than nothing. Prove to your
                potential customers that you care, and that you're still in
                business.
              </p>
              <button>
                <NavLink to="#">Get Started Now!</NavLink>
              </button>
            </div>
            <div className="dots">
              <Dot slide={0} />
              <Dot slide={1} />
              <Dot slide={2} />
            </div>
            <img src={slide1} alt="slide1" />
          </div>
        </Slide>
        <Slide index={1} className="slide">
          <div className="inner-slide">
            <div className="slide-info">
              <h1>Does YOUR website encourage sales and focus on results?</h1>
              <h4>Consider these Marketing Goals:</h4>
              <p>
                <span className="bullet">1.</span> Generate more qualified
                leads.
              </p>
              <p>
                <span className="bullet">2.</span> Improve your website's
                conversion rate.
              </p>
              <p>
                <span className="bullet">3.</span> Improve your business'
                product awareness.
              </p>
              <button>
                <NavLink to="#">Get Started Now!</NavLink>
              </button>
            </div>
            <div className="dots">
              <Dot slide={0} />
              <Dot slide={1} />
              <Dot slide={2} />
            </div>
            <img src={slide2} alt="slide2" />
          </div>
        </Slide>
        <Slide index={2} className="slide">
          <div className="inner-slide">
            <div className="slide-info">
              <h1>
                What sets Blue Smoke
                <br />
                Digital and Printed Media
                <br />
                apart from the others?
              </h1>
              <p className="description">
                We at Blue Smoke Digital and Printed Media believe that the
                consumer should get everything they pay for. We believe that
                <span> “SEO should be INCLUDED”</span> in a custom built
                website! It <span>SHOULD NOT</span> be an extra cost. THAT is
                what sets us apart from our competitors.
              </p>
              <button>
                <NavLink to="#">Get Started Now!</NavLink>
              </button>
            </div>
            <div className="dots">
              <Dot slide={0} />
              <Dot slide={1} />
              <Dot slide={2} />
            </div>
            <img src={slide3} alt="slide3" />
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}
