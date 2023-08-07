const shorternUrl = (req, res) => {
  console.log(req.body);
  res.json("shortern url");
};

const parse = (req, res) => {
  res.redirect("https://google.com");
};

module.exports = {
  shorternUrl,
  parse,
};
