const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
