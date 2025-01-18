var express = require("express");
var router = express.Router();
var Bike = require("../models/bike").Bike;
// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("Новый маршрутизатор, для маршрутов, начинающихся с bikes");
// });

// /* Страница */
// router.get("/:nick", function (req, res, next) {
//   res.send(req.params.nick);
// });

//
var express = require("express");
var router = express.Router();
var Bike = require("../models/bike").Bike;
var checkAuth = require("../middlewares/checkAuth.js");
//
router.get("/:nick", checkAuth, async function (req, res, next) {
  console.log("Z pltcm");
  var bikes = await Bike.find({ nick: req.params.nick });
  console.log(bikes);
  if (!bikes.length) return next(new Error("/////"));
  var bikes = bikes[0];
  res.render("bike", {
    title: bikes.title,
    picture: bikes.avatar,
    desc: bikes.desc,
  });
});

module.exports = router;
