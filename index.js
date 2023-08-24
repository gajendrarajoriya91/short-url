const express = require("express");
require("dotenv").config();
const shortid = require("shortid");
const createHttpErrors = require("http-errors");
const path = require("path");
const exp = require("constants");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/url", async (req, res) => {
  res.render("home");
});

app.post("/url", async (req, res) => {
  console.log(req.body);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Server Error : ${err}`);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
