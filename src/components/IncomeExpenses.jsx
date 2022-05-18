function IncomeExpenses() {
  return (
    <div className="income-expenses">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="income-expenses__money plus">
          +$0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="income-expenses__money minus">
          -$0.00
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
