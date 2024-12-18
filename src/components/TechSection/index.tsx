import {
  React,
  ReactQuery,
  Tailwind,
  NextJs,
  Javascript,
  Typescript,
} from "@/components/icons";
import Zustand from "@/assets/Zustand.svg";
import Bootstrap from "@/assets/Bootstrap.svg";
import Chakra from "@/assets/ChakraUI.svg";
import Marquee from "react-fast-marquee";
import { TFunction } from "i18next";
import { motion } from "motion/react";

interface Tech {
  name: string;
  icon: JSX.Element;
  description: string;
}

interface TechSectionProps {
  t: TFunction;
}

const TechSection: React.FC<TechSectionProps> = ({ t }) => {
  const techStack: Tech[] = [
    {
      name: t("aboutPage.JavaScript"),
      icon: <Javascript />,
      description: t("aboutPage.DescJavaScript"),
    },
    {
      name: t("aboutPage.TypeScript"),
      icon: <Typescript />,
      description: t("aboutPage.DescTypeScript"),
    },
    {
      name: t("aboutPage.ReactJS"),
      icon: <React />,
      description: t("aboutPage.DescReactJS"),
    },
    {
      name: t("aboutPage.NextJS"),
      icon: <NextJs />,
      description: t("aboutPage.DescNextJS"),
    },
    {
      name: t("aboutPage.ReactQuery"),
      icon: <ReactQuery />,
      description: t("aboutPage.DescReactQuery"),
    },
    {
      name: t("aboutPage.Zustand"),
      icon: <img loading="lazy" src={Zustand} alt={t("aboutPage.Zustand")} />,
      description: t("aboutPage.DescZustand"),
    },
    {
      name: t("aboutPage.TailwindCSS"),
      icon: <Tailwind />,
      description: t("aboutPage.DescTailwindCSS"),
    },
    {
      name: t("aboutPage.Bootstrap"),
      icon: (
        <img loading="lazy" src={Bootstrap} alt={t("aboutPage.Bootstrap")} />
      ),
      description: t("aboutPage.DescBootstrap"),
    },
    {
      name: t("aboutPage.ChakraUI"),
      icon: <img loading="lazy" src={Chakra} alt={t("aboutPage.ChakraUI")} />,
      description: t("aboutPage.DescChakraUI"),
    },
  ];
  return (
    <Marquee gradient={false} speed={100} pauseOnHover={true}>
      {techStack.map((tech, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          key={index}
          className="mx-2 min-w-[275px] min-h-[100px] flex justify-center items-center border border-gray-100 bg-white dark:bg-[#051c29] dark:border-[#051c29] rounded-2xl shadow-sm hover:shadow gap-6 transition-shadow duration-300 transform"
        >
          <div
            className={`flex justify-center h-full ${
              tech.name === "Next JS" ? "bg-white rounded-full" : ""
            }`}
          >
            {tech.icon}
          </div>
          <div className="text-left flex flex-col justify-center h-full">
            <h2 className="text-xl font-semibold text-[#051c29] dark:text-white">
              {tech.name}
            </h2>
            <p className="text-sm text-gray-500 font-normal dark:text-gray-400">
              {tech.description}
            </p>
          </div>
        </motion.div>
      ))}
    </Marquee>
  );
};

export default TechSection;
