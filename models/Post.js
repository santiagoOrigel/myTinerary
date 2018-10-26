const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  mytinerary: {
    type: mongoose.Schema.Types.String,
    ref: "mytineraries.title",
    required: false
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: false
  }
});

module.exports = Post = mongoose.model("posts", PostSchema);
