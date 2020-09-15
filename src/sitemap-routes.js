import React from "react";
import "./style/_Main.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import SocialMedia from "./components/SocialMedia";
import AdCopyWriting from "./components/Web Design Services/Ad-CopyWriting";
import CustomWebsiteDesign from "./components/Web Design Services/CustomWebsiteDesign";
import ECommerceWebsiteDevelopment from "./components/Web Design Services/E-CommerceWebsiteDevelopment";
import InquirySurveyForm from "./components/Web Design Services/InquirySurveyForm";
import WebMaintenance from "./components/Web Design Services/WebMaintenance";
import WebsiteProgrammingCoding from "./components/Web Design Services/WebsiteProgrammingCoding";
import WebsiteUsability from "./components/Web Design Services/WebsiteUsability";
import OrganicSeo from "./components/SEO/OrganicSeo";
import SeoFriendly from "./components/SEO/SeoFriendly";
import PrintAndGraphicServices from "./components/Graphic Design Services/PrintAndGraphicServices";
import PrintedMediaLogos from "./components/Graphic Design Services/PrintedMediaLogos";
import WebsiteLogoDesign from "./components/Graphic Design Services/WebsiteLogoDesign";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/privacy";
import Pricing from "./components/Pricing";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/seo/Friendly" component={SeoFriendly} />
        <Route path="/seo/seoOrganic" component={OrganicSeo} />
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
      </Switch>
    </HashRouter>
  );
}

export default Routes;
