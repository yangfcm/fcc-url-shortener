const dns = require("node:dns");
const { URL } = require("node:url");
const short = require("shortid");

const shorternUrl = (req, res) => {
  const { url } = req.body;
  const urlObj = new URL(url);
  dns.lookup(urlObj.hostname, (err, address, family) => {
    if (err) {
      console.log("error happen!!!!");
      return res.json({
        error: "Invalid URL",
      });
    }
    const urlId = short();
    res.json({
      urlId,
    });
  });
};

const parse = (req, res) => {
  res.redirect("https://google.com");
};

module.exports = {
  shorternUrl,
  parse,
};
