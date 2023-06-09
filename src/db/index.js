import mongoose from "mongoose";
import { User } from "./models/User.js";
import { Project } from "./models/Project.js";
import { Education } from "./models/Education.js";
import { Award } from "./models/Award.js";
import { Career } from "./models/Career.js";
import { Certificate } from "./models/Certificate.js";
import { Like } from "./models/Like.js";
import { Follow } from "./models/Follow.js";
import { Post } from "./models/Post.js";
import { Message } from "./models/Message.js";
import { DailyMetrics } from "./models/DailyMetrics.js";

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);

export {
  User,
  Project,
  Education,
  Award,
  Career,
  Certificate,
  Like,
  Follow,
  Post,
  Message,
  DailyMetrics,
};
