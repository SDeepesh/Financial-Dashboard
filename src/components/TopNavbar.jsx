import React from 'react';
import { useSelector } from 'react-redux';
import Search from './../assets/images/topbar/search.svg';
import Notification from './../assets/images/topbar/notification.svg';
import DefaultProfilePic from './../assets/images/topbar/profile-pic.svg';
import Settings from './../assets/images/topbar/settings.svg';
import Toogle from './../assets/images/topbar/toogle.svg';

const TopNavbar = ({ onToggleSidebar }) => {
  const profilePicture =
    useSelector((state) => state.user.profilePicture) || DefaultProfilePic;

  return (
    <header className="bg-white px-[25px] xl:px-[40px] py-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center xl:hidden">
          <button
            className="w-[15px] h-auto cursor-pointer"
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <img src={Toogle} alt="toggle sidebar" width="15" height="auto" />
          </button>
        </div>
        <div className="flex items-center">
          <h1 className="text-[20px] xl:text-h1 font-semibold">Overview</h1>
        </div>
        <div className="flex items-center xl:space-x-[30px]">
          <div className="relative hidden xl:flex">
            <input
              type="text"
              placeholder="Search for something"
              className="w-full max-w-[255px] h-[50px] pl-[60px] pr-5 rounded-full bg-[#F5F7FA] text-[#8BA3CB] outline-none text-[15px]"
            />
            <img
              className="absolute left-[25px] top-[15px] h-5 w-5 text-gray-400"
              src={Search}
              width="auto"
              height="auto"
              alt="search-icon"
            />
          </div>
          <button className="bg-[#F5F7FA] rounded-full w-[50px] h-[50px] hidden xl:flex items-center justify-center">
            <img
              className="w-[25px]"
              src={Settings}
              alt="setting-icon"
              width="25"
              height="auto"
            />
          </button>
          <button className="bg-[#F5F7FA] rounded-full w-[50px] h-[50px] hidden xl:flex items-center justify-center">
            <img
              className="w-[25px]"
              src={Notification}
              alt="notification-icon"
              width="25"
              height="auto"
            />
          </button>
          {/* Profile Picture */}
          <img
            className="w-[30px] xl:w-[60px] rounded-full object-cover"
            src={profilePicture}
            alt="profile-picture"
            width="auto"
            height="auto"
          />
        </div>
      </div>
      <div className="relative flex xl:hidden mt-[20px]">
        <input
          type="text"
          placeholder="Search for something"
          className="w-full h-[40px] xl:h-[50px] pl-[60px] pr-5 rounded-full bg-[#F5F7FA] text-[#8BA3CB] outline-none text-[13px]"
        />
        <img
          className="absolute left-[25px] top-[10px] h-5 w-5 text-gray-400"
          src={Search}
          alt="search-icon"
          width="auto"
          height="auto"
        />
      </div>
    </header>
  );
};

export default TopNavbar;
