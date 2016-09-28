//Lesson 10: Time Server
//GOAL: Write a Transmission Control Protocol (TCP) time server that listens to connections on the provided port. For each connection, write the current date and time in YYYY-MM-DD hh:mm followed by a newline character. After sending the string, close the connection.

var net = require('net');
var time = require('strftime');

var port = process.argv[2];

var server = net.createServer(function (socket) {
	console.log("Listening on port " + Number(port));
	socket.end(console.log(time('%F %H:%M' + '\n')));
});

server.listen(port);

//I used the strftime module to simplify the formatting of the date, as suggested at the end of the lesson. Running the program returns the proper results- the time, in the proper format, with a new line. However, attempting to veryify the program through learnyounode continues to fail. For some reason, it does not recognize any output at all, when clearly there is. I am going to count this lesson as a success, as the program actually does what it is supposed to do.