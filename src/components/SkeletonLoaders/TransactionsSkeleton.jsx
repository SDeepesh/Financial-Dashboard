import React from 'react';

const TransactionsSkeleton = () => {
  return (
    <div className="bg-gray-300 p-4 sm:p-6 rounded-[25px] w-full max-w-full h-full max-h-[235px] animate-pulse">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-[10px] last:mb-0"
        >
          <div className="flex items-center gap-4">
            <div className="w-[55px] h-[55px] rounded-full bg-gray-200"></div>
            <div>
              <div className="h-4 bg-gray-200 w-36 mb-1"></div>
              <div className="h-4 bg-gray-200 w-24"></div>
            </div>
          </div>
          <div className="h-4 bg-gray-200 w-12"></div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsSkeleton;
