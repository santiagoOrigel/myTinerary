const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

module.exports = City = mongoose.model("cities", CitySchema);
