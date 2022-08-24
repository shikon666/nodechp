var net = require("net");

var server = net.createServer((socket) => {
  var normalize = (arg) => (arg < 10 ? "0" + arg : arg);

  var now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    day = now.getDay(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    result = "";

  month = normalize(month);
  day = normalize(day);
  hours = normalize(hours);
  minutes = normalize(minutes);

  result += year + "-" + month + "-" + day + "-" + hours + "-" + minutes + "\n";
  socket.write(result);
  socket.end();
});

server.listen(process.argv[2]);
