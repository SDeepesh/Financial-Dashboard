import React from 'react';

const QuickTransferSkeleton = () => {
  return (
    <div className="bg-gray-200 xl:pt-[35px] xl:pb-[35px] xl:p-6 rounded-[25px] w-full animate-pulse">
      <div className="flex items-center gap-[33px] mb-[30px]">
        <div className="flex items-center space-x-[36px] overflow-x-scroll scroll-smooth w-full hide-scrollbar">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-max cursor-pointer"
            >
              <div className="w-[70px] h-[70px] rounded-full bg-gray-300 mb-4"></div>
              <div className="w-16 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-12 h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
        <button
          className="bg-gray-300 shadow-lg rounded-full p-[22px] max-w-[50px] max-h-[50px]"
          aria-hidden="true"
        ></button>
      </div>
      <div className="flex items-center gap-[24px]">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
        <div className="relative w-full">
          <div className="flex-1 py-4 bg-gray-300 rounded-full w-full"></div>
          <button
            className="bg-gray-300 text-gray-400 px-[24px] py-[14px] rounded-full flex gap-[11px] items-center absolute top-0 right-0 xl:h-[56px]"
            aria-hidden="true"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransferSkeleton;
