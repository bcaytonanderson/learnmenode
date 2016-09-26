//Lesson 4: Write a program that uses a single asynchronus filesystem operation to read a file
//and print the number of newlines it contains.

//Very similar to previous lesson, but now in the "Node.js way"- asynchronusly.

// function callback (err, data) {

// };
// //This is the idiomatic Node.js callback function format. You can check for errors by checking
// whether the first argument comes back truthy- if it does, then the second argument will be a 
// Buffer object.

// =============================================================

//FIRST ATTEMPT.

// var fs = require('fs');

// var lines = 0;

// function linecount (callback) {
// 	fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
// 		lines = fileContents.split('\n').length -1;
// 		callback();
// 	})
// };

// function logLineCount() {
// 	console.log(lines);
// };

// linecount(logLineCount);

// =============================================================

//The official solution is as follows:

// var fs = require('fs')  
// var file = process.argv[2]  
       
// fs.readFile(file, function (err, contents) {  
//     // fs.readFile(file, 'utf8', callback) can also be used  
//     var lines = contents.toString().split('\n').length - 1  
//     console.log(lines)  
// })  

// My solution was far more verbose. First they required fs, then set a variable file which would be the path to the file the program would read. Next, they call fs.readFile(), supplying it with file as an argument, and writing the callback as the second argument. They then create a variable, lines, and perform the necessary functions to return the number of new lines. Then, within the callback, they console.log the return.

//==================================================================================

//REFACTORED

//Taking what I learned from studying their solution, I am rewriting the program to be more concise.

var fs = require('fs');

fs.readFile(process.argv[2],'utf8', function(err, contents) {
	var lines = contents.split('\n').length - 1;
	console.log(lines);
});

//It seems my way might just make the code look more confusing. It is more straight-forward to create the file variable as the official answer did, and then use the .toString() method on it within the callback. My version still fulfills the requirements of the lesson, though.