import { Schema, model } from "mongoose";

//CertificateSchema 정의하기
const CertificateSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  agency: { type: String, required: true },
});

const CertificateModel = model("Certificate", CertificateSchema);

export { CertificateModel };


