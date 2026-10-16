import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#0088FE",
  "#00C49F",
];

function IncomeCharts({ transactions = [] }) {
  const incomeByCategory = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((totals, transaction) => {
      const category = transaction.category;
      totals[category] = (totals[category] || 0) + Number(transaction.amount);
      return totals;
    }, {});

  const data = Object.entries(incomeByCategory).map(
    ([category, amount], index) => ({
      name: category,
      value: amount,
      color: COLORS[index % COLORS.length],
    }),
  );

  return (
    <section className="chart-panel w-full min-w-0">
      <h2 className="text-xl font-semibold mb-4">Income by Category</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">Add income to see the chart.</p>
      ) : (
        <div className="flex min-w-0 flex-col items-center gap-2 sm:gap-4">
          <div className="h-56 w-full min-w-0 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="78%"
                >
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="flex w-full min-w-0 list-none flex-wrap justify-center gap-x-4 gap-y-2 p-0 text-sm text-gray-600">
            {data.map((entry) => (
              <li key={entry.name} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-3 w-3 shrink-0"
                  style={{ backgroundColor: entry.color }}
                />
                {entry.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default IncomeCharts;
