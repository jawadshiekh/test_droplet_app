require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  res.send("lorem ipsum dolor .......");
});

app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}......`));
