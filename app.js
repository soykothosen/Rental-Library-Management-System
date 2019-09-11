 var express = require('express');
 var app = express();
 var path = require('path');
 var bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({ extended: true }));

 app.get('/',function(req,res){
 	res.sendFile(path.join( __dirname + '/signin.html'));
 });


 app.post('/',function(req,res){

 	var email = req.body.email;
 	var password = req.body.password;
 	console.log(email);
 	res.send(email);
    /*res.sendFile(path.join( __dirname + "/student.html"));*/
    
 });

 app.listen('8080',function(err){
 	if(err){
 		throw err;
 	}
 	console.log("Server run on port 8080");
 });