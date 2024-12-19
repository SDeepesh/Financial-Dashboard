import React from 'react';
import ProfileEdit from '../components/Settings/ProfileEdit';
import Preferences from '../components/Settings/Preferences';
import Security from '../components/Settings/Security';

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <ProfileEdit />
      <Preferences />
      <Security />
    </div>
  );
};

export default SettingsPage;
