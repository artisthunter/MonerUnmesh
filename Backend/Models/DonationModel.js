import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  scopeOfEngagement: { type: [String], required: true },
  whateverYouWantDetails: { type: String, required: false },
  othersDetails: { type: String, required: false },
});

const donationModel =
  mongoose.models.donation || mongoose.model("donation", donationSchema);

export default donationModel;
