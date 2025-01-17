var express = require("express");
var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.cookie("greeting", "Hi!!!").render("index", { title: "Express" });
// });

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.greeting = "Hi!!!";
  res.render("index", { title: "Express" });
});

router.get("/Dirt", function (req, res, next) {
  res.render("bike", {
    title: "Dirt",
    picture: "images/Dirt.jpg",
    desc: "Средний котёнок в семье. Очень любит футбол. ",
  });
});

router.get("/DownHill", function (req, res, next) {
  res.render("bike", {
    title: "DownHill",
    picture: "images/DH.jpg",
    desc: "Средний котёнок в семье. Очень любит футбол. ",
  });
});

router.get("/Enduro", function (req, res, next) {
  res.render("bike", {
    title: "Enduro",
    picture: "images/Enduro.PNG",
    desc: "Средний котёнок в семье. Очень любит футбол. ",
  });
});

module.exports = router;
