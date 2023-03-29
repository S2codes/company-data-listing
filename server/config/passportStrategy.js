import passport from "passport";
import dotenv from "dotenv";
dotenv.config();
import strategy from "passport-facebook";
import User from "../models/User.js";

//implementation of login with facebook
const FacebookStrategy = strategy.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async function (accessToken, refreshToken, profile, done) {
      const foundUser = await User.findOne({ facebookId: profile.id });
      if (foundUser) {
        console.log("found user line 29 passportStrategy.js", foundUser);
        done(null, foundUser);
      } else {
        const newUser = await User.create({
          socialId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        });
        console.log("new user line 37 passportStrategy.js", newUser);
        done(null, newUser);
      }
    }
  )
);
