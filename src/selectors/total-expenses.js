const getTotalExpenses = expenses => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return expenses
    .map(expense => {
      const expenseAmountArray = expense.amount;
      return expenseAmountArray;
    })
    .reduce(reducer, 0);
};

export default getTotalExpenses;
