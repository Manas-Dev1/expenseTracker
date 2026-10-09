function Incomeview({ transactions, handleDelete }) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-2">Income List</h2>
      <ul className="flex gap-3.5 flex-wrap mt-2">
        {transactions
          .filter((tx) => tx.type === "income")
          .map((tx) => (
            <li
              key={tx.id}
              className="w-50 py-3 flex flex-col justify-center items-center gap-1 ring ring-gray-300 rounded-lg px-4 hover:shadow-xl relative"
            >
              <div className="font-bold">{tx.category}</div>
              <div className="text-lg">₹{tx.amount.toFixed(2)}</div>
              <div>{tx.description}</div>
              <div className="text-sm text-gray-500">
                {new Date(tx.date).toLocaleDateString()}
              </div>
              <div
                className="text-red-500 font-bold ring px-2 rounded-2xl pb-0.5 absolute top-1.5 right-1.5 hover:bg-red-500 hover:text-white transition duration-300 cursor-pointer"
                onClick={() => handleDelete(tx.id)}
              >
                X
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Incomeview;
