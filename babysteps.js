var sum = 0;

for (var i = 0; i < (process.argv.length - 2); i++) {
	sum = sum + Number(process.argv[i+2]);
};

console.log(sum);

// This completed the lesson, however there were a couple of details that could have made the code cleaner. Firstly, I'm so used to starting for loops at i = 0 that I automatically did that and worked around that base, whereas setting i = 2 would bypass the first two arguments in the process.argv array entirely. Secondly, I had forgotten the cleaner way of summing two variables. The follow is a more proper version of the correct answer:

// var sum = 0;

// for (var i = 2; i < process.argv.length; i++) {
// 	result += Number(process.argv[i]);
// }

// console.log(sum);