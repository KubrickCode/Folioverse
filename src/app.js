//담당 : 이승현

import express from "express";
import cors from "cors";
import { initializePassport } from "./passport/index.js";

const app = express();

app.use(cors());
app.use(express.json());

const passport = initializePassport();
app.use(passport.initialize());

app.get("/", (req, res) => res.send("Hello, Express"));

import authRouter from "./routes/auth/index.js";
import dummyRouter from "./routes/dummy/index.js";

app.use("/api/auth", authRouter);
app.use("/api/dummy", dummyRouter);

import userRouter from "./routes/userRouter.js";
import projectRouter from "./routes/projectRouter.js";
import certificateRouter from "./routes/certificateRouter.js";
import awardRouter from "./routes/awardRouter.js";
import educationRouter from "./routes/educationRouter.js";
import checkToken from "./middlewares/checkToken.js";

app.use("/api/user", userRouter);
app.use("/api/project", checkToken, projectRouter);
app.use("/api/education", checkToken, educationRouter);
app.use("/api/certificate", checkToken, certificateRouter);
app.use("/api/award", checkToken, awardRouter);

app.use((err, req, res, next) => {
  console.error(err);
});

app.listen(3000, () => {
  console.log("3000번 포트에서 Express 서버 실행중");
});
