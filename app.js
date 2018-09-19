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
<<<<<<< HEAD
 app.listen(3457);
 
 console.log("Something awesome to happen at http://localhost:3457");
=======
 app.listen(portNum);
 
 console.log("Server is live and running at port : " + portNum);
>>>>>>> cc9dbfde230d3eac0e9ea9a6779f95b1d3f1f274
