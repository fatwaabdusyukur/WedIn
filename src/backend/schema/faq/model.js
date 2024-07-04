const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const faqSchema = new Schema({
  question: String,
  answer: String,
  type: String,
});

const Faq = mongoose.model("faq", faqSchema);
module.exports = Faq;
