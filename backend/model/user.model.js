const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, unique: true },
    score: Number,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };
