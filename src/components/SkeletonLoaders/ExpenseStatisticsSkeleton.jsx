import React from 'react';

const ExpenseStatisticsSkeleton = ({ circle = true }) => (
  <div className="bg-gray-200 lg:p-6 rounded-2xl min-h-[300px] lg:min-h-[336px] flex justify-center items-center">
    <div className="animate-pulse flex flex-col items-center">
      {circle ? (
        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-100 rounded-full"></div>
      ) : (
        <div className="w-full h-56 bg-gray-100"></div>
      )}
      <div className="mt-6 flex flex-col space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-4 w-24 bg-gray-100 rounded-md"></div>
        ))}
      </div>
    </div>
  </div>
);

export default ExpenseStatisticsSkeleton;
