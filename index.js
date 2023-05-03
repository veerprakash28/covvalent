const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./src/routes/routes");
const port = 3000;

// DB Connection
const db = require("./connection").con;

// Server
app.listen(port, (err) => {
  if (err) {
    console.log("Server Failed to start");
  } else {
    console.log("Server started at port: ", port);
  }
});

// Setting up Environment
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Making DB accessible to Router
app.use(function (req, res, next) {
  req.con = db;
  next();
});

// Routes
app.use("/product-list", routes);
app.use("/categories", routes);
app.use("/auth", routes);

module.exports = app;
