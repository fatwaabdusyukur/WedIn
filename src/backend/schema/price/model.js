const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const priceSchema = new Schema({
  type: String,
  price: String,
  offers: Array,
  description: String,
  color: String,
});

const Price = mongoose.model("price", priceSchema);
module.exports = Price;
