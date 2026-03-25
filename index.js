import http from "node:http";
import fs from "node:fs";

http
  .createServer((req, res) => {
    let filePath;
    let status = 200;
    if (req.url === "/") {
      filePath = "index.html";
    } else if (req.url === "/about") {
      filePath = "about.html";
    } else if (req.url === "/contact") {
      filePath = "contact.html";
    } else {
      filePath = "404.html";
      status = 404;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/html" });
        return res.end("<h1>Server Error</h1>");
      }
      res.writeHead(status, { "content-type": "text/html" });
      res.end(data);
    });
  })
  .listen(8080);
