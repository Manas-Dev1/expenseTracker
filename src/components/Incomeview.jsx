import { useState } from "react";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

function Incomeview({ transactions, handleDelete }) {
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  const income = transactions
    .filter((tx) => tx.type === "income")
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return (
    <section className="w-full min-w-0 md:px-4">
      <h2 className="text-xl font-bold mb-2 lg:mb-0 lg:hidden">Income List</h2>
      {income.length === 0 ? (
        <p className="text-gray-500">No income yet.</p>
      ) : (
        <ul className="transaction-grid expense-transaction-grid list-none p-0">
          {income.map((tx) => (
            <li
              key={tx.id}
              className="transaction-card py-3 ring ring-gray-300 rounded-lg px-4 hover:shadow-xl relative"
            >
              <div className="font-bold">{tx.category}</div>
              <div className="text-lg">+₹{Number(tx.amount).toFixed(2)}</div>
              <div className="transaction-description">{tx.description}</div>
              <div className="text-sm text-gray-500">
                {new Date(tx.date).toLocaleDateString()}
              </div>
              <button
                type="button"
                aria-label={`Delete ${tx.category} transaction`}
                className="transaction-delete absolute top-1 right-1 rounded-full transition duration-300"
                onClick={() => setTransactionToDelete(tx)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <DeleteConfirmationDialog
        transaction={transactionToDelete}
        onCancel={() => setTransactionToDelete(null)}
        onConfirm={() => {
          handleDelete(transactionToDelete.id);
          setTransactionToDelete(null);
        }}
      />
    </section>
  );
}

export default Incomeview;
