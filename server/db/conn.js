//mongodb connection

const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: false,
    useUnifiedTopology: false,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.error("Connection error:", err));
