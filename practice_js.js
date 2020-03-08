const express = require("express");
const app = express();
const PORT = 8080;


app.use(express.static("./"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/practice_html.html');
});

app.get("/app", (req, res) => {
  res.sendFile(__dirname + '/app.js');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Example app listening on port ${PORT}!`);
});