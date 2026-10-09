import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <nav aria-label="Transaction views" className="flex w-full flex-wrap justify-center gap-2 sm:gap-3">
      <button
        className={`${activeTab === "expenses" ? "active" : ""} flex-1 sm:flex-none`}
        onClick={() => setActiveTab("expenses")}
      >
        Expenses
      </button>
      <button
        className={`${activeTab === "income" ? "active" : ""} flex-1 sm:flex-none`}
        onClick={() => setActiveTab("income")}
      >
        Income
      </button>
      <button
        className={`${activeTab === "add-transaction" ? "active" : ""} flex-1 sm:flex-none`}
        onClick={() => setActiveTab("add-transaction")}
      >
        Add Transaction
      </button>
    </nav>
  );
}

export default Tabs;
