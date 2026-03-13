import React, { useEffect, useState } from "react";
import Balance from "./Components/Balance";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import TransactionHistory from "./Components/TransactionHistory";

const ExpenseTracker = () => {

  // Load transactions from localStorage
  const [transaction, settransaction] = useState(() => {
    const saved = localStorage.getItem("transaction");
    return saved ? JSON.parse(saved) : [];
  });

  // Save transactions to localStorage
  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(transaction));
  }, [transaction]);

  // State for title
  const [text, settext] = useState("");

  // State for amount
  const [addAmount, setaddAmount] = useState("");

  // State for dark mode
  const [darkMode, setdarkMode] = useState(() => {
     // Load darkMode from localStorage
    const saveMode = localStorage.getItem("darkMode");
    return saveMode ? JSON.parse(saveMode) : false;
  });

  // Save darkMode to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Extract only amount values
  const amount = transaction.map((t) => t.amount);

  // Calculate income
  const income = amount
    .filter((a) => a > 0)
    .reduce((acc, item) => acc + item, 0);

  // Calculate expense
  const expense = amount
    .filter((a) => a < 0)
    .reduce((acc, item) => acc + item, 0);

  // Calculate balance
  const balance = income + expense;

  // Add transaction
  const addTransaction = (newTransaction) => {
    settransaction([...transaction, newTransaction]);
  };

  // Delete transaction with confirmation popup
  const deleteTransaction = (id) => {
    const confirmDel = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (confirmDel) {
      settransaction(transaction.filter((t) => t.id !== id));
    }
  };


  return (
    <div
      className={`min-h-screen flex flex-col items-center transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-amber-100 to-orange-200 text-black"
      }`}
    >

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setdarkMode(!darkMode)}
        className="absolute top-4 right-4 px-4 py-2 rounded-full shadow-md transition-all duration-300 bg-indigo-500 hover:bg-indigo-600 text-white font-medium"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Title */}
      <h1 className="font-extrabold text-4xl mt-6 text-indigo-500 tracking-wide">
        Expense Tracker
      </h1>

      {/* Balance Cards */}
      <div
        className={`flex justify-between p-6 rounded-2xl shadow-lg w-[500px] mt-6 backdrop-blur-md transition-all duration-300 ${
          darkMode
            ? "bg-gray-800/80 border border-gray-700"
            : "bg-white/70 border border-gray-200"
        }`}
      >
        <Balance Balances={balance} />
        <Income Income={income} />
        <Expense Expense={expense} />
      </div>

      {/* Add Expense Card */}
      <div
        className={`w-[500px] p-6 mt-6 rounded-2xl shadow-lg transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
        }`}
      >
        <h2 className="font-bold mb-4 text-lg">Add New Expense</h2>

        <div className="flex justify-between mb-3">
          <p className="p-1">Expense Title</p>

          <input
            type="text"
            placeholder="Enter Title..."
            className="w-[300px] p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </div>

        <div className="flex justify-between mb-3">
          <p className="p-1">Amount</p>

          <input
            type="number"
            placeholder="Enter Amount..."
            className="w-[300px] p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={addAmount}
            onChange={(e) => setaddAmount(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="w-[220px] bg-indigo-500 text-white font-medium py-2 rounded-lg mt-4 hover:bg-indigo-600 transition-all duration-300 shadow-md"
            onClick={() => {
              const newTransaction = {
                id: Date.now(),
                text,
                amount: Number(addAmount),
              };

              addTransaction(newTransaction);
              settext("");
              setaddAmount("");
            }}
          >
            Add Expense
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <TransactionHistory
        transaction={transaction}
        deleteTransaction={deleteTransaction}
        darkMode={darkMode}
      />
    </div>
  );
};

export default ExpenseTracker;