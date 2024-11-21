const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testMongoose2024");
var schema = mongoose.Schema({ name: String });
schema.methods.meow = function () {
  console.log(this.name + "едит по горам");
};
const Bike = mongoose.model("Bike", schema);
const bikey = new Bike({ name: "Велосипкд" });
bikey.save().then(() => bikey.meow());
