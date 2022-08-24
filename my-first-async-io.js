const fs = require("fs");

const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (err, data) => {
  err && console.error(err);

  console.log(data.split("\n").length - 1);
});
