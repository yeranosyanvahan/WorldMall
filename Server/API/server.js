const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const yaml = require('js-yaml');
const cookieParser = require("cookie-parser");
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config['secret']));

app.use(cors({
    origin: config['Client']['hostname'],
    credentials: true,
}));


// Routes
app.get("/", (req, res) => {
  console.log("Testing API");
  var content = '<div id="result1">';
	content += "API"
	content += '</div>';
	res.end(content);
});
app.post("/signin", (req, res) => {
  console.log(req.body);
  try {
    res.cookie(req.body.username,req.body.password, {signed: true})
    res.redirect(config.Client.rcedirect+'/thanks/singing in');
  }
  catch (e) {
    console.log(e)
    res.redirect(config.Client.rcedirect+'/sorry');

  }
	res.end(content);
});
app.post("/signup", (req, res) => {
  console.log(req.body);
  var content = '<div id="result1">';
	content += JSON.stringify(req.body, 5);
	content += '</div>';
	res.end(content);
});

// Database Queries
const Calls={
  Autocomplete:({call})=>`{Autocomplete(func:match(category,"${call}",4)){expand(Category)}}`,
  Search:({call})=> `{Search(func: alloftext(product,"${call}")){id:uid product stores{store}@facets(price:price)properties:~products{property}@facets(src:src)}}`
}
app.post('/query/:type', async function({params:{type}, body} , res){
  console.log({type,body})
  let {data} = await dgraphClient.newTxn().query(Calls[type](body));
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
