const authRouter = require("express").Router();

const {
  getLogIn,
  postLogIn,
  postSignIn,
  getSignIn,
  logOut,
} = require("../controllers/authController");



authRouter.get("/login", getLogIn);

authRouter.post("/login", postLogIn);

authRouter.post("/signin", postSignIn);

authRouter.get("/signin", getSignIn);

authRouter.get("/logout", logOut);

module.exports = authRouter;