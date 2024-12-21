import React from 'react';

const ChartSkeletonLoader = () => {
  return (
    <div className="bg-gray-200 lg:p-6 rounded-[25px] w-full h-[287px] flex items-center justify-center animate-pulse">
      <div className="w-full h-full">
        <div className="h-4 bg-gray-100 rounded mb-4 w-3/4"></div>
        <div className="flex space-x-4 h-full">
          <div className="flex flex-col justify-between h-full max-h-52">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-6 h-2 bg-gray-100 rounded"></div>
            ))}
          </div>
          <div className="flex-1 bg-gray-100 rounded h-full max-h-52"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartSkeletonLoader;
