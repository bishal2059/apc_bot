import passport from "passport";

const googleLoginController = function (req, res) {
  passport.authenticate("google", {
    scope: ["profile", "email"],
  });
};

const googleRedirectController = function (req, res) {
  res.status(200).redirect("/");
};

export { googleLoginController, googleRedirectController };
