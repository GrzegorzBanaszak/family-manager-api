import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Transaction", transactionSchema);
