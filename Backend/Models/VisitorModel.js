import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    visitorId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    firstVisit: {
      type: Date,
      default: Date.now,
    },
    lastSeen: {
      type: Date,
      default: Date.now,
      index: true,
    },
    visitCount: {
      type: Number,
      default: 1,
    },
  },

  {
    timestamps: true,
  },
);

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;
