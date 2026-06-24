import expenseDb from "../models/model.expense.js";

const expenseAdd = async (req, res) => {
  console.log("I am here");
  const { amount, category, description } = req.body;

  console.log(amount, category, description);
  try {
    const expense = await expenseDb.create({
      amount: req.body.amount,
      category: req.body.category,
      description: req.body.description,
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default expenseAdd;
