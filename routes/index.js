var express = require("express");
var router = express.Router();
var User = require("../models/user").User;
// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.cookie("greeting", "Hi!!!").render("index", { title: "Express" });
// });

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   req.session.greeting = "Hi!!!";
//   res.render("index", { title: "Express" });
// });

// /* POST login/registration page. */
// router.post("/logreg", function (req, res, next) {
//   var username = req.body.username;
//   var password = req.body.password;
//   console.log(username);
//   console.log(password);
// });

// /* POST login/registration page. */
// router.post("/logreg", async function (req, res, next) {
//   var username = req.body.username;
//   var password = req.body.password;
//   console.log(username);
//   console.log(password);
//   var users = await User.find({ username: username });
//   console.log(users);
//   if (!users.length) {
//     //res.send("<h1>Пользователь НЕ найден</h1>");
//     var user = new User({ username: username, password: password });
//     await user.save();
//     req.session.user_id = user._id;
//     res.redirect("/");
//   } else {
//     res.send("<h1>Пользователь найден</h1>");
//   }
// });
/* POST login/registration page. */
router.post("/logreg", async function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
  var users = await User.find({ username: username });
  console.log(users);
  if (!users.length) {
    //res.send("<h1>Пользователь НЕ найден</h1>");
    var user = new User({ username: username, password: password });
    await user.save();
    req.session.user_id = user._id;
    res.redirect("/");
  } else {
    //res.send("<h1>Пользователь найден</h1>");
    var foundUser = users[0];
    if (foundUser.checkPassword(password)) {
      req.session.user_id = foundUser._id;
      res.redirect("/");
    } else {
      res.render("logreg", { title: "Вход", error: "Пароль не верный" });
    }
  }
});
/* POST logout. */
router.post("/logout", function (req, res, next) {
  req.session.destroy();
  res.locals.user = null;
  res.redirect("/");
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", counter: req.session.counter });
});

/* GET login/registration page. */
router.get("/logreg", function (req, res, next) {
  res.render("logreg", { title: "Вход" });
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
