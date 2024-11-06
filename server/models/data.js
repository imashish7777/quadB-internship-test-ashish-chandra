const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

const datamodel = mongoose.model("data", dataSchema);
module.exports = datamodel;
