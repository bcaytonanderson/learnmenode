//Goal: write a program that uses a single synchronus filesystem operation to read a file and print the number of newlines (\n) to the console. It will read a test file provided by tutorial (as the first command-line argument of process.argv). 

// Must require the filesystem node module from the core library, since JS can't inherently access the file system
var fs = require('fs');

//To read a file, use fs.readFileSync('/path/to/file') which will return a Buffer object containing its contents.

// var lines = fs.readFileSync(process.argv[2]).toString();
//The .toSTring() method can be elminiated by passing 'utf8' as the second argument to the .readFileSync() function, automatically making our output a string.

var lines = fs.readFileSync(process.argv[2],'utf8');

lines = lines.split('\n').length - 1;

console.log(lines);

//Since the last line of the file did not have a \n, I had to subtract one from the value of the lines.split function, since there would be an empty string as the last element in the array.

//The official solution for this lesson is as follows:

// var fs = require('fs');

// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines)

//My first attempt at the solution was very similar to their official answer. Whereas they created a variable for the contents of the file and then the number of lines, I only created one variable and manupulated that.

