import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="w-full min-w-[265px] animate-pulse">
      <div className="rounded-t-2xl p-[14px] lg:p-6 bg-gray-200">
        <div className="flex justify-between mb-4 lg:mb-6">
          <div className="w-1/2 h-6 bg-gray-100"></div>
          <div className="w-10 h-10 rounded-full bg-gray-100"></div>
        </div>
        <div className="flex justify-between gap-16 lg:mb-2">
          <div className="h-4 bg-gray-100 w-1/2"></div>
          <div className="h-4 bg-gray-100 w-1/4"></div>
        </div>
      </div>
      <div className="rounded-b-2xl flex justify-between items-center p-[14px] lg:p-[20px] bg-gray-200">
        <div className="h-6 bg-gray-100 w-3/4"></div>
        <div className="w-12 h-12 rounded-full bg-gray-100"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
