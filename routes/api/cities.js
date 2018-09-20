const express = require("express");
const router = express.Router();

// @route   GET api/cities/test
// @desc    Tests cities route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Cities Works" }));

// Load City model
const City = require("../../models/City");

// @route   POST api/cities/register
// @desc    Register city
// @access  Public
router.post("/register", (req, res) => {
  City.findOne({ name: req.body.name }).then(city => {
    City.findOne({ country: req.body.country }).then(city => {
      if (city) {
        return res.status(400).json({
          name: "City already exists in such Country.",
          city: city
        });
      } else {
        const newCity = new City({
          name: req.body.name,
          country: req.body.country
        });

        newCity
          .save()
          .then(city => res.json(city))
          .catch(err => console.log(err));
      }
    });
  });
});

// @route   GET api/cities/all
// @desc    Get all cities
// @access  Public
router.get("/all", (req, res) => {
  const cities = [];
  City.find().then(cities => {
    res.json(cities);
  });
});

module.exports = router;
