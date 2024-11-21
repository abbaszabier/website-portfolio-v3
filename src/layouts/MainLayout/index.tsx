import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileLogo from "@/assets/icon.webp";
import {
  Personalcard,
  DirectboxNotif,
  Home as HomeIcon,
  Send2,
  IconProps,
  Setting2,
} from "iconsax-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

type SidebarItem = {
  path: string;
  icon: React.FC<IconProps>;
  label: string;
};

function MainLayout() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [position, setPosition] = React.useState("top");
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const [iconSize, setIconSize] = useState(20);

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

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth >= 768) {
        setIconSize(20);
      } else {
        setIconSize(24);
      }
    };

    updateIconSize();

    window.addEventListener("resize", updateIconSize);

    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row-reverse lg:flex-row lg:p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Shape 1 */}
        <div className="absolute w-96 h-96 xs:w-48 xs:h-48 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-50 blur-3xl animate-moveShape1"></div>
        {/* Shape 2 */}
        <div className="absolute w-72 h-72 xs:w-40 xs:h-40 bg-gradient-to-r from-green-400 to-teal-600 rounded-lg opacity-50 blur-3xl animate-moveShape2"></div>
        {/* Shape 3 */}
        <div className="absolute w-64 h-64 xs:w-36 xs:h-36 bg-gradient-to-r from-pink-400 to-red-600 rounded-full opacity-50 blur-3xl animate-moveShape3"></div>
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex-1 lg:ml-6 lg:rounded-xl overflow-y-auto border border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-75 bg-white dark:bg-opacity-75 dark:bg-gray-800 dark:border-gray-700">
        <div className="sticky top-0 right-0 z-50 justify-end flex px-6 pt-6 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Setting2
                size="28"
                color={`${darkMode ? "#ffffff" : "#051c29"}`}
                className="cursor-pointer hover:text-[#051c29] dark:hover:text-gray-300 hover:bg-[#f0f0f0] dark:hover:bg-gray-700 rounded-full p-1"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={`mr-12 xs:mr-6 ${
                darkMode
                  ? "bg-[#051c29] bg-opacity-75 backdrop-blur-sm text-white"
                  : "bg-white bg-opacity-75 backdrop-blur-sm text-[#051c29]"
              }`}
            >
              <DropdownMenuLabel>
                <div className="flex justify-between items-center">
                  <p>Dark Mode</p>
                  <Switch
                    id="airplane-mode"
                    checked={darkMode}
                    onCheckedChange={toggleDarkMode}
                  />
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Select Language</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">
                  <span className="mr-2">🇲🇨</span> ID
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  <span className="mr-2">🇺🇸</span> EN
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="kr">
                  <span className="mr-2">🇰🇷</span> KR
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Outlet />
      </div>

      {/* Sidebar */}
      <aside className="sticky bottom-0 lg:top-6 lg:self-start lg:min-h-[calc(100vh-48px)] lg:w-28 w-full lg:rounded-xl border border-gray-200 shadow-sm xs:p-4 p-6 backdrop-blur-sm z-10 bg-opacity-75 bg-white dark:bg-opacity-75 dark:bg-gray-800 dark:border-gray-700">
        <div className="hidden lg:block text-center mb-8">
          <img
            src={ProfileLogo}
            alt="Avatar"
            loading="lazy"
            width="80"
            height="80"
            className="w-20 mx-auto rounded-full shadow bg-white dark:bg-[#051c29] p-2"
          />
        </div>
        <nav>
          <ul className="flex xs:flex-row lg:flex-col justify-between lg:space-y-2 lg:justify-start">
            {sidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const IconComponent = item.icon;
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-center py-2 px-4 lg:mb-4 lg:mb-0 hover:text-[#051c29] dark:hover:text-gray-300 rounded ${
                      isActive
                        ? "text-[#051c29] dark:text-gray-100 font-bold"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <span className="flex flex-col lg:gap-2 items-center">
                      <IconComponent
                        size={iconSize}
                        variant={isActive ? "Bold" : "Outline"}
                      />
                      <span className="lg:block hidden">{item.label}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default MainLayout;
