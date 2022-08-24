var path = require("path");
var mymodule = require("./mymodule");
var data = process.argv[2];
var extension = process.argv[3];

var callback = function (err, list) {
  if (err) {
    console.log(err);
  }
  list.forEach(function (file) {
    console.log(file);
  });
};

mymodule(data, extension, callback);
