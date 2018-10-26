const express = require("express");
const router = express.Router();

// @route   GET api/cities/test
// @desc    Tests cities route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "mytineraries Works" }));

// Load Post model
const Post = require("../../models/Post");
// Load Mytinerary model
const Mytinerary = require("../../models/Mytinerary");

// @route   GET api/mytineraries/all
// @desc    Get All myTineraries
// @access  Public
router.get("/all", (req, res) => {
  const myTineraries = [];
  Mytinerary.find().then(myTineraries => {
    res.json(myTineraries);
  });
});

/* THIS WORKS.
// @route   GET api/mytineraries/:city
// @desc    Get myTineraries by city
// @access  Public
router.get("/:city", (req, res) => {
  const mytineraries = null;

  Mytinerary.find({ city: req.params.city })
    //.populate("activities")
    .then(mytineraries => {
      if (mytineraries.length === 0) {
        return res.status(400).json({
          mytineraries: "No mytineraries for such City."
        });
      }
      res.json(mytineraries);
    });
});*/

//TRY TO GET MYTINERARIES BELONGING A CITY WITH ITS POSTS:
router.get("/:city", (req, res) => {
  const mytineraries = null;

  Mytinerary.find({ city: req.params.city })
    .populate("posts")

    .then(mytineraries => {
      if (mytineraries.length === 0) {
        return res.status(400).json({
          mytineraries: "No mytineraries for such City."
        });
      }
      res.json(mytineraries);
    });
});

module.exports = router;
