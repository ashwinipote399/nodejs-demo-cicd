const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Ashwini! My Node.js CI/CD pipeline is running successfully.");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});

module.exports = server;
