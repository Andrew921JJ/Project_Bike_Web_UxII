const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testMongoose2024");
const Bike = mongoose.model("bike", { name: String });
const bike = new bike({ name: "Enduero" });
bike.save().then(() => console.log("lll"));
