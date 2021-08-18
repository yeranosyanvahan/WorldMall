const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const yaml = require('js-yaml');
const cookieParser = require("cookie-parser");
const fs = require('fs');
var http = require('http');
var https = require('https');
const {Signin, Signup} = require("./Authentication")
const Privilege = require("./Authorization")
const {Query, Mutate}= require('./Database_Calls')
const app = express();

// Reading Config Files
let fileContents = fs.readFileSync('server.yaml');
let config = yaml.load(fileContents);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config['Secret']));

app.use(cors({
    origin: config['Client']['hostname'],
    credentials: true,
}));


// Routes
app.get("/", (req, res) =>  res.end('<div>API is up and running</div>'));
app.post("/signin", (req, res) => {
  try{
  const {username,password}= req.body
  Login(username,password)
}
  catch {

  }
});
app.post("/signup", (req, res) => {
    const {fname, username, password, email, phone_number=''} = req.body
    Signup(fname, username, password, email, phone_number)
    res.redirect(config.Client.redirect+'/signin');
});

app.post('/query/:type', async function({params:{type}, body} , res){
  let data = Query(type,body)
  res.json(data)
});

// Start the server
try{
 console.log("Starting HTTPS server on port: ", config.Server.Port)
 https.createServer({
      key: fs.readFileSync( './Certificates/server.key' ),
      cert: fs.readFileSync( './Certificates/server.crt' )
  }, app).listen(config.Server.Port);
  console.log("Starting HTTP server on port: ", config.Server.Port+1)
 http.createServer(app).listen(config.Server.Port+1)
}catch{
  console.log("Failed to run HTTPS server")
  console.log("Starting HTTP server on port: ", config.Server.Port)
  http.createServer(app).listen(config.Server.Port)
}
