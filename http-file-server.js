var http = require("http"),
  fs = require("fs"),
  port = process.argv[2],
  fileName = process.argv[3];
var server = http.createServer((req, res) => {
  var stream = fs.createReadStream(fileName);

  stream.on("open", () => {
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    console.error("There's been an error: " + err);
  });
});

server.listen(port);
