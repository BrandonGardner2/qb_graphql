const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarketSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  cards: {
    type: Number,
    default: 0
  }
});

module.exports = new mongoose.model("Market", MarketSchema);
