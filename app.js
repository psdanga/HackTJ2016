var express = require('express');

var app = express();

var MongoClient = require("mongodb").MongoClient;
var mongodbURL = "mongodb://localhost:27017/myproject";

app.get('/', function(req, res) {
	MongoClient.connect(mongodbURL, function(err, db) {
		var collection = db.collection("users");

		var iAmJson = {"key" : "value", "anotherkey" : 2} 
		res.send("hello world");
		collection.insert(iAmJson);
		db.close();
		});
	res.send("hello world");
});

app.listen(3000, function() {
	console.log("example app listening on 3000");
});


