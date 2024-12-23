import LogoUniversity from "@/assets/LogoUniversity.svg";
import { useTranslation } from "react-i18next";
const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-6 space-y-4">
      <div className="w-full">
        <div className="flex items-start gap-2">
          <img src={LogoUniversity} alt="IPB" loading="eager" />
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {t("aboutPage.IPBUniversity")}
              </h2>
              <p className="text-sm text-gray-500 md:mt-0 dark:text-gray-400">
                {t("aboutPage.September")} {t("aboutPage.2018")} -{" "}
                {t("aboutPage.April")} {t("aboutPage.2023")}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {" "}
              {t("aboutPage.DescIPBUniversity")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
