const express = require("express");
const router = express.Router();

// @route   GET api/cities/test
// @desc    Tests cities route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "mytineraries Works" }));

// Load City model
const City = require("../../models/City");
// Load Mytinerary model
const Mytinerary = require("../../models/Mytinerary");

// @route   GET api/cities/activity/all
// @desc    Get all activities
// @access  Public
router.get("/all", (req, res) => {
  const cities = [];
  const newCity = new City();
  Mytinerary.find().then(cities => {
    res.json(cities);
  });
});

// @route   GET api/cities/all
// @desc    Get all cities
// @access  Public
router.get("/:city", (req, res) => {
  const mytineraries = null;

  Mytinerary.find({ city: req.params.city })
    .populate("activities")
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
