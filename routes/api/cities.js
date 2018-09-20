const express = require("express");
const router = express.Router();

// @route   GET api/cities/test
// @desc    Tests cities route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Cities Works" }));

// Load City model
const User = require("../../models/City");

// @route   GET api/cities/register
// @desc    Register city
// @access  Public
router.post("/register", (req, res) => {
  User.findOne({ name: req.body.name }).then(city => {
    if (city) {
      return res.status(400).json({ email: "City already exists" });
    }
    User.findOne({ country: req.body.countr }).then(country => {
      if (country) {
        return res.status(400).json({ email: "City already exists" });
      } else {
        const neCity = new City({
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
module.exports = router;
