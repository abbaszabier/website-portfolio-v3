import { Helmet } from "react-helmet-async";
import Profile from "@/assets/profile.webp";
import SocialButton from "@/components/SosialButton.tsx";
import { useTranslation } from "react-i18next";
import { Github, Instagram, Linkedin, Twitter } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { useState } from "react";

function Home() {
  const { t } = useTranslation();
  const phoneNumber = "6288211156895";
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const message = `Hi, my name is ${
    name ? name : t("homePage.YourName")
  } from ${
    country ? country : t("homePage.YourCountry")
  }. I would like to hire you. Are you currently available?`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <Helmet>
        <title>
          {t("tab.PortfolioAbbas")} - {t("tab.Home")}
        </title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row sm:justify-between xs:justify-center items-center h-[calc(100vh-10rem)] sm:px-12 xs:px-6 xs:pb-6"
      >
        <div className="relative flex md:w-1/3 justify-center rounded-full shadow-lg bg-white dark:bg-[#051c29] items-center order-1 md:order-2 xs:mb-4">
          <motion.img
            src={Profile}
            alt="Avatar"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            width="384"
            height="384"
            className="w-60 xs:w-48 md:w-72 lg:w-80 xl:w-96 2xl:w-auto"
            style={{
              background: "transparent",
            }}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
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
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className={`
    relative bg-[#051c29] text-white 
    dark:bg-white dark:text-[#051c29]
    rounded-full inline-block font-semibold xs:p-2 w-full 
    sm:w-1/2 md:w-1/3 lg:w-1/4 shadow
  `}
                >
                  {t("homePage.ButtonHireMe")}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-[#051c29] dark:text-white xs:text-[24px] text-[28px] text-center">
                    {t("homePage.ButtonHireMe")}
                  </DialogTitle>
                  <DialogDescription className="text-[#051c29] dark:text-white text-center">
                    {t("homePage.MessageDesc")}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                  <div className="grid grid-cols-1 items-center gap-4">
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      id="name"
                      placeholder={t("homePage.TypeYourName")}
                      className="col-span-3 text-[#051c29] dark:text-white"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 items-center gap-4">
                    <Input
                      id="country"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      placeholder={t("homePage.TypeYourCountry")}
                      className="col-span-3 text-[#051c29] dark:text-white"
                      required
                    />
                  </div>
                </div>
                <DialogDescription className="text-[#051c29] dark:text-white italic">
                  <span className="not-italic font-bold	">
                    {t("homePage.Message")}{" "}
                  </span>
                  "{message}"
                </DialogDescription>
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={() => {
                      window.open(waLink, "_blank");
                      setName("");
                      setCountry("");
                    }}
                    disabled={!name || !country}
                    className="w-full"
                  >
                    {t("homePage.Send")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <span className="text-[#051c29] xs:hidden dark:text-white">-</span>

            <div className="flex w-full space-x-2 xs:mt-2 xs:justify-center">
              <SocialButton
                icon={<Github />}
                label={t("homePage.Github")}
                href="https://github.com/abbaszabier"
              />
              <SocialButton
                icon={<Instagram />}
                label={t("homePage.Instagram")}
                href="https://www.instagram.com/abzabier_/"
              />
              <SocialButton
                icon={<Linkedin />}
                label={t("homePage.Linkedin")}
                href="https://www.linkedin.com/in/abbaszabier/"
              />
              <SocialButton
                icon={<Twitter />}
                label={t("homePage.Twitter")}
                href="https://x.com/abzabier_"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
