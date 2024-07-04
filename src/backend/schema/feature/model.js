const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const featureSchema = new Schema({
  feature: String,
  description: String,
  icon: String,
});

const Feature = mongoose.model("web_features", featureSchema);
module.exports = Feature;
