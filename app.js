const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Settings
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//Middlewares
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

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
app.use("/api/v1/", require("./api/routers/youtube.router"));

module.exports = app;