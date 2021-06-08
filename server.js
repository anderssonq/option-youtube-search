const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");

// Loading static folder (where frontend its)
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))

// Loading express app
const app = require("./app");

// Settings
app.use(staticFileMiddleware)
app.use(history({
  disableDotRule: true,
  verbose: true,
}))
app.use(staticFileMiddleware)

// Loading frontend index
app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'))
})

// Server
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port
  console.log('App now running on port', port)
})
