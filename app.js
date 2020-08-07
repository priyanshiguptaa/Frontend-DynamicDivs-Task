var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var hsts = require('hsts');
const app= express();
app.set("view engine", "ejs");
let ejs = require('ejs');
const router =express.Router;

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000  }));
app.use(bodyParser.json({limit: "50mb"}));
app.use(express.static(__dirname + "/public"));


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Headers', 'Strict-Transport-Security: max-age=5184000');
  next();
});

app.use(hsts({ maxAge: 5184000 }));
    
        
        
app.get('/', function(req, res){
        res.render("home.ejs");
    });







module.exports = app;