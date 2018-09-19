var express = require("express");
 
var portNum = 8080;
 //use the application off of express.
 var app = express();
 
app.use(express.static(__dirname)); //Serves resources from public folder


 //define the route for "/"
 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/main.html");
 });
 
 //start the server
 app.listen(portNum);
 
 console.log("Server is live and running at port : " + portNum);

