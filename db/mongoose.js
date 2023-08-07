const mongoose = require("mongoose");
require("../config/config.js");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database is connected.");
  });

module.exports = mongoose;
