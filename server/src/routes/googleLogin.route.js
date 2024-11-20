import { Router } from "express";
import passport from "passport";
import {
  googleLoginController,
  googleRedirectController,
} from "../controller/googleLogin.controller.js";

const googleLogin = Router();

googleLogin.get("/", googleLoginController);
googleLogin.get(
  "/redirect",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  googleRedirectController
);

export default googleLogin;
