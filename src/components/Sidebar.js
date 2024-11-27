import { useState } from "react";

import MenuSection from "./MenuSection";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Accounts Overview",
      iconPath: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z",
      isActive: true,
    },
    {
      name: "Payouts",
      iconPath: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z",
      isActive: false,
    },
    {
      name: "Certificates",
      iconPath:
        "M5 3h14v2H5V3zm0 4h14v2H5V7zm0 4h14v2H5v-2zM5 15h14v2H5v-2zm0 4h14v2H5v-2z",
      isActive: false,
    },
    {
      name: "Leaderboard",
      iconPath:
        "M5 3h14v2H5V3zm0 4h14v2H5V7zm0 4h14v2H5v-2zM5 15h14v2H5v-2zm0 4h14v2H5v-2z",
      isActive: false,
    },
    {
      name: "Order List",
      iconPath:
        "M5 3h14v2H5V3zm0 4h14v2H5V7zm0 4h14v2H5v-2zM5 15h14v2H5v-2zm0 4h14v2H5v-2z",
      isActive: false,
    },
  ];

  const appItems = [
    { name: "News Feeds", iconPath: "M3 3h18v18H3V3zm16 2H5v14h14V5z" },
    { name: "Economic Calendar", iconPath: "M7 10h10v2H7v-2zm0 4h7v2H7v-2z" },
    { name: "WebTrader Platform", iconPath: "M7 10h10v2H7v-2zm0 4h7v2H7v-2z" },
    { name: "Margin Calculator", iconPath: "M7 10h10v2H7v-2zm0 4h7v2H7v-2z" },
    { name: "Profit Calculator", iconPath: "M7 10h10v2H7v-2zm0 4h7v2H7v-2z" },
  ];

  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col ">
      {/* Top Section (Sticky)  */}
      <div className="p-4 sticky top-0 z-10">
        {/* Logo and Toggle Button  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 dark:text-white">
            {/* Replace with your logo image  */}
            <span className="text-lg font-semibold">Trading</span>
          </div>

          <button className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 12H5m14-6H5m14 12H5"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Middle Section  */}
      <div className="flex-1 overflow-y-auto p-4 ">
        {/* Menu Section */}
        <MenuSection title="Menu" items={menuItems} />

        {/* Apps Section */}
        <MenuSection title="Apps" items={appItems} />

        {/* Account Info  */}
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          {/* Account Section  */}
          <div className="flex justify-between items-center bg-white rounded-lg p-3">
            <span className="text-gray-500 font-medium">Account:</span>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-900">9999999</span>
              {/* Dropdown Icon  */}
              <svg
                className="w-4 h-4 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
          </div>

          {/* Status Section  */}
          <div className="flex justify-between items-center bg-white rounded-lg p-3">
            <span className="text-gray-500 font-medium">Status:</span>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-900">Active</span>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
          </div>

          {/* Program Section  */}
          <div className="flex justify-between items-center bg-white rounded-lg p-3">
            <span className="text-gray-500 font-medium">Program:</span>
            <span className="font-semibold text-gray-900">$50,000 Evl.</span>
          </div>
        </div>
      </div>

      {/* Bottom Section (Sticky User Profile & Account Info)  */}
      <div className="p-4 sticky bottom-0 z-10 shadow-md space-y-4">
        {/* User Profile  */}
        <div className="flex items-center space-x-3">
          {/* <img src="profile.jpg" alt="User" className="h-10 w-10 rounded-full"> */}
          <div>
            <p className="text-gray-700 dark:text-white font-semibold ">
              Daniel Sullivan
            </p>
            <p className="text-gray-500  dark:text-white text-sm">
              alex@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
