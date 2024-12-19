import React, { useState } from 'react';
import TopNavbar from '../components/TopNavbar';
import Sidebar from '../components/Sidebar';

const PublicLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="md:flex min-h-screen relative">
      {isSidebarOpen && (
        <button
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              closeSidebar();
            }
          }}
          aria-label="Close sidebar"
        />
      )}
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <TopNavbar onToggleSidebar={toggleSidebar} />
        <main className="flex-1 pt-[24px] pb-[40px] px-[25px] lg:px-[40px] overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default PublicLayout;
