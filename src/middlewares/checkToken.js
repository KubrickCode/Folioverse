import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const checkToken = (req, res, next) => {
  const authHeader = req.headers["authorization"].split(" ")[1];

  if (!authHeader) {
    return res.status(401).send({ message: "인증 토큰이 없습니다" });
  }

  jwt.verify(authHeader, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "잘못된 토큰 형식입니다" });
    }
    req.user = decoded;
    return next();
  });
};

export default checkToken;
