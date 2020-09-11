import React, { useState, useEffect } from "react";
import "./style/_Main.css";
import { Switch, Route, useLocation } from "react-router-dom";

//* components
import Home from "./components/Home";
import Team from "./components/Team";
import Header from "./components/Utils/Header";
import Navigation from "./components/Utils/Navigation";
import Footer from "./components/Utils/Footer";
import SocialMedia from "./components/SocialMedia";
// * Web Design Services
import AdCopyWriting from "./components/Web Design Services/Ad-CopyWriting";
import CustomWebsiteDesign from "./components/Web Design Services/CustomWebsiteDesign";
import ECommerceWebsiteDevelopment from "./components/Web Design Services/E-CommerceWebsiteDevelopment";
import InquirySurveyForm from "./components/Web Design Services/InquirySurveyForm";
import WebMaintenance from "./components/Web Design Services/WebMaintenance";
import WebsiteProgrammingCoding from "./components/Web Design Services/WebsiteProgrammingCoding";
import WebsiteUsability from "./components/Web Design Services/WebsiteUsability";
// * SEO
import OrganicSeo from "./components/SEO/OrganicSeo";
import SeoFriendly from "./components/SEO/SeoFriendly";
// * Graphic Design Services
import PrintAndGraphicServices from "./components/Graphic Design Services/PrintAndGraphicServices";
import PrintedMediaLogos from "./components/Graphic Design Services/PrintedMediaLogos";
import WebsiteLogoDesign from "./components/Graphic Design Services/WebsiteLogoDesign";
// import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import CTA from "./components/Header-CTA";
import HamburgerMenu from "./components/HamburgerMenu";
// * Media
import landingVideo from "./videos/LandingPageVideo.mp4";
import PrivacyPolicy from "./components/privacy";
import Pricing from "./components/Pricing";
import ContactBtn from "./components/Utils/contact-btn";
import circleX from "./images/circle-X.png";
//todo learn E-Commerce
function App() {
  //! enable video here
  // const [isPlaying, setIsPlaying] = useState(true);
  // const videoPlayDelay = 259200000; //72hrs
  const { pathname } = useLocation();

  // useEffect(() => {
  //   setIsPlaying(getStorage());
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (document.querySelector(".covid-banner")) {
      document.querySelector(".covid-banner").style.display = "none";
    }
  }, [pathname]);

  return (
    <div className="App" style={{ position: "relative" }}>
      {/* {isPlaying ? (
        <video
          type={"video/mp4"}
          src={landingVideo}
          preload={"auto"}
          muted={true}
          autoPlay
          onEnded={() => {
            setIsPlaying(false);
            localStorage.setItem(
              "landingVideo",
              JSON.stringify({
                value: true,
                expiration: new Date().getTime() + videoPlayDelay,
              })
            );
          }}
        ></video>
      ) : ( */}
      <>
        <header>
          <p className="covid-banner">
            {/* <span */}
            {/* > */}
            <img
              src={circleX}
              alt="close 'x'"
              onClick={() =>
                (document.querySelector(".covid-banner").style.display = "none")
              }
            />
            Due to the COVID-19 epidemic, we have lowered our prices to
            accommodate the smaller businesses in the US. It is our goal to help
            in keeping our communities together.
          </p>
          <div>
            <Header />
            <Navigation />
            <HamburgerMenu />
          </div>
          <CTA />
        </header>
        {/* <ContactBtn /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" component={Team} />
          {/* //! privacy */}
          <Route path="/privacy" component={PrivacyPolicy} />
          {/* //! SEO */}
          <Route path="/seo/Friendly" component={SeoFriendly} />
          <Route path="/seo/seoOrganic" component={OrganicSeo} />
          {/* //todo OTHER SEO PAGE */}
          {/* <Route path="/seo" component={SEO} /> */}
          {/* //! WEBSITE DESIGN */}
          <Route
            path="/website-design/custom-website-design"
            component={CustomWebsiteDesign}
          />
          <Route
            path="/website-design/eCommerce-website-development"
            component={ECommerceWebsiteDevelopment}
          />
          <Route
            path="/website-design/website-useability"
            component={WebsiteUsability}
          />
          <Route path="/Ad-CopyWriting" component={AdCopyWriting} />
          <Route
            path="/website-design/website-maintenance"
            component={WebMaintenance}
          />
          <Route
            path="/website-design/coding"
            component={WebsiteProgrammingCoding}
          />
          <Route
            path="/website-design/inquiry-form"
            component={InquirySurveyForm}
          />

          {/* //! Graphic Design Services */}
          <Route
            path="/graphic-design/website-logo-design"
            component={WebsiteLogoDesign}
          />
          <Route
            path="/graphic-design/printed-media-logos"
            component={PrintedMediaLogos}
          />
          <Route
            path="/graphic-design/digital-and-print-graphic-design"
            component={PrintAndGraphicServices}
          />
          <Route path="/social-media" component={SocialMedia} />

          {/* //todo portfolio  */}
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/plans" component={Pricing} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}

// function NoMatch({ location }) {
//   return (
//     <div className="error 404">
//       <h3>
//         404 No match for <code> {location.pathname} </code>
//       </h3>
//     </div>
//   );
// }

function getStorage() {
  const item = JSON.parse(localStorage.getItem("landingVideo"));
  // console.log(item.expiration, new Date().getTime());
  if (!item || item.expiration < new Date().getTime()) {
    return true;
  }
  return false;
}

export default App;
