const expenseAdd = (req, res) => {
  console.log(req.body);

  const amount = Number(req.body.amount);
  let expenseToAdd = 0;

  expenseToAdd += amount;

  res.send(expenseToAdd.toString());
};

export default expenseAdd;
