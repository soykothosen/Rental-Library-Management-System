 var express = require('express');
 var app = express();
 var path = require('path');
 var bodyParser = require('body-parser');
 var mysql = require("mysql");

 app.set('view engine','ejs');

 var db = mysql.createConnection({
  host    : 'localhost',
  user     : 'root',
  password : '',
  database : 'rentel_library'
});
 
db.connect(function(err){
	if(err){
		throw err;
	}
	console.log("Database is connected");
});


 app.use(bodyParser.urlencoded({ extended: true }));



 


  
  

 app.get('/',function(req,res){
 	res.sendFile(path.join( __dirname + '/ui.html'));
 });


  app.get('/studenttshow',function(req,res){

    db.query("SELECT * FROM `student`",function(err, results, fields){
    if(err){
      //throw err;
    }
    console.log(results.length);
    
    var i;
    for (i = 0; i < results.length; i++) {
    console.log(results[i].stud_no);
    }
    res.render('studenttshow', {length : results.length , result : results});
   });

 	
 });



  app.get('/membershiptshow',function(req,res){

    db.query("SELECT * FROM `membership`",function(err, results, fields){
    if(err){
      //throw err;
    }
    console.log(results.length);
    
    var i;
    for (i = 0; i < results.length; i++) {
    console.log(results[i].stud_no);
    }
    res.render('membershiptshow', {length : results.length , result : results});
   });

  
 });

  app.get('/booktshow',function(req,res){

    db.query("SELECT * FROM `book`",function(err, results, fields){
    if(err){
      //throw err;
    }
    console.log(results.length);
    
    var i;
    for (i = 0; i < results.length; i++) {
    console.log(results[i].stud_no);
    }
    res.render('booktshow', {length : results.length , result : results});
   });

  
 });


  app.get('/issrectshow',function(req,res){

    db.query("SELECT * FROM `iss_rec`",function(err, results, fields){
    if(err){
      //throw err;
    }
    console.log(results.length);
    
    var i;
    for (i = 0; i < results.length; i++) {
    //console.log(results[i].stud_no);
    }
    res.render('issrectshow', {length : results.length , result : results});
   });

  
 });



 /*app.post('/',function(req,res){

 	var student = req.body.student;
 	//var password = req.body.pass;
 	console.log(student);
 	//db.query("SELECT pass FROM `persons` WHERE mem_no = ?",[memid],function(err, results, fields){
   	//if(err){
   		//throw err;
   	//}
   	//console.log(results[0].pass);
   	//var = RowDataPacket.pass
   	//console.log(RowDataPacket.pass);
   	//if (results[0].pass == password) {
   		res.send('logIn');
   	//}
   //});
 	//var password1 = db.query(SELECT pass FROM `persons` WHERE mem_no = 'memid'); 
 	//res.send(password1);
    /*res.sendFile(path.join( __dirname + "/student.html"));
    
 });*/

 app.listen('8080',function(err){
 	if(err){
 		throw err;
 	}
 	console.log("Server run on port 8080");
 });