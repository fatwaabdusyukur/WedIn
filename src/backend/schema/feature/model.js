const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const featureSchema = new Schema({
  feature: String,
  description: String,
  icon: String,
});

const Feature = mongoose.model("feature", featureSchema);
module.exports = Feature;
