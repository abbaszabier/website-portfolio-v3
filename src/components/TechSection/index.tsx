import { FC } from "react";
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

interface Tech {
  name: string;
  icon: JSX.Element;
  description: string;
}

const techStack: Tech[] = [
  {
    name: "Javascript",
    icon: <Javascript />,
    description: "Programming Language",
  },
  {
    name: "Typescript",
    icon: <Typescript />,
    description: "Programming Language",
  },
  { name: "React JS", icon: <React />, description: "Frontend Development" },
  { name: "Next JS", icon: <NextJs />, description: "React Framework" },
  { name: "React Query", icon: <ReactQuery />, description: "Data Fetching" },
  {
    name: "Zustand",
    icon: <img loading="lazy" src={Zustand} alt="Zustand" />,
    description: "State Management",
  },
  { name: "Tailwind CSS", icon: <Tailwind />, description: "Framework CSS" },
  {
    name: "Bootstrap",
    icon: <img loading="lazy" src={Bootstrap} alt="Bootstrap" />,
    description: "Framework CSS",
  },
  {
    name: "Chakra UI",
    icon: <img loading="lazy" src={Chakra} alt="Chakra UI" />,
    description: "Framework CSS",
  },
];

const TechSection: FC = () => {
  return (
    <Marquee gradient={false} speed={100} pauseOnHover={true}>
      {techStack.map((tech, index) => (
        <div
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
            <h3 className="text-xl font-semibold text-[#051c29] dark:text-white">
              {tech.name}
            </h3>
            <p className="text-sm text-gray-500 font-normal dark:text-gray-400">
              {tech.description}
            </p>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default TechSection;
