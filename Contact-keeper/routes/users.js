const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const config = require("config");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() });
    }

    const { name, email, password } = req.body;
    try {
      // Check if user exists
      let user = await User.findOne({ email });

      // Check if user exists
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // Create new user
      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt); // Encrypt password

      await user.save(); // Save user to database

      // Create payload
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Sign token and send it back to client it takes 3 parameters (payload, secret, options, callback)
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
