const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const yaml = require('js-yaml');
const cookieParser = require("cookie-parser");
const fs = require('fs');
var http = require('http');
var https = require('https');
const {Signin, Signup} = require("./Authentication")
const Authorization = require("./Authorization")
const {Query, Mutate, Update}= require('./Database_Calls')
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
  try{ const {username,password}= req.body}
  catch{ res.send("Invalid Post")}
  try{
  token=Signin(username, password)
  token ? res.json(token): res.send("Invalid username or password")
  }
  catch (e) {
  res.send(e,303)
  }
});

app.post("/signup", (req, res) => {
   try{
    const {fname, username, password, email, phone_number=''} = req.body
    Signup(fname, username, password, email, phone_number)
    res.redirect(config.Client.redirect+'/signin');
    }
     catch (e){
      res.send(e,300)
     }
    });

app.post('/query/:type', Authorization, async function({params:{type}, body} , res){
  let privilege = Privilege(req.cookies, type)
  if(!privilege.access) return res.send("Request forbidden",403)
  let {data} = Query(type,{...body, ...privilege})
  res.json(data)
});

app.post('/mutate/:type', Authorization, async function({params:{type}, body} , res){
  let privilege = Privilege(req.cookies, type)
  if(!privilege.access) return res.send("Request forbidden",403)
  let response = Mutate(type,{...body, ...privilege})
  res.send(response)
});

app.post('/mutate/:type', Authorization, async function({params:{type}, body} , res){
  let privilege = Privilege(req.cookies, type)
  if(!privilege.access) return res.send("Request forbidden",403)
  let response = Update(type,{...body, ...privilege})
  res.send(response)
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
