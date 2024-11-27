import { useState } from "react";

import { menuItems, appItems } from "../data/sideMenu";

import MenuSection from "./MenuSection";
import AccountInfo from "./AccountInfo";
import UserProfile from "./UserProfile";
import AppLogo from "./AppLogo";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col ">
      <AppLogo />

      <div className="flex-1 overflow-y-auto p-4 ">
        <MenuSection title="Menu" items={menuItems} />
        <MenuSection title="Apps" items={appItems} />

        <AccountInfo />
      </div>

      <UserProfile />
    </div>
  );
};

export default Sidebar;
