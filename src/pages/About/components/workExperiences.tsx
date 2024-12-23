import { useTranslation } from "react-i18next";

import LogoUniversity from "@/assets/LogoUniversity.svg";
import LogoDealjava from "@/assets/LogoDealjava.png";
import LogoInkor from "@/assets/LogoInkor.png";

const WorkExperiences = () => {
  const { t } = useTranslation();

  const workExperiences = [
    {
      logo: LogoInkor,
      alt: t("aboutPage.Inkor"),
      company: t("aboutPage.Inkor"),
      role: t("aboutPage.FrontendDeveloper"),
      type: t("aboutPage.Fulltime"),
      duration: `${t("aboutPage.August")} ${t("aboutPage.2024")} - ${t(
        "aboutPage.Present"
      )}`,
      location: `${t("aboutPage.SountJakarta")} · ${t("aboutPage.Remote")}`,
    },
    {
      logo: LogoDealjava,
      alt: t("aboutPage.Dealjava"),
      company: t("aboutPage.Dealjava"),
      role: t("aboutPage.FrontendDeveloper"),
      type: `${t("aboutPage.Fulltime")} · ${t("aboutPage.1Yr5mos")}`,
      duration: `${t("aboutPage.March")} ${t("aboutPage.2023")} - ${t(
        "aboutPage.July"
      )} ${t("aboutPage.2024")} · ${t("aboutPage.1Yr5mos")}`,
      location: `${t("aboutPage.Medan")} · ${t("aboutPage.Remote")}`,
    },
    {
      logo: LogoUniversity,
      alt: "IPB",
      company: t("aboutPage.DSITDIPB"),
      role: t("aboutPage.FrontendDeveloper"),
      type: `${t("aboutPage.Internship")} · ${t("aboutPage.9mos")}`,
      periods: [
        {
          duration: `${t("aboutPage.January")} ${t("aboutPage.2023")} - ${t(
            "aboutPage.March"
          )} ${t("aboutPage.2023")} · ${t("aboutPage.3mos")}`,
          location: `${t("aboutPage.Bogor")} · ${t("aboutPage.Remote")}`,
        },
        {
          duration: `${t("aboutPage.January")} ${t("aboutPage.2022")} - ${t(
            "aboutPage.July"
          )} ${t("aboutPage.2022")} · ${t("aboutPage.6mos")}`,
          location: `${t("aboutPage.Bogor")} · ${t("aboutPage.Remote")}`,
        },
      ],
    },
  ];

  return (
    <div className="mt-6 space-y-4">
      {workExperiences.map((experience, index) => (
        <div
          key={index}
          className="mt-6 flex flex-col border-b border-gray-200 dark:border-gray-500 pb-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <img
              src={experience.logo}
              width={50}
              height={50}
              alt={experience.alt}
              loading="eager"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                {experience.company}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {experience.type}
              </p>
            </div>
          </div>
          {experience.periods ? (
            experience.periods.map((period, periodIndex) => (
              <div
                key={periodIndex}
                className={`flex items-start relative left-5 pr-5 ${
                  periodIndex !== 0 ? "mt-[13px]" : ""
                }`}
              >
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3"></div>
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h2 className="text-md font-semibold text-gray-800 dark:text-white">
                      {experience.role}
                    </h2>
                    <p className="text-sm text-gray-500 md:mt-0 dark:text-gray-400">
                      {period.duration}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {period.location}
                  </p>
                </div>
                {periodIndex === 0 && (
                  <div
                    className="absolute top-6 left-1 w-px bg-gray-300"
                    style={{ height: "calc(86%)" }}
                  ></div>
                )}
              </div>
            ))
          ) : (
            <div className="flex items-start relative left-5 pr-5">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3"></div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h2 className="text-md font-semibold text-gray-800 dark:text-white">
                    {experience.role}
                  </h2>
                  <p className="text-sm text-gray-500 md:mt-0 dark:text-gray-400">
                    {experience.duration}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.location}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperiences;
