function ExpenseView({ transactions, handleDelete }) {
  const expenses = transactions.filter((tx) => tx.type === "expense");
  return (
    <section className="w-full min-w-0">
      <h2 className="text-xl font-bold mb-2">Expenses List</h2>
      {expenses.length === 0 ? <p className="text-gray-500">No expenses yet.</p> : (
        <ul className="transaction-grid list-none p-0">
          {expenses.map((tx) => (
            <li key={tx.id} className="transaction-card py-3 flex flex-col justify-center items-center gap-1 ring ring-gray-300 rounded-lg px-4 hover:shadow-xl relative">
              <div className="font-bold">{tx.category}</div>
              <div className="text-lg">₹{Number(tx.amount).toFixed(2)}</div>
              <div className="transaction-description">{tx.description}</div>
              <div className="text-sm text-gray-500">{new Date(tx.date).toLocaleDateString()}</div>
              <button type="button" aria-label={`Delete ${tx.category} transaction`} className="transaction-delete absolute top-1 right-1 rounded-full transition duration-300" onClick={() => handleDelete(tx.id)}><span aria-hidden="true">×</span></button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ExpenseView;
