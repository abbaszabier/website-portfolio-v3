import { Helmet } from "react-helmet-async";
import Profile from "@/assets/profile.webp";
import SocialButton from "@/components/SosialButton.tsx";
import { DocumentDownload, Message } from "iconsax-react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const phoneNumber = "6288211156895";
  const message =
    "Hi, my name is (type your name) from (type your country). I would like to hire you. Are you currently available?";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <Helmet>
        <title>Portfolio Abbas - Home</title>
      </Helmet>
      <div className="flex flex-col md:flex-row sm:justify-between xs:justify-center items-center h-[calc(100vh-10rem)] sm:px-12 xs:px-6 xs:pb-6">
        <div className="relative flex md:w-1/3 justify-center rounded-full shadow-lg bg-white dark:bg-[#051c29] items-center order-1 md:order-2 xs:mb-4">
          <img
            src={Profile}
            alt="Avatar"
            loading="lazy"
            width="384"
            height="384"
            className="w-60 xs:w-48 md:w-72 lg:w-80 xl:w-96 mx-auto hover:scale-110"
          />
        </div>
        <div className="flex w-full md:w-1/2 flex-col gap-4 order-2 md:order-1">
          <h1 className="text-[24px] xs:text-center sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[52px] font-light text-gray-900 dark:text-gray-200 leading-snug">
            {t("homePage.HeadingLine1")}{" "}
            <span className="font-bold text-[#051c29] dark:text-white">
              {t("homePage.HeadingLine2")}{" "}
            </span>
            {t("homePage.HeadingLine3")}
            <br />
            <span className="font-bold text-[#051c29] dark:text-white">
              {t("homePage.HeadingLine4")}
            </span>{" "}
            <br /> {t("homePage.HeadingLine5")}{" "}
            <span className="font-bold text-[#051c29] dark:text-white">
              {t("homePage.HeadingLine6")}
            </span>
          </h1>
          <p className="text-gray-500 xs:leading-5 xs:text-center font-normal dark:text-gray-400 mb-2 xs:text-[12px] text-base">
            {t("homePage.Desc")}
          </p>
          <div className="flex flex-row gap-4 xs:gap-2 xs:flex-col xs:justify-center sm:justify-left items-center">
            <button
              onClick={() => {
                window.open(waLink, "_blank");
              }}
              className={`
    relative bg-[#051c29] text-white hover:bg-white hover:text-[#051c29] 
    dark:bg-white dark:text-[#051c29] dark:hover:bg-[#051c29] dark:hover:text-white
    rounded-full inline-block font-semibold p-3 xs:p-2 w-full 
    sm:w-1/2 md:w-1/3 lg:w-1/4 shadow
  `}
            >
              {t("homePage.ButtonHireMe")}
            </button>

            <span className="text-[#051c29] xs:hidden dark:text-white">-</span>

            <div className="flex w-full space-x-2 xs:mt-2 xs:justify-center">
              <SocialButton
                icon={<DocumentDownload size={16} />}
                label={t("homePage.Resume")}
                href="/resume.pdf"
              />
              <SocialButton
                icon={<Message size={16} />}
                label={t("homePage.Email")}
                href="mailto:abbas.zabier06@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
