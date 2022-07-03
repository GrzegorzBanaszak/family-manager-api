import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
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
