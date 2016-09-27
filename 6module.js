var fs = require('fs');
var path = require('path');


module.exports = function (folder, ext, callback) {
	fs.readdir(folder, function(err, list) {
		if (err) {
			return callback(err);
		};

		list = list.filter(function(file) {
			return path.extname(file) === '.' + ext;
		});

		callback(null, list);
	});
};

//Had trouble with this one, because I attempted to dublicate the solution from the last lesson here. Instead, I needed to use the .filter() method on the array of filenames returned from the fs.readdir function. 