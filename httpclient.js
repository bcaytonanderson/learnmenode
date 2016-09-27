//Lesson 7: HTTP CLIENT
//Goal: Write a program that performs an HTTP GET request to a URL provided. Write the string contents of each "data" event from the response to a new loine on the console.

var http = require('http');

var req = http.get(process.argv[2], function(res) {
	res.on("data", function(data) {
		data.setEncoding('utf8');
		console.log(data);
	});
});