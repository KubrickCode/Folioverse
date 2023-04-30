//담당 : 이승현

import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const loginAuthenticate = (email, password) => {
  return new Promise((resolve, reject) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err) {
        reject(err);
      } else if (!user) {
        reject({ status: 400, message: info.message });
      } else {
        const { _id, email } = user;
        const payload = { _id, email };
        const token = signJWT(payload);
        resolve({ user, token });
      }
    })({ body: { email, password } });
  });
};

export const signJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  return token;
};
