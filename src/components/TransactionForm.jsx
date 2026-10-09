import { useState } from "react";
import "../app.css";
function TransactionForm({ setTransactions }) {
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const newTransaction = {
      id: crypto.randomUUID(),
      type,
      category,
      amount: Number(amount),
      description,
      date,
    };
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
    setType("expense");
    setCategory("");
    setAmount("");
    setDescription("");
    setDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg ring ring-gray-300 w-11/12 max-w-5xl shadow-xl mb-4 flex flex-col gap-4 justify-center items-center"
    >
      <div className="text-2xl font-bold">Transaction Form</div>
      <div className="flex gap-3 mt-2 items-center justify-center">
        <label>Type:</label>
        <input
          type="radio"
          id="expense"
          name="type"
          value="expense"
          checked={type === "expense"}
          onChange={() => setType("expense")}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="income"
          checked={type === "income"}
          onChange={() => setType("income")}
        />
        <label htmlFor="income">Income</label>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="grid grid-cols-1 gap-2 items-baseline mb-2">
          <label htmlFor="category">Category :</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            className="ring ring-gray-300 rounded-lg py-1 px-2.5"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-2 items-baseline mb-2">
          <label htmlFor="amount">Amount :</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            required
            min="0.01"
            step="0.01"
            onChange={(e) => setAmount(e.target.value)}
            className="ring ring-gray-300 rounded-lg py-1 px-2.5"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 items-baseline mb-2">
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="ring ring-gray-300 rounded-lg py-1 px-2.5"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 items-baseline mb-2">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="ring ring-gray-300 rounded-lg py-1 px-2.5"
          />
        </div>
      </div>
      <div>
        <button type="submit">
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
