// Lesson 6: MAKE IT MODULAR

//GOAL: Create two files. One that prints a list of files in a given directory filtered by extension. Same as Lesson 5. However, it must be written in a module file that exports a single function that takes 3 arguments: directory name, filename extension string, and a callback.

var mymodule = require('./6module.js');
var folder = process.argv[2];
var ext = process.argv[3];

mymodule(folder, ext, function(err, files) {
	if (err) {
		return console.error("there was an error:", err);
	};

	files.forEach(function(file) {
		console.log(file);
	});
});

