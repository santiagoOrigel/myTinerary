const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActivitySchema = new Schema({
  mytinery: {
    type: String,
    ref: "mytineraries.title"
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  favorite: {
    type: Boolean,
    required: true
  }
});

module.exports = Activity = mongoose.model("activities", ActivitySchema);
