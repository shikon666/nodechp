var http = require("http"),
  url = require("url"),
  port = process.argv[2];

var server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  var query = url.parse(request.url, true),
    path = query["pathname"].split("/"),
    time = new Date(query.query.iso);
  if (path[2] === "unixtime") {
    var unixtime = { unixtime: time.getTime() };
    response.write(JSON.stringify(unixtime));
    response.end();
  } else if (path[2] === "parsetime") {
    var parseTime = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
    response.write(JSON.stringify(parseTime));
  } else {
    response.end(error);
  }
});

server.listen(port);
