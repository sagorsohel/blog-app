const authRouter = require("express").Router();
const { body } = require("express-validator");
const {
  getLogIn,
  postLogIn,
  postSignIn,
  getSignIn,
  logOut,
} = require("../controllers/authController");
const User = require("../models/User");
const upload =require('../middleware/Upload')
const signUpValidation = [
  body("name")
    .isLength({ min: 2, max: 15 })
    .withMessage("Name must be between 2 and 15 characters long")
    .custom(async (name) => {
      let user = await User.findOne({ name });
      if (user) {
        throw new Error("Name already exists");
      }
    }),
    body('email')
    .isEmail()
    .custom(async email => {
      const existingUser = await User.findByEmail({email});
      if (existingUser) {
        // Will use the below as the error message
        throw new Error('A user already exists with this e-mail address');
      }
    })
];

authRouter.get("/login", getLogIn);

// authRouter.post("/login", postLogIn);

authRouter.post("/signin", upload.single('avatar'), postSignIn);

authRouter.get("/signin", getSignIn);

authRouter.get("/logout", logOut);

module.exports = authRouter;
