const dns = require("node:dns");
const { URL } = require("node:url");

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
    res.json("shortern url");
  });
};

const parse = (req, res) => {
  res.redirect("https://google.com");
};

module.exports = {
  shorternUrl,
  parse,
};
