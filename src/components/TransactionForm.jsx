import { useState } from "react";
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
      className="bg-white p-4 sm:p-6 rounded-lg ring ring-gray-300 w-full shadow-xl flex flex-col gap-4 items-stretch"
    >
      <div className="text-2xl font-bold">Transaction Form</div>
      <fieldset className="flex flex-wrap gap-3 mt-2 items-center justify-center border-0 p-0">
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
      </fieldset>
      <div className="flex flex-col gap-3 w-full">
        <div className="grid grid-cols-1 gap-2 items-baseline mb-2">
          <label htmlFor="category">Category :</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            required
            className="w-full ring ring-gray-300 rounded-lg py-2 px-2.5"
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
            className="w-full ring ring-gray-300 rounded-lg py-2 px-2.5"
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
            className="w-full ring ring-gray-300 rounded-lg py-2 px-2.5"
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
            className="w-full ring ring-gray-300 rounded-lg py-2 px-2.5"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="w-full sm:w-auto" type="submit">
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
