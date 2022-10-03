const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home");
});

app.post("/hello", (req, res) => {
  console.log({ RequestfromOut: req.body });
  let username = req.query.name;
  console.log({ username: username });
  res.send("Hallo");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
