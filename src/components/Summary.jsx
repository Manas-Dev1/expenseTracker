function Summary({ transactions }) {
  const totalExpenses = transactions.filter((tx) => tx.type === "expense").reduce((sum, tx) => sum + Number(tx.amount), 0);
  const totalIncome = transactions.filter((tx) => tx.type === "income").reduce((sum, tx) => sum + Number(tx.amount), 0);
  const netBalance = totalIncome - totalExpenses;
  return (
    <section className="bg-white p-4 sm:p-6 rounded-lg ring ring-gray-300 w-full shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold">Summary</h2>
      <div className="summary-metrics mt-3">
        <Metric label="Total Income:" amount={totalIncome} />
        <Metric label="Total Expenses:" amount={totalExpenses} />
        <Metric label="Net Balance:" amount={netBalance} />
      </div>
    </section>
  );
}

function Metric({ label, amount }) {
  return <div className="summary-metric flex flex-col p-3 sm:p-4 ring-1 ring-gray-300 rounded-lg"><div className="font-semibold text-black/85">{label}</div><div className="text-lg sm:text-xl">₹{amount.toFixed(2)}</div></div>;
}

export default Summary;
