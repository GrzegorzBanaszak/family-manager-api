import mongoose from "mongoose";

const familySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    familyMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    cash: {
      type: Number,
      default: 0,
      required: true,
    },
    transactions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Family", familySchema);
