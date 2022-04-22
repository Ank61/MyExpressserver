//jshint esversion: 6
//create a server// 3000 is homepage of a website
const express = require("express");
const app = express(); //app is always used when using express
app.listen(3000, function(){
  console.log("Server has started on 3000");
}); //it will be listening to 3000 https
//if you go on browser localhost:3000 there wil be error; So we need to display something on it !
//our server is not sending anything right now!
// / is  a root address
app.get("/", function(req, res){
  res.send("<h1>Hello</h1>"); //browers request of any data you want to display
});
app.get("/hobbies", function(req, res){
  res.send("<h1>My hobbies eat sleep</h1>"); //browers request of any data you want to display
});

app.get("/about", function(req, res){
  res.send("<h1>My name is Ankit </h1>"); //browers request of any data you want to display
});
