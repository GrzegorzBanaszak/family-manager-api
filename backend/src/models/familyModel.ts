import mongoose from "mongoose";

const familySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  familyMombers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  cash: {
    type: Number,
    default: 0,
  },
});
