const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

require("./db/conn");
// const User = require("./models/userSchema");

app.use(express.json());

//we link the router files
app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000;

// app.get("/about", (req, res) => {
//   console.log("Hello i am about");
//   res.send(`Hello about world from the server`);
// });

app.get("/contact", (req, res) => {
  // res.cookie("Test", "Tuklu");
  res.send(`Hello contact  world from the server`);
});
app.get("/signin", (req, res) => {
  res.send(`Hello signin  world from the server`);
});
app.get("/signup", (req, res) => {
  res.send(`Hello signup world from the server`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("mern-application/build"));
}

//port number
app.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});
