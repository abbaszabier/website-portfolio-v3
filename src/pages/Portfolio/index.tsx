import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import projectData from "@/lib/data";
import ProfileLogo from "@/assets/icon.webp";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: "react-js" | "next-js";
}

const projects: Project[] = projectData.map((project) => ({
  ...project,
  category: project.category as "react-js" | "next-js",
}));

function Portfolio() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const renderProjects = (category: "react-js" | "next-js" | "all") => {
    const filteredProjects =
      category === "all"
        ? projects
        : projects.filter((project) => project.category === category);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            whileHover={{
              y: -10,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="shadow-md bg-white dark:bg-[#051c29] dark:text-white">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[240px] rounded-t-md"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => navigate(`/portfolio/${project.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full"
    >
      <Helmet>
        <title>
          {t("tab.PortfolioAbbas")} - {t("tab.Portfolio")}
        </title>
      </Helmet>
      <div className="block text-center">
        <img
          src={ProfileLogo}
          alt="Avatar"
          loading="eager"
          width="80"
          height="80"
          className="w-20 mx-auto rounded-full shadow bg-white dark:bg-[#051c29] p-2"
        />
      </div>
      <h1 className="text-[24px] text-center sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[52px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
        <span className="font-bold text-[#051c29] dark:text-white">
          My Portfolio
        </span>
      </h1>
      <p className="text-gray-500 text-center xs:leading-5 font-light dark:text-gray-400 xs:text-[12px] text-base">
        Here are some selected projects I have worked on.
      </p>
      <div className="flex flex-col items-center mt-4 w-full">
        <Tabs defaultValue="all" className="flex flex-col w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="react-js">React JS</TabsTrigger>
            <TabsTrigger value="next-js">Next JS</TabsTrigger>
          </TabsList>
          <TabsContent value="all">{renderProjects("all")}</TabsContent>
          <TabsContent value="react-js">
            {renderProjects("react-js")}
          </TabsContent>
          <TabsContent value="next-js">{renderProjects("next-js")}</TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Portfolio;
