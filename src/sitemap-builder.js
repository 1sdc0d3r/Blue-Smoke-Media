const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
    presets: [es2015, presetReact]
});
//Import our routes
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
        new Sitemap(router())
        .build("https://www.bluesmokedigitalandprintedmedia.com")
        //Save it wherever you want
        .save("./sitemapNEW.xml")
    );
}

generateSitemap();


// require("babel-register")({
//     presets: ["es2015", "react"]
// });

// const router = require("./sitemap-routes").default;
// const Sitemap = require("react-router-sitemap").default;


// function generateSitemap() {
//     return (
//         new Sitemap(router)
//         .build("localhost:8080")
//         .save("./sitemapBuild.xml")
//     );
// }

// generateSitemap();
