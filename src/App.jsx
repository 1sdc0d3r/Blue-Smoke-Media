import React, { useState, useEffect } from "react";
import "./style/_Main.css";
import { Switch, Route } from "react-router-dom";

//* components
import Home from "./components/Home";
import Team from "./components/Team";
import Header from "./components/Utils/Header";
import Navigation from "./components/Utils/Navigation";
import Footer from "./components/Utils/Footer";
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
//todo learn E-Commerce
//todo add SEO to website w/ CoBe
//todo set up google analytics
//analytics.google.com/analytics/web/provision/#/a168002604p234303565/admin/streams/promo
// todo generate sitemap for .robottxt file
// todo cta phone stretched
// todo rename paths (full application)
function App() {
  //! enable video here
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    setIsPlaying(getStorage());
  }, []);
  return (
    <div className="App" style={{ position: "relative" }}>
      {/* //todo fix video height/width */}
      {isPlaying ? (
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
                expiration: new Date().getTime() + 86400000, //24hrs
              })
            );
          }}
        ></video>
      ) : (
        <>
          <header>
            <div>
              <Header />
              <Navigation />
              <HamburgerMenu />
            </div>
            <CTA />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* //todo privacy */}
            {/* <Route path="/privacy" component={privacy} /> */}
            <Route path="/team" component={Team} />
            {/* //! SERVICES */}
            {/* //! SEO */}
            <Route path="/seoFriendly" component={SeoFriendly} />
            <Route path="/seoOrganic" component={OrganicSeo} />
            {/* //todo OTHER SEO PAGE */}
            {/* <Route path="/seo" component={SEO} /> */}
            {/* //! WEBSITE DESIGN */}
            <Route
              path="/customWebsiteDesign"
              component={CustomWebsiteDesign}
            />
            <Route
              path="/E-CommerceWebsiteDevelopment"
              component={ECommerceWebsiteDevelopment}
            />
            <Route path="/websiteUsability" component={WebsiteUsability} />
            <Route path="/Ad-CopyWriting" component={AdCopyWriting} />
            <Route path="/webMaintenance" component={WebMaintenance} />
            <Route path="/coding" component={WebsiteProgrammingCoding} />
            <Route path="/inquirySurveyForm" component={InquirySurveyForm} />

            {/* //! Graphic Design Services */}
            <Route path="/websiteLogoDesign" component={WebsiteLogoDesign} />
            <Route path="/printedMediaLogos" component={PrintedMediaLogos} />
            <Route
              path="/printAndGraphicServices"
              component={PrintAndGraphicServices}
            />
            {/* //todo portfolio  */}
            {/* <Route path="/portfolio" component={Portfolio} /> */}
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </>
      )}
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
