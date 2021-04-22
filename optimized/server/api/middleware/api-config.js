const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require('body-parser')
const {
  NODE_ENV
} = process.env
// const csp = require('express-csp-header');
const {
  expressCspHeader,
  INLINE,
  NONE,
  SELF
} = require('express-csp-header');
// const corsOptions = {
//   origin: ["http://localhost:5000/api/", 'unpkg.com', "https://domain.herokuapp.com/api/"],
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
module.exports = app => {
  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  // Parse application/json
  app.use(bodyParser.json());
  if (NODE_ENV === 'development') app.use(require("morgan")("dev"));
  app.use(helmet());
  app.use(cors());
  app.use(express.static('public'))
  app.use(expressCspHeader({
    directives: {
      'default-src': [SELF, INLINE,
        /*Localhost*/
        "localhost:5000", "http://localhost:5000", "localhost:5000/api/", "http://localhost:5000/api/",
        /*heroku*/
        "https://lands-beauty-enterprises.herokuapp.com/api/",
        /* LandsBeautyEnterprises.com */
        "LandsBeautyEnterprises.com", "http://LandsBeautyEnterprises.com", "https://LandsBeautyEnterprises.com",
      ],
      'script-src': [SELF, INLINE, 'unpkg.com'],
      'style-src': [SELF, INLINE],
      'img-src': [SELF, 'data:'],
      'worker-src': [NONE],
      'block-all-mixed-content': true
    }
  }));
  app.use(express.json());

  // HTTP response header will be defined as:
  // "Content-Security-Policy: default-src 'none'; img-src 'self';"
};

// For example  will accept any request from “http://example1.com” or from a subdomain of “example2.com”.
