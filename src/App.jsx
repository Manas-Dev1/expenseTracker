import { useState, useEffect } from "react";
import {
  ExpenseCharts,
  ExpenseView,
  Incomeview,
  Tabs,
  TransactionForm,
  Header,
  Summary,
} from "./components";
function App() {
  // const [transactions, setTransactions] = useState([]);
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  const [activeTab, setActiveTab] = useState("expenses");
  function handleDelete(id) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((tx) => tx.id !== id),
    );
  }
  return (
    <main className="app-shell">
      <Header />
      <Summary transactions={transactions} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "expenses" && (
        <>
          <ExpenseCharts transactions={transactions} />
          <ExpenseView
            transactions={transactions}
            handleDelete={handleDelete}
          />
        </>
      )}
      {activeTab === "income" && (
        <Incomeview transactions={transactions} handleDelete={handleDelete} />
      )}
      {activeTab === "add-transaction" && (
        <TransactionForm setTransactions={setTransactions} />
      )}
    </main>
  );
}

export default App;
