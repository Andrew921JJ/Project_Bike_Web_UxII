// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/testMongoose2024");
// var schema = mongoose.Schema({ name: String });
// schema.methods.ride = function () {
//   console.log(this.name + "едит по горам");
// };
// const Bike = mongoose.model("Bike", schema);
// const bikey = new Bike({ name: "Велосипeд " });
// bikey.save().then(() => bikey.ride());

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testMongoose2024");
var Bike = require("./models/bike.js").Bike;
var bike = new Bike({
  title: "GT",
  nick: "Dirt",
});

bike.save().then(() => console.log("hi"));
