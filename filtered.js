//Lesson 5: Filtered LS

// Goal: Create a program that prints a list of files in a given directory, filtered by the extension of the files. The directory will be provided as the first argument to the program and a file extension to filter by as the second argument. That is, the printed list will ONLY list files with the provided extension. The second argument will NOT be prefixed with a '.'

// =============================================================

var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var output = "";

fs.readdir(process.argv[2], function(err, data) {
	for (i = 0; i < data.length; i++) {
		if (path.extname(data[i]) == '.' + ext) {
			console.log(data[i]);
		};
	};
});

// =============================================================

// OFFICIAL SOLUTION

// var fs = require('fs')  
// var path = require('path')  
       
// var folder = process.argv[2]  
// var ext = '.' + process.argv[3]  
       
// fs.readdir(folder, function (err, files) {
// 	if (err) return console.error(err);
// 	files.forEach(function(file) {
// 		if (path.extname(file) === ext) {
// 			console.log(file);
// 		};
// 	});
// };

//Their solution is very similar to mine with just a few exceptions. As opposed to the previous lesson, this time they checked for an error first. Then, they used the array method .forEach() and wrote the callback there, checking the extension for exact equivalence using ===. My code could have been cleaner by setting the directory filepath as a variable at the top, rather than having it resolved within the .readdir() function. It would have been better for me to check for an error first.