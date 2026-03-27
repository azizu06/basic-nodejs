const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname }, (err) => {
    if (err) res.status(500).send("Server error");
  });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: __dirname }, (err) => {
    if (err) res.status(500).send("Server error");
  });
});

app.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root: __dirname }, (err) => {
    if (err) res.status(500).send("Server error");
  });
});

app.use((req, res) => {
  res.status(404).sendFile("404.html", { root: __dirname }, (err) => {
    if (err) res.status(500).send("Server error");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
