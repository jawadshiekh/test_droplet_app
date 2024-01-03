require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

app.use(cors());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todos",
  port: 3306,
});

app.get("/", async (req, res) => {
  const [todos] = await pool.query(`SELECT * FROM todos`);

  res.send(todos);
});

app.get("/about", function (req, res) {
  res.send("lorem ipsum dolor .......");
});

app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}......`));
