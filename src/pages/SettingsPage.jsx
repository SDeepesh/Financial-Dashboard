import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import EditProfile from '../components/Settings/ProfileEdit';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-[20px] md:p-[30px] bg-white shadow-md rounded-[25px]">
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="mt-[40px] md:pl-[30px]">
        {activeTab === 'Edit Profile' && <EditProfile />}
        {activeTab === 'Preferences' && <div>Preferences Component</div>}
        {activeTab === 'Security' && <div>Security Component</div>}
      </div>
    </div>
  );
};

export default Settings;
