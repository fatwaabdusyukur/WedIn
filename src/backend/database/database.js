const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

function dbConnection() {
  const PORT = process.env.MONGO_PORT || 7000;
  const HOST = process.env.MONGO_HOST || "localhost";
  const DATABASE = process.env.MONGO_DB;
  const db = mongoose.connection;

  mongoose.connect(`mongodb://${HOST}:${PORT}/${DATABASE}`);
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
}

module.exports = { dbConnection };
