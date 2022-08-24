var http = require("http");

var url = process.argv[2];

http.get(url, (res) => {
  var string = "";
  res.setEncoding("utf8");
  res.on("data", (data) => {
    string += data;
  });
  res.on("end", () => {
    console.log(string.length);
    console.log(string);
  });
});
