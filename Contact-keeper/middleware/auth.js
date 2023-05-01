const jwt = require("jsonwebtoken");
const config = require("config");

// Middleware function
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token"); // Get token from header

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret")); // Verify token
    req.user = decoded.user; // Set req.user to decoded.user
    next(); // Call next middleware
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
