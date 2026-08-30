import mongoose from "mongoose";

const collaborationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  profession: { type: String, required: true },
  educationalQualification: { type: String, required: true },
  socialServiceExp: { type: String, required: false },
  scopeOfEngagement: { type: [String], required: true },
  othersDetails: { type: String, required: false },
  reasonForService: { type: String, required: true },
  involvementType: { type: String, required: true },
  institutionDetails: { type: String, required: false },
  institutionFile: { type: String, required: false },
});

const collaborationModel =
  mongoose.models.collaboration || mongoose.model("collaboration", collaborationSchema);

export default collaborationModel;
