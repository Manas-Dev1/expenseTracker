import { useState } from "react";

function getTodayString() {
  const today = new Date();
  return [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");
}

function TransactionForm({ setTransactions }) {
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(getTodayString);
  function handleSubmit(event) {
    event.preventDefault();
    const trimmedCategory = category.trim();
    const parsedAmount = Number(amount);

    if (
      trimmedCategory.length < 1 ||
      trimmedCategory.length > 32 ||
      !Number.isFinite(parsedAmount) ||
      parsedAmount < 1 ||
      description.length > 64
    ) {
      return;
    }

    const newTransaction = {
      id: crypto.randomUUID(),
      type,
      category: trimmedCategory,
      amount: parsedAmount,
      description: description.trim() || trimmedCategory,
      date: date || getTodayString(),
    };
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
    setType("expense");
    setCategory("");
    setAmount("");
    setDescription("");
    setDate(getTodayString());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 sm:p-6 rounded-lg ring ring-gray-300 w-full shadow-xl flex flex-col gap-4 items-stretch max-w-4xl self-center"
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
            minLength={1}
            maxLength={32}
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
            min="1"
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
            maxLength={64}
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
      <div className="flex ">
        <button
          className="w-full sm:w-1/2 sm:mx-auto ring ring-gray-300"
          type="submit"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
