var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bike2024");
var session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

//
var bikes = require("./routes/bikes");

//
var app = express();

// -------
var MongoStore = require("connect-mongo");
// -------
// view engine setup

app.engine("ejs", require("ejs-locals"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//
app.use(
  session({
    secret: "Bike",
    cookie: { maxAge: 60 * 3000 },
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/bike2024" }),
  })
);
//
//
app.use("/", indexRouter);
app.use("/users", usersRouter);

//
app.use("/bikes", bikes);
//

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
  res.render("error", { title: "Bike" });
});

module.exports = app;
