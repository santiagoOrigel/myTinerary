const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MytinerarySchema = new Schema({
  city: {
    type: String,
    ref: "cities.name"
  },
  title: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts"
    }
  ]
});

module.exports = Mytinerary = mongoose.model("mytineraries", MytinerarySchema);
