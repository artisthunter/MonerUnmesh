import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  dobDay: { type: Number, required: true },
  dobMonth: { type: String, required: true },
  dobYear: { type: Number, required: true },
  qualification: { type: String, required: true },
  reference: { type: String, required: true },
  otherActivities: { type: String, required: false },
  fullNameCapital: { type: String, required: true },
  declarationDate: { type: Date, required: false },

  addressProof: { type: String, required: true },
  ageProof: { type: String, required: true },
  madhyamikCert: { type: String, required: true },
  higherSecondaryCert: { type: String, required: true },
  degreeCert: { type: String, required: false },
  masterDegreeCert: { type: String, required: false },
  otherQualificationCert: { type: String, required: false },
  casteCertificate: { type: String, required: false },
  referenceCertificate: { type: String, required: true },
});

const queryModel =
  mongoose.models.query || mongoose.model("query", querySchema);

export default queryModel;
