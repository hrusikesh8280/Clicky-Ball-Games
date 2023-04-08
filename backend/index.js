const express = require("express");
const { connection } = require("./db");
const { user } = require("./routes/user.routes");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use("/", user);

app.listen(process.env.port, async (req, res) => {
  try {
    await connection;
    console.log("database is running ");
  } catch (error) {
    console.log("database is not running ");
  }
});
