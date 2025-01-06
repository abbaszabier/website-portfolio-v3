import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MyMap from "./components/MyMap";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import ProfileLogo from "@/assets/icon4.webp";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { t } = useTranslation();
  const phoneNumber = "6288211156895";
  const message = `Hi, my name is ${formData.name}. ${formData.message}`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink, "_blank");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>
          {t("tab.PortfolioAbbas")} - {t("tab.Contact")}
        </title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="px-12 xs:px-6 w-full mx-auto"
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
              {t("contactPage.Title")}
            </span>
          </h1>
          <p className="text-gray-500 xs:leading-5 font-light dark:text-gray-400 xs:text-[12px] text-base">
            {t("contactPage.SubTitle")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row xs:gap-4 gap-8 w-full mt-8">
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="h-full flex flex-col justify-center"
            >
              <div>
                <Label
                  htmlFor="name"
                  className="text-[#051c29] dark:text-white"
                >
                  {t("contactPage.Name")}
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="text-[#051c29] dark:text-white mb-4 dark:bg-[#051c29]"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contactPage.YourName")}
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-[#051c29] dark:text-white"
                >
                  {t("contactPage.Email")}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="text-[#051c29] dark:text-white mb-4 dark:bg-[#051c29]"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contactPage.YourEmail")}
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="text-[#051c29] dark:text-white mb-4"
                >
                  {t("contactPage.Message")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  className="text-[#051c29] dark:text-white mb-4 dark:bg-[#051c29]"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contactPage.YourMessage")}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full xs:mb-4">
                {t("contactPage.Submit")}
              </Button>
            </form>
          </div>
          <div className="flex-1 xs:mt-4">
            <MyMap />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
