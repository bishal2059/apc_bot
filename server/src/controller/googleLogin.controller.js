import passport from "passport";

const googleLoginController = passport.authenticate("google", {
  scope: ["profile", "email"],
  prompt: "select_account",
});

const googleRedirectController = function (req, res) {
  res.status(200).redirect("/");
};

export { googleLoginController, googleRedirectController };
