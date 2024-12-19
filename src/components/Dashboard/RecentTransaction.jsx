import React from 'react';

const RecentTransactions = ({ transactions }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-[25px] w-full max-w-full h-full max-h-[235px]">
      {transactions.map((txn, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-[10px] last:mb-0"
        >
          <div className="flex items-center gap-4">
            <img src={txn.icon} alt="Transaction Icon" className="w-[55px] h-[55px]" />
            <div>
              <p className="font-semibold text-sm sm:text-base">
                {txn.description}
              </p>
              <p className="text-xs sm:text-sm text-[#718EBF]">{txn.date}</p>
            </div>
          </div>
          <p
            className={
              txn.amount > 0
                ? 'text-green-500 font-medium text-sm sm:text-base'
                : 'text-red-500 font-medium text-sm sm:text-base'
            }
          >
            {txn.amount > 0 ? `+$${txn.amount}` : `-$${Math.abs(txn.amount)}`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;
