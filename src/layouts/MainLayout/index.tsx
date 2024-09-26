import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileLogo from "@/assets/icon.png";
import {
  Personalcard,
  DirectboxNotif,
  Home as HomeIcon,
  Send2,
  Moon,
  Sun1,
} from "iconsax-react";

import { IconProps } from "iconsax-react";

type SidebarItem = {
  path: string;
  icon: React.FC<IconProps>;
  label: string;
};

function MainLayout() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);

  const getSidebarItems = (): SidebarItem[] => {
    return [
      {
        path: "/",
        icon: HomeIcon,
        label: "Home",
      },
      {
        path: "/about",
        icon: Personalcard,
        label: "About",
      },
      {
        path: "/portfolio",
        icon: DirectboxNotif,
        label: "Portfolio",
      },
      {
        path: "/contact",
        icon: Send2,
        label: "Contact",
      },
    ];
  };

  useEffect(() => {
    setSidebarItems(getSidebarItems());
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="relative flex p-6 bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Shape 1 */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-50 blur-3xl animate-moveShape1"></div>
        {/* Shape 2 */}
        <div className="absolute w-72 h-72 bg-gradient-to-r from-green-400 to-teal-600 rounded-lg opacity-50 blur-3xl animate-moveShape2"></div>
        {/* Shape 3 */}
        <div className="absolute w-64 h-64 bg-gradient-to-r from-pink-400 to-red-600 rounded-full opacity-50 blur-3xl animate-moveShape3"></div>
      </div>

      {/* Sidebar */}
      <aside className="sticky w-28 top-6 self-start min-h-[calc(100vh-48px)] rounded-xl border border-gray-200 shadow-sm p-6 backdrop-blur-sm z-10 bg-opacity-75 bg-white dark:bg-opacity-85 dark:bg-gray-800 dark:border-gray-700">
        <div className="text-center mb-8">
          <img
            src={ProfileLogo}
            alt="Avatar"
            className="w-20 mx-auto rounded-full shadow bg-white dark:bg-[#051c29] p-2"
          />
        </div>
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const IconComponent = item.icon;
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-center py-2 px-4 mb-4 hover:text-[#051c29] dark:hover:text-gray-300 rounded ${
                      isActive
                        ? "text-[#051c29] dark:text-gray-100 font-bold"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <span className="flex flex-col gap-2 items-center">
                      <IconComponent
                        size="18"
                        variant={isActive ? "Bold" : "Outline"}
                      />
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="relative z-10 flex-1 ml-6 rounded-xl overflow-y-auto border border-gray-200 shadow-sm backdrop-blur-sm px-6 bg-opacity-75 bg-white dark:bg-opacity-85 dark:bg-gray-800 dark:border-gray-700">
        <div className="sticky top-0 right-0 z-50 justify-end flex pt-6 w-full">
          <button
            onClick={() => {
              toggleDarkMode();
            }}
            className="p-2 bg-gray-100 shadow border border-gray-100 dark:border-gray-900 rounded-full dark:bg-gray-900 text-black dark:text-white rounded"
          >
            {darkMode ? <Sun1 size="18" /> : <Moon size="18" />}
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
