const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST api/auth
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;
