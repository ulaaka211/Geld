const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  userEmail: String,
  password: String,
  updateAt: Date,
  createdAt: Date,
});

module.exports = {
  User,
};
