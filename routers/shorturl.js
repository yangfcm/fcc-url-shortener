const { shorternUrl, parse } = require("../controllers/shorturl");

const express = require("express");

const router = new express.Router();

router.post("/shorturl", shorternUrl);
router.get("/shorturl/:code", parse);

module.exports = router;
