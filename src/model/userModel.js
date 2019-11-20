const mongoose = require("mongoose");

// User model
module.exports = User = mongoose.model("user", {
  firstname: String,
  email: String,
  password: String
});