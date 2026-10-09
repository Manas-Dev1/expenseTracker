import { useState, useEffect } from "react";
import "./App.css";
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
    <div className="mx-auto w-11/12 max-w-5xl p-4 flex flex-col gap-4 justify-center items-center">
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
      {console.log(transactions)}
    </div>
  );
}

export default App;
