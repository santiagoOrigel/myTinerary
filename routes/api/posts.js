const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// Load User model
const Post = require("../../models/Post");

// @route   POST api/posts/add
// @desc    Add post
// @access  Public
router.post("/add/:mytinerary", (req, res) => {
  const newPost = new Post({
    description: req.body.description,
    mytinerary: req.params.mytinerary
  });
  newPost
    .save()
    .then(newPost => res.json(newPost))
    .catch(err => console.log(err));
});

// @route   GET api/mytineraries/:city
// @desc    Get myTineraries by city
//@access  Public
router.get("/:mytinerary", (req, res) => {
  const mytineraries = null;

  Post.find({ mytinerary: req.params.mytinerary }).then(mytineraries => {
    if (mytineraries.length === 0) {
      return res.status(400).json({
        mytineraries: "No posts for such mytinerary."
      });
    }
    res.json(mytineraries);
  });
});

module.exports = router;
