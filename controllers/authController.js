const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.getSignIn = (req, res, next) => {
  res.send(`<h1>Hey this is auth page</h1>`);
};
exports.postSignIn = async (req, res, next) => {
  console.log(req.body);
  let { name, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);
    let newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    let user = await newUser.save();
    res.send(`User ${user.name} has been created`);
  } catch (error) {
    console.log(error);
  }
};
exports.postLogIn = (req, res, next) => {};
exports.getLogIn = (req, res, next) => {};
exports.logOut = (req, res, next) => {};
