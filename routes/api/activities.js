const express = require("express");
const router = express.Router();

// @route   GET api/activities/test
// @desc    Tests activities route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "activities Works" }));

// Load Mytinerary model
const Activity = require("../../models/Activity");
// Load Mytinerary model

const Post = require("../../models/Post");

// @route   GET api/mytineraries/all
// @desc    Get All myTineraries
// @access  Public
router.get("/all", (req, res) => {
  const myTineraries = [];
  Activity.find().then(myTineraries => {
    res.json(myTineraries);
  });
});

// @route   GET api/mytineraries/:city
// @desc    Get myTineraries by city
//@access  Public
router.get("/:mytinerary", (req, res) => {
  const mytineraries = null;

  Activity.find({ mytinerary: req.params.mytinerary }).then(mytineraries => {
    if (mytineraries.length === 0) {
      return res.status(400).json({
        mytineraries: "No mytineraries for such mytinerary."
      });
    }
    res.json(mytineraries);
  });
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
