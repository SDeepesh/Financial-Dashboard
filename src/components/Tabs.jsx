import React from 'react';

const Tabs = ({ activeTab, onTabClick }) => {
  const tabs = ['Edit Profile', 'Preferences', 'Security'];
  return (
    <div className="flex border-b justify-around md:justify-start">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 text-[13px] md:text-base ${
            activeTab === tab
              ? 'border-b-2 border-primary font-medium text-primary'
              : 'text-[#718EBF]'
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
