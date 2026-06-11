const http = require("http");
const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

const leaveEmitter = new EventEmitter();

leaveEmitter.on("notificationSend", () => {
  console.log("Email sent to HR");
});

leaveEmitter.on("notificationSend", () => {
  console.log("SMS sent to Manager");
});

const hrResponse = leaveEmitter.on("notificationSend", () => {
  console.log("Now triggered");

  fs.appendFile(
    "leaveLog.html",
    "\nLeave request send to HR department and Manager",
    (err) => {
      if (err) {
        console.log("error");
      } else {
        console.log("Data added");
      }
    },
  );
});

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("No HTML file founded");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/formSubmit" && req.method === "POST") {
    console.log("Hello");

    leaveEmitter.emit("notificationSend");
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<!DOCTYPE html>
<html>
<head>
  <title>Success</title>
</head>
<body>
  <script>
    alert("Your leave application has been submitted!");
  </script>
</body>
</html>`);
  }
});

server.listen(3000, () => {
  console.log("server listening on port", 3000);
});
