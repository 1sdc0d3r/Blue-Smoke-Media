import React, { useEffect } from "react";
import "./style/core.css";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

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
import Contact from "./components/Contact";
import CTA from "./components/Header-CTA";
import HamburgerMenu from "./components/HamburgerMenu";
// * Media
import PrivacyPolicy from "./components/privacy";
import Article from "./components/Article";
import Pricing from "./components/Pricing";
import circleX from "./images/circle-X.png";

import Help from "./components/Help";

// ! GOOGLE ANALYTICS
import ReactGA from "react-ga";
ReactGA.initialize("UA-177470204-1");

//todo learn E-Commerce (magneto, Shopify)
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(pathname);
  }, [pathname]);

  return (
    <div className="App" style={{ position: "relative" }}>
      <>
        <p className="covid-banner">
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
          <Route path="/team" component={Team} />
          {/* //! privacy */}
          <Route path="/privacy" component={PrivacyPolicy} />
          {/* //! SEO */}
          <Route path="/seo/Friendly" component={SeoFriendly} />
          <Route path="/seo/seoOrganic" component={OrganicSeo} />
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
          <Route path="/contact" component={Contact} />
          <Route path="/plans" component={Pricing} />
          <Route path="/help" component={Help} />
          <Route path="/article/:id" component={Article} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
    </div>
  );
}

// function getStorage() {
//   const item = JSON.parse(localStorage.getItem("landingVideo"));
//   // console.log(item.expiration, new Date().getTime());
//   if (!item || item.expiration < new Date().getTime()) {
//     return true;
//   }
//   return false;
// }

export default App;
