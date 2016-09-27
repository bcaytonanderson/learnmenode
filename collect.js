//Lesson 8: HTTP Collect
//GOAL: WRite a program that performs a GET request to a provided URL, collect ALL data from the server, and write two lines to the console. Line one is an integer representing the number of characters received, Line two should contain the complete string.

var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res) {
	res.pipe(bl(function(err, data) {
		if (err) {
			return console.error(err);
		};
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});