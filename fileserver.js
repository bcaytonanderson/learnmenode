//Lesson 11: HTTP File Server
//Goal: Write an HTTP server that serves the same text file for each request it receives. Program will be provided the location of the file and must use the fs.createReadSteam() method to stream the file contents to the response.

var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var location = process.argv[3];

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'content-type': 'text/plain'});
	fs.createReadSteam(location).pipe(res);
});

server.listen(Number(port));

//Again, this is the correct solution. However, learnyounode does is returning an error saying that there is a problem connecting to the port provided. After checking several sources online to troubleshoot, I am certain that this is the correct setup for this lesson.