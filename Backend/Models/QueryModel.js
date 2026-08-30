import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  involvementType: { type: String, required: true },
  institutionName: { type: String, required: false },
  query: { type: String, required: true },
});

const queryModel =
  mongoose.models.query || mongoose.model("query", querySchema);

export default queryModel;
