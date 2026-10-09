import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#0088FE",
  "#00C49F",
];

function ExpenseCharts({ transactions = [] }) {
  // Keep only expenses
  const expenses = transactions.filter(
    (transaction) => transaction.type === "expense",
  );

  // Group expenses by category
  const categoryData = expenses.reduce((acc, transaction) => {
    const category = transaction.category;

    if (!acc[category]) {
      acc[category] = 0;
    }

    acc[category] += Number(transaction.amount);

    return acc;
  }, {});

  // Convert object into array for Recharts
  const data = Object.entries(categoryData).map(([category, amount], index) => ({
    name: category,
    value: amount,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div className="w-full h-87.5">
      <h2 className="text-xl font-semibold mb-4">Expenses by Category</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">Add an expense to see the chart.</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={(props) => (
                <text
                  {...props}
                  fill={COLORS[props.index % COLORS.length]}
                >
                  {props.value}
                </text>
              )}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              content={({ payload = [] }) => (
                <ul className="flex flex-wrap justify-center gap-4">
                  {payload.map((entry) => (
                    <li
                      key={entry.value}
                      className="flex items-center gap-2 text-gray-500"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-3 w-3"
                        style={{ backgroundColor: entry.color }}
                      />
                      {entry.value}
                    </li>
                  ))}
                </ul>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ExpenseCharts;
