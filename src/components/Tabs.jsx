import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-7 justify-around items-center">
      <button
        className={activeTab === "expenses" ? "active" : ""}
        onClick={() => setActiveTab("expenses")}
      >
        Expenses
      </button>
      <button
        className={activeTab === "income" ? "active" : ""}
        onClick={() => setActiveTab("income")}
      >
        Income
      </button>
      <button
        className={activeTab === "add-transaction" ? "active" : ""}
        onClick={() => setActiveTab("add-transaction")}
      >
        Add Transaction
      </button>
    </div>
  );
}

export default Tabs;
