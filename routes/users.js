// fileName: users.js
// Student Name:Zahra Mirzaei
// Student ID:301326136
// Date:5/30/2023

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
