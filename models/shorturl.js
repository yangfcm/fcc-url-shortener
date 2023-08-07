const mongoose = require("mongoose");

const ShortUrlSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
});

const ShortUrl = mongoose.model("ShortUrl", ShortUrlSchema);

module.exports = ShortUrl;
