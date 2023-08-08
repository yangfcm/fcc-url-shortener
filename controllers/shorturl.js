const dns = require("node:dns");
const { URL } = require("node:url");
const short = require("shortid");
const ShortUrl = require("../models/shorturl");

const shorternUrl = async (req, res) => {
  const { url } = req.body;
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch (err) {
    return res.json({
      error: "Invalid URL",
    });
  }
  dns.lookup(urlObj.hostname, async (err, address, family) => {
    if (err) {
      return res.json({
        error: "Invalid URL",
      });
    }
    try {
      const foundItem = await ShortUrl.findOne({ originalUrl: urlObj.href });
      if (foundItem) {
        return res.json({
          original_url: foundItem.originalUrl,
          short_url: foundItem.urlId,
        });
      }
      const urlId = short();
      newItem = new ShortUrl({
        originalUrl: urlObj.href,
        urlId,
      });
      await newItem.save();
      res.json({
        original_url: newItem.originalUrl,
        short_url: newItem.urlId,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        error: "Server error",
      });
    }
  });
};

const parse = async (req, res) => {
  const { urlId } = req.params;
  const foundItem = await ShortUrl.findOne({ urlId });
  if (!foundItem) {
    return res.status(400).json({
      error: "No short URL found for the given input",
    });
  }
  res.redirect(foundItem.originalUrl);
};

module.exports = {
  shorternUrl,
  parse,
};
