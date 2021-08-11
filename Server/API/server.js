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
var http = require('http');
var https = require('https');
const dgraph = require("dgraph-js-http");
const clientStub = new dgraph.DgraphClientStub("http://dgraph:8080", false);
const dgraphClient = new dgraph.DgraphClient(clientStub);
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

let Calls={
  Autocomplete:({call})=>`{Autocomplete(func:match(category,"${call}",4)){expand(Category)}}`,
  Search:({call})=>`{Search(func: alloftext(product,"${call}")){product stores {store}@facets ~products {property}@facets}}`
}
app.post('/query/:type', async function({params:{type}, body} , res){
  console.log({type,body})
  let {data} = await dgraphClient.newTxn().query(Calls[type](body));
  res.json(data)
});

// Start the server
try{
 console.log("Starting HTTPS server")
 https.createServer({
      key: fs.readFileSync( './Certificates/server.key' ),
      cert: fs.readFileSync( './Certificates/server.crt' )
  }, app).listen(config.Server.Port);
}catch{
  console.log("Failed to run HTTPS server, Running http server")
  http.createServer(app).listen(config.Server.Port)
}
