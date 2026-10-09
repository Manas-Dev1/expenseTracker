import React from "react";

function Header() {
  return (
    <header className="w-full min-w-0">
      <h1 className="text-center text-2xl sm:text-3xl font-bold">Expense Tracker</h1>
      <p className="text-center text-sm sm:text-base text-gray-600 mt-1">
        Track your expenses and income
      </p>
    </header>
  );
}

export default Header;
