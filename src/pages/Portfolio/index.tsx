import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: "react-js" | "next-js";
}

const projects: Project[] = [
  {
    id: 1,
    title: "React Weather App",
    description:
      "A weather forecast application built using React and styled-components.",
    imageUrl: "https://via.placeholder.com/300x200",
    category: "react-js",
  },
  {
    id: 2,
    title: "Next.js Blog",
    description:
      "A personal blog platform built with Next.js and Tailwind CSS.",
    imageUrl: "https://via.placeholder.com/300x200",
    category: "next-js",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "An e-commerce website developed using React.js and Zustand for state management.",
    imageUrl: "https://via.placeholder.com/300x200",
    category: "react-js",
  },
];

function Portfolio() {
  const { t } = useTranslation();

  const renderProjects = (category: "react-js" | "next-js" | "all") => {
    const filteredProjects =
      category === "all"
        ? projects
        : projects.filter((project) => project.category === category);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="shadow-md">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <Button variant="default">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>
          {t("tab.PortfolioAbbas")} - {t("tab.Portfolio")}
        </title>
      </Helmet>
      <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[52px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
        <span className="font-bold text-[#051c29] dark:text-white">
          My Portfolio
        </span>
      </h1>
      <p className="text-gray-500 xs:leading-5 font-light dark:text-gray-400 xs:text-[12px] text-base">
        Here are some of the projects I have worked on.
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
    </>
  );
}

export default Portfolio;
