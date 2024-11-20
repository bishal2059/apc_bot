import { use, serializeUser, deserializeUser } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

const callbackURL = process.env.CALLBACK_URL;

use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: callbackURL,
    },

    function (accessToken, refreshToken, profile, done) {
      console.log(accessToken, "\n", refreshToken);
      return done(null, profile);
    }
  )
);

serializeUser((user, done) => {
  done(null, user);
});

deserializeUser((user, done) => {
  done(null, user);
});
