const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.getSignIn = (req, res, next) => {
  res.send(`<h1>Hey this is auth page</h1>`);
};
exports.postSignIn = async (req, res, next) => {
  
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
exports.postLogIn = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Invalid email or password");
    }

   
    res.send("Logged in successfully");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getLogIn = (req, res, next) => {};
exports.logOut = (req, res, next) => {};
