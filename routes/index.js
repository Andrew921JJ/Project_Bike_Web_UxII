var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/Dirt", function (req, res, next) {
  res.send("<h1>Dirt Bike</h1>");
});
router.get("/DownHill", function (req, res, next) {
  res.send("<h1>DownHill Bike</h1>");
});
router.get("/Enduro", function (req, res, next) {
  res.send("<h1>Enduro Bike</h1>");
});

module.exports = router;
