import React, { useState, useCallback, useEffect } from "react";
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
import i18n from "@/locales/i18n";
import { useTranslation } from "react-i18next";
import { useSettingStore } from "@/store/settings";

type SidebarItem = {
  path: string;
  icon: React.FC<IconProps>;
  label: string;
};

function MainLayout() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const [iconSize, setIconSize] = useState(20);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const { setSelectedLanguage, selectedLanguage } = useSettingStore(
    (state) => state
  );

  const changeLanguage = (language: string | undefined) => {
    const selectedLang = language;
    i18n.changeLanguage(selectedLang);
    setSelectedLanguage(selectedLang);
  };

  const getSidebarItems = useCallback((): SidebarItem[] => {
    return [
      {
        path: "/",
        icon: HomeIcon,
        label: t("nav.Home"),
      },
      {
        path: "/about",
        icon: Personalcard,
        label: t("nav.About"),
      },
      {
        path: "/portfolio",
        icon: DirectboxNotif,
        label: t("nav.Portfolio"),
      },
      {
        path: "/contact",
        icon: Send2,
        label: t("nav.Contact"),
      },
    ];
  }, [t]);

  useEffect(() => {
    setSidebarItems(getSidebarItems());
  }, [getSidebarItems]);

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
        setIconSize(22);
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
        <div className="absolute w-96 h-96 xs:w-48 xs:h-48 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-30 blur-lg animate-moveShape1 will-change-transform"></div>
        {/* Shape 2 */}
        <div className="absolute w-72 h-72 xs:w-40 xs:h-40 bg-gradient-to-r from-green-400 to-teal-600 rounded-full opacity-30 blur-lg animate-moveShape2 will-change-transform"></div>
        {/* Shape 3 */}
        <div className="absolute w-64 h-64 xs:w-36 xs:h-36 bg-gradient-to-r from-pink-400 to-red-600 rounded-full opacity-30 blur-lg animate-moveShape3 will-change-transform"></div>
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex-1 lg:ml-6 lg:rounded-xl sm:overflow-y-auto h-[calc(100vh-3rem)] border border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-80 bg-white dark:bg-opacity-75 dark:bg-gray-800 dark:border-gray-700">
        <div className="sticky top-0 right-0 z-50 justify-end flex px-6 pt-6 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative cursor-pointer group overflow-hidden rounded-full bg-white shadow dark:bg-[#051c29]
    text-[#051c29] dark:text-gray-200 text-lg font-semibold 
     p-2"
              >
                {/* Background animasi */}
                <span
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="absolute inset-0 bg-[#051c29] dark:bg-gray-200 
      transition-transform duration-300 transform 
      translate-x-full translate-y-full 
      group-hover:translate-x-0 group-hover:translate-y-0 
      rounded-full"
                ></span>

                {/* Icon */}
                <span
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`relative z-10 group-hover:text-white dark:group-hover:text-black 
      `}
                >
                  <Setting2
                    size="20"
                    color={
                      isHovered
                        ? darkMode
                          ? "#051c29"
                          : "#ffffff"
                        : darkMode
                        ? "#ffffff"
                        : "#051c29"
                    }
                    className="cursor-pointer "
                  />
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={`mr-12 xs:mr-6 ${
                darkMode
                  ? "bg-[#051c29] bg-opacity-80 backdrop-blur-sm text-white"
                  : "bg-white bg-opacity-80 backdrop-blur-sm text-[#051c29]"
              }`}
            >
              <DropdownMenuLabel>
                <div className="flex justify-between items-center">
                  <p>{t("settings.DarkMode")}</p>
                  <Switch
                    id="airplane-mode"
                    checked={darkMode}
                    onCheckedChange={toggleDarkMode}
                  />
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                {t("settings.SelectLanguage")}
              </DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={selectedLanguage}
                onValueChange={changeLanguage}
              >
                <DropdownMenuRadioItem value="id">
                  <span className="mr-2">🇲🇨</span> ID
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="en">
                  <span className="mr-2">🇺🇸</span> EN
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ko">
                  <span className="mr-2">🇰🇷</span> KO
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-col items-center">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <aside className="sticky bottom-0 lg:top-6 lg:self-start lg:min-h-[calc(100vh-48px)] lg:w-28 w-full lg:rounded-xl border border-gray-200 shadow-sm xs:p-4 p-6 backdrop-blur-sm z-10 bg-opacity-80 xs:bg-opacity-100 bg-white dark:bg-opacity-75 xs:dark:bg-opacity-100 dark:bg-gray-800 dark:border-gray-700">
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
                <li key={index} className="xs:px-4">
                  <Link
                    to={item.path}
                    className={`flex items-center justify-center lg:py-2 lg:mb-4 lg:mb-0 hover:text-[#051c29] dark:hover:text-gray-300 rounded ${
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
