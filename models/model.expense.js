import mongoose from "mongoose";

const expenseScheme = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Expense = mongoose.model("Expense", expenseScheme);

export default Expense;
