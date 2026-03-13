import React from "react";

const TransactionHistory = ({ transaction, deleteTransaction, darkMode}) => {

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-[500px] mx-auto">

            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Transaction History
            </h2>

            <hr className={`${darkMode ? "text-black" : "text-black"}`} />

            {transaction.map((t) => (
                <div key={t.id} className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">{t.text}</span>

                    <div className="flex items-center gap-4">
                        <span className="text-red-500 font-semibold">₹ {t.amount}</span>

                        <button className="text-gray-400 hover:text-red-500" onClick={() => deleteTransaction(t.id)}>
                            x
                        </button>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default TransactionHistory;