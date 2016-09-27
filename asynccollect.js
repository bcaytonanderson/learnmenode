//Lesson 9: Juggling Async
//Goal: Make a GET request to 3 provided URLs and print out their contents in the order provided.

var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

function printResults() {
	for (var i = 0; i < 3; i++) {
		console.log(result[i]);
	};
};

function httpGet(index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function(err, data) {
			if (err) {
				return console.error(err);
			};
			result[index] = data.toString();
			count++;
			if (count == 3) {
				printResults();
			};
		}));
	});
};

for (var i = 0; i < 3; i++) {
	httpGet(i);
};

//This one was a bit more difficult for me to approach, but I eventually come to the right answer. Since we don't know when the data stream from each url will end, we can't just make multiple get requests and hope for the best. To ensure everything prints in the right order, a variable to contain completed results was created, and a counter initiated to keep track of how many requests have completed. There is also a function for printing the results, which is used at the end of the GET request callback function. Once the counter hits three, the printResults function is fired off.