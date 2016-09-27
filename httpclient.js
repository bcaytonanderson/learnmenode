//Lesson 7: HTTP CLIENT
//Goal: Write a program that performs an HTTP GET request to a URL provided. Write the string contents of each "data" event from the response to a new loine on the console.

var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log(data);
	});
//	res.on('error', console.error)
})//.on('error', console.error);

//The commented out lines were part of the official solution.