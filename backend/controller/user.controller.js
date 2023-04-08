const { UserModel } = require("../model/user.model");

const userGet = async (req, res) => {
  let username = req.body?.username;
  let obj = {};
  if (username) {
    obj.username = username;
  }
  console.log(username, obj);
  try {
    let data = await UserModel.find(obj);
    console.log(data);
    if (data.length == 1 && username) {
      res.status(200).send({ msg: "data of a single user", data });
    } else if (data.length == 0 && username) {
      res.status(200).send({
        msg: "user data is not present",
      });
    } else {
      res.status(200).send({ msg: "here is the list of all user", data });
    }
  } catch (error) {
    res.status(400).send({ msg: "not able to get the response" });
  }
};

const userPost = async (req, res) => {
  let { username, score } = req.body;
  if (username && score) {
    let data = new UserModel({ username, score });
    await data.save();
    res.status(200).send({ msg: "data is stored in the database" });
  } else {
    res.status(400).send({ msg: "data provided is not sufficient" });
  }
};
const userPatch = async (req, res) => {
  let { username, score } = req.body;
  if (username && score) {
    let data = await UserModel.findOneAndUpdate(
      { username },
      { username, score },
      { new: true }
    );
    if (data) res.status(200).send({ msg: "data is updated", data });
    else {
      res.status(400).send({ msg: "data is not present, make a post request" });
    }
  } else {
    res.status(400).send({ msg: "data provided is not sufficient" });
  }
};

module.exports = { userGet, userPatch, userPost };
