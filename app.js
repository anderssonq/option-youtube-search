"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Settings
app.use(express.json());

//Middlewares
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

// Cors
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//Routers ApiRest
app.use("/api/v1/youtube-search", require("./api/routers/youtube.router"));

module.exports = app;
