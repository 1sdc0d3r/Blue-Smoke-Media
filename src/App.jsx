import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import "./style/core.css";

//* components
import Home from "./components/Home";
import Team from "./components/Team";
import Header from "./components/Utils/Header";
import Navigation from "./components/Utils/Navigation";
import Footer from "./components/Utils/Footer";
import SocialMedia from "./components/SocialMedia";
import CTA from "./components/Header-CTA";
import DropMenu from "./components/Utils/DropMenu";
import circleX from "./images/circle-X.png";
import ReactGA from "react-ga";

// * Web Design Services
const AdCopyWriting = lazy(() =>
  import("./components/Web Design Services/Ad-CopyWriting")
);
const CustomWebsiteDesign = lazy(() =>
  import("./components/Web Design Services/CustomWebsiteDesign")
);
const ECommerceWebsiteDevelopment = lazy(() =>
  import("./components/Web Design Services/E-CommerceWebsiteDevelopment")
);
const InquirySurveyForm = lazy(() =>
  import("./components/Web Design Services/InquirySurveyForm")
);
const WebMaintenance = lazy(() =>
  import("./components/Web Design Services/WebMaintenance")
);
const WebsiteProgrammingCoding = lazy(() =>
  import("./components/Web Design Services/WebsiteProgrammingCoding")
);
const WebsiteUsability = lazy(() =>
  import("./components/Web Design Services/WebsiteUsability")
);
// * SEO
const OrganicSeo = lazy(() => import("./components/SEO/OrganicSeo"));
const SeoFriendly = lazy(() => import("./components/SEO/SeoFriendly"));
// * Graphic Design Services
const PrintAndGraphicServices = lazy(() =>
  import("./components/Graphic Design Services/PrintAndGraphicServices")
);
const PrintedMediaLogos = lazy(() =>
  import("./components/Graphic Design Services/PrintedMediaLogos")
);
const WebsiteLogoDesign = lazy(() =>
  import("./components/Graphic Design Services/WebsiteLogoDesign")
);
const Contact = lazy(() => import("./components/Contact"));
// * Media
const PrivacyPolicy = lazy(() => import("./components/privacy"));
const Article = lazy(() => import("./components/Article"));

lazy(() => import("./style/core.css"));
// ! GOOGLE ANALYTICS
ReactGA.initialize("UA-177470204-1");

const Plans = lazy(() => import("./components/Plans"));
const Help = lazy(() => import("./components/Help"));

//todo learn E-Commerce (magneto, Shopify)
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(pathname);
  }, [pathname]);

  //! Start of  Zendesk Widget script
  useEffect(() => {
    document.body.addEventListener("click", loadZendeskWidget);
    function loadZendeskWidget() {
      console.log("click");
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "ze-snippet";
      script.async = true;
      script.src =
        "https://static.zdassets.com/ekr/snippet.js?key=9943bbf5-43b7-407f-8af4-f245012b262f";
      document.getElementsByTagName("head")[0].appendChild(script);
      document.body.removeEventListener("click", loadZendeskWidget);
    }
  }, []);
  //! End of  Zendesk Widget script
  return (
    <div className="App">
      <>
        <p className="covid-banner">
          <img
            src={circleX}
            alt="close 'x'"
            onClick={() =>
              (document.querySelector(".covid-banner").style.display = "none")
            }
          />
          Due to the COVID-19 pandemic, we are offering lower prices to help
          accommodate the smaller businesses in the US. It is our goal to help
          in keeping our communities together.
        </p>
        <header>
          <div>
            <Header />
            <Navigation />
            {/* <HamburgerMenu /> */}
          </div>
          <CTA />
        </header>
        <DropMenu />
        <Switch>
          <Suspense fallback={() => <p>Loading...</p>}>
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
            <Route path="/plans" component={Plans} />
            <Route path="/pricing" component={Plans} />
            <Route path="/help" component={Help} />
            <Route path="/article/:id" component={Article} />
            <Redirect to="/" />
          </Suspense>
        </Switch>

        {/* //todo scroll to top
         <p id="scroll-top">
          ^<br />
          Top
        </p> */}
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
