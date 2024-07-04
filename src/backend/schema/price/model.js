const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const priceSchema = new Schema({
  type: String,
  price: String,
  offers: Array,
});

const Price = mongoose.model("price_package", priceSchema);
module.exports = Price;
