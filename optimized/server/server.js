const express = require("express");
const app = express();
const configureMiddleware = require("./api/middleware/api-config");
const serveRouter = require("./api/routes/serveRouter");

configureMiddleware(app);
app.use("/", serveRouter)

module.exports = app;
