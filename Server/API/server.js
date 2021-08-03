const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const yaml = require('js-yaml');
const fs = require('fs');
const app = express();

// Reading Config Files
let fileContents = fs.readFileSync('server.yaml');
let config = yaml.load(fileContents);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: config['Client']['hostname'],
    credentials: true,
}));

app.use(session({
    secret: config.Secret,
    resave: true,
    saveUninitialized: true,
}));

app.use(cookieParser(config.Secret));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.post("/signin", (req, res) => {
  console.log(req.body);
  var content = '<div id="result1">';
	content += JSON.stringify(req.body, 5);
	content += '</div>';
	res.end(content);
});
app.post("/signup", (req, res) => {
  console.log(req.body);
  var content = '<div id="result1">';
	content += JSON.stringify(req.body, 5);
	content += '</div>';
	res.end(content);
});

// Start the server
app.listen(config.Server.Port,()=>{console.log("server has started on port: "+config.Server.Port)})
