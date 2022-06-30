import mongoose from "mongoose";

const familySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  familyMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  cash: {
    type: Number,
    default: 0,
  },
  transactions:[{value: Number, date: Date, user: String}],
}, { timestamps: true });

export default mongoose.model("Family", familySchema);
