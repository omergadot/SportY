var express = require("express");
 
 //use the application off of express.
 var app = express();
 
app.use(express.static(__dirname)); //Serves resources from public folder


 //define the route for "/"
 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/main.html");
 });
 
 //start the server
 app.listen(3457);
 
 console.log("Something awesome to happen at http://localhost:3457");