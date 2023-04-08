const express = require("express");
const { UserModel } = require("../model/user.model");
const {
  userGet,
  userPost,
  userPatch,
} = require("../controller/user.controller");
const user = express.Router();

// auth.post('/user', user)

user.get("/", userGet);

user.post("/", userPost);

user.patch("/", userPatch);

module.exports = { user };
