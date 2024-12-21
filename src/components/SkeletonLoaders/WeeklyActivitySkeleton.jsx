import React from 'react';

const WeeklyActivitySkeleton = ({ barCount = 7, legendCount = 2 }) => (
  <div className="bg-gray-200 lg:p-6 pb-5 rounded-2xl min-h-[300px] lg:min-h-[322px] flex flex-col justify-center items-center">
    <div className="animate-pulse w-full space-y-4">
      <div className="flex justify-end space-x-4 mb-4">
        {Array.from({ length: legendCount }).map((_, i) => (
          <div key={i} className="h-4 w-24 bg-gray-100 rounded-md"></div>
        ))}
      </div>
      <div className="h-56 w-full flex justify-between items-end">
        {Array.from({ length: barCount }).map((_, i) => (
          <div
            key={i}
            className="w-8 bg-gray-100 rounded-t-md"
            style={{ height: `${Math.random() * 60 + 20}%` }}
          ></div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        {Array.from({ length: barCount }).map((_, i) => (
          <div key={i} className="h-4 w-8 bg-gray-100 rounded-md"></div>
        ))}
      </div>
    </div>
  </div>
);

export default WeeklyActivitySkeleton;
