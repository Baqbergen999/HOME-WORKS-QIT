const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/about", (req, res) => {
  res.send("It's information about the server.");
});

app.get("/api/info", (req, res) => {
  res.json({
    developer: "Bakha",
    subject: "Express"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
