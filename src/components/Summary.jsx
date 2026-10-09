import React from "react";

function Summary({ transactions }) {
  const totalExpenses = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalIncome = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);
  const netBalance = totalIncome - totalExpenses;
  return (
    <div className="bg-white p-6 rounded-lg ring ring-gray-300 w-full max-w-5xl shadow-xl mb-4">
      <div className="text-2xl font-bold">Summary</div>
      <div className="flex justify-between mt-2 gap-2">
        <div className="flex flex-col p-4 ring-1 ring-gray-300 rounded-lg">
          <div className=" text-black/85">Total Income:</div>
          <div className="text-xl"> ₹{totalIncome.toFixed(2)}</div>
        </div>
        <div className="flex flex-col p-4 ring-1 ring-gray-300 rounded-lg">
          <div className="font-semibold text-black/85">Total Expenses:</div>
          <div className="text-xl"> ₹{totalExpenses.toFixed(2)}</div>
        </div>
        <div className="flex flex-col p-4 ring-1 ring-gray-300 rounded-lg">
          <div className="font-semibold text-black/85">Net Balance:</div>
          <div className="text-xl"> ₹{netBalance.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
