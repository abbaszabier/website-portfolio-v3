import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import useProjectData from "@/lib/data";
import StackIcon from "tech-stack-icons";
import ReactDOM from "react-dom";
import { Github } from "@/components/icons";
import { ArrowCircleLeft, Briefcase, CloseCircle, Link } from "iconsax-react";
import Zustand from "@/assets/Zustand.svg";

interface Project {
  id: number;
  title: string;
  type: string;
  isClient: string | null;
  description: string;
  imageUrl: string;
  techStack: string[];
  linkRepo: string;
  linkWeb: string;
  screenshots: string[];
  category: "react-js" | "next-js";
}

function DetailProject() {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = useProjectData().map((project) => ({
    ...project,
    category: project.category as "react-js" | "next-js",
    screenshots: project.screenshots,
  }));

  const project = projects.find((project) => project.id === Number(id));
  if (!project?.id) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-2xl text-[#051c29] dark:text-white">
          {t("portfolioPage.ProjectNotFound")}
        </h1>
      </div>
    );
  }

  const renderTechIcon = (tech: unknown) => {
    switch (tech) {
      case "React JS":
        return <StackIcon name="reactjs" className="h-6 w-6" />;
      case "Next JS":
        return <StackIcon name="nextjs2" className="h-6 w-6" />;
      case "Tailwind CSS":
        return <StackIcon name="tailwindcss" className="h-6 w-6" />;
      case "React Query":
        return <StackIcon name="reactquery" className="h-6 w-6" />;
      case "Chakra UI":
        return <StackIcon name="chakraui" className="h-6 w-6" />;
      case "Typescript":
        return <StackIcon name="typescript" className="h-6 w-6" />;
      case "Javascript":
        return <StackIcon name="javascript" className="h-6 w-6" />;
      case "Zustand":
        return (
          <img
            loading="lazy"
            src={Zustand}
            alt={t("aboutPage.Zustand")}
            className="h-6 w-6"
          />
        );
      case "GraphQL":
        return <StackIcon name="graphql" className="h-6 w-6" />;
      default:
        return null;
    }
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
        className="px-12 xs:px-6 w-full"
      >
        <div className="flex w-full flex-col order-2 md:order-1 justify-start items-start text-center mb-4">
          <div className="flex gap-2 items-center text-[#051c29] dark:text-white">
            <ArrowCircleLeft
              size={28}
              className="cursor-pointer"
              onClick={() => {
                navigate("/portfolio");
              }}
            />
            <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[52px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
              <span className="font-bold text-[#051c29] dark:text-white">
                {project?.title}
              </span>
            </h1>
          </div>
          <p className="text-gray-500 text-left xs:leading-5 font-light dark:text-gray-400 xs:text-[12px] text-base">
            {project?.description}
          </p>
        </div>

        <div className="flex xs:flex-col w-full justify-between gap-5 mt-2 border-t border-b border-gray-200 dark:border-gray-700 py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[#051c29] dark:text-white">
              <Briefcase size={18} />
              <span className="text-sm">
                {project?.type} ({project?.isClient})
              </span>
            </div>

            <div
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline text-[#051c29] dark:text-white cursor-pointer"
              onClick={() => window.open(project?.linkRepo, "_blank")}
            >
              <Github />
              <span className="text-sm"> {t("portfolioPage.Repository")}</span>
            </div>

            <div
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline text-[#051c29] dark:text-white cursor-pointer"
              onClick={() => window.open(project?.linkWeb, "_blank")}
            >
              <Link size={18} />
              <span className="text-sm">{t("portfolioPage.LiveSite")}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {project?.techStack?.map((tech, index) => (
              <div
                key={index}
                className="flex items-center cursor-pointer"
                title={tech === "React JS" ? "React JS" : tech}
              >
                {renderTechIcon(tech)}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {project?.screenshots?.map((screenshot, index) => (
            <div key={index} className="relative">
              <img
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="cursor-pointer w-full h-auto rounded-lg shadow-md"
                onClick={() => setSelectedImage(screenshot)}
              />
            </div>
          ))}
        </div>
        {selectedImage &&
          ReactDOM.createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-50 bg-opacity-20 backdrop-blur-md flex items-center justify-center z-[100000000]"
            >
              <div className="relative w-3/5 xs:w-5/6">
                <button
                  className="absolute top-2 right-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <CloseCircle color="#051c29" size={24} />
                </button>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </motion.div>,
            document.body
          )}
      </motion.div>
    </>
  );
}

export default DetailProject;
