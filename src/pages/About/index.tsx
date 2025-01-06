import TechSection from "@/components/TechSection";
import { Helmet } from "react-helmet-async";
import ProfileLogo from "@/assets/icon2.webp";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import WorkExperiences from "./components/workExperiences";
import Education from "./components/education";

function About() {
  const { t } = useTranslation();
  const handleDownload = () => {
    const fileUrl = "/CV-Abbas-Zabier-Mohammad-Update-1-Jan-2025.pdf";
    const fileName = "CV-Abbas-Zabier-Mohammad-Update-1-Jan-2025.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Helmet>
        <title>
          {t("tab.PortfolioAbbas")} - {t("tab.About")}
        </title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="mb-4"
      >
        <div className="mx-auto w-20 rounded-full shadow bg-white dark:bg-[#051c29]">
          <motion.img
            src={ProfileLogo}
            alt="Avatar"
            loading="eager"
            width="80"
            height="80"
            className="p-2"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          />
        </div>
        <div className="flex w-full flex-col order-2 md:order-1 text-center">
          <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[52px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
            <span className="font-bold text-[#051c29] dark:text-white">
              {t("aboutPage.Title")}
            </span>
          </h1>
          <p className="text-gray-500 xs:leading-5 font-light dark:text-gray-400 xs:text-[12px] text-base">
            {t("aboutPage.SubTitle")}
          </p>
          <div className="flex w-full flex-col order-2 md:order-1 text-center">
            <p className="text-[#051c29] xs:leading-5 text-justify text-align-justify font-normal dark:text-gray-400 xs:text-[14px] text-[18px] xs:px-6 px-12 my-2">
              {t("aboutPage.Desc")}
            </p>
          </div>
        </div>
      </motion.div>

      <TechSection t={t} />

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 w-full xs:px-6 px-12"
      >
        <div className="flex items-center justify-start w-full">
          <h1 className="text-[28px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
            <span className="font-bold text-[#051c29] dark:text-white">
              {t("aboutPage.Education")}
            </span>
          </h1>
        </div>
        <Education />
      </motion.div>

      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 w-full xs:px-6 px-12"
      >
        <div className="flex items-center justify-start w-full">
          <h1 className="text-[28px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
            <span className="font-bold text-[#051c29] dark:text-white">
              {t("aboutPage.WorkExperience")}
            </span>
          </h1>
        </div>
        <WorkExperiences />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="px-12 xs:px-6 my-6 w-full flex justify-center items-center"
      >
        <Button
          className="relative bg-[#051c29] text-white hover:bg-white hover:text-[#051c29] dark:bg-white dark:text-[#051c29] dark:hover:bg-[#051c29] dark:hover:text-white rounded-lg inline-block font-semibold xs:p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow"
          onClick={handleDownload}
        >
          {t("aboutPage.DownloadResume")}
        </Button>
      </motion.div>
    </>
  );
}

export default About;
