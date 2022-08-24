var http = require("http");
// create empty array to store result from each url
var results = [];
// get all but the first 2 arguments
var urls = process.argv.slice(2);
// get length of remaining arguments (urls)
var counter = urls.length;

var httpGet = (index) => {
  http.get(urls[index], (res) => {
    res.setEncoding("utf8");
    var tempData = ""; // create empty holder for data.
    res.on("data", (data) => {
      tempData += data; // append current data segment.
    });
    res.on("end", () => {
      results[index] = tempData; // put the data into the array
      counter--;
      if (!counter) {
        results.forEach((data) => {
          console.log(data);
        });
      }
    });
    res.on("error", (err) => {
      console.error("There has been an error: " + err);
    });
  });
};

urls.forEach((val, i) => {
  // loop through all the urls calling httpGet with curr index
  // this is necessary for order to be maintained with async
  httpGet(i);
});
