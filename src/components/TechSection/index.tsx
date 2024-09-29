import { FC } from "react";
import {
  React,
  ReactNative,
  ReactQuery,
  Tailwind,
  NextJs,
  Javascript,
  Typescript,
} from "@/components/icons";
import Zustand from "@/assets/Zustand.png";
import Bootstrap from "@/assets/Bootstrap.jpg";
import Chakra from "@/assets/Chakra.png";
import Marquee from "react-fast-marquee";

interface Tech {
  name: string;
  icon: JSX.Element;
  description: string;
}

const techStack: Tech[] = [
  {
    name: "JavaScript",
    icon: <Javascript />,
    description: "Programming Language",
  },
  {
    name: "TypeScript",
    icon: <Typescript />,
    description: "Programming Language",
  },
  { name: "React JS", icon: <React />, description: "Frontend Development" },
  { name: "Next JS", icon: <NextJs />, description: "Fullstack Development" },
  {
    name: "React Native",
    icon: <ReactNative />,
    description: "Mobile Development",
  },
  { name: "React Query", icon: <ReactQuery />, description: "Data Fetching" },
  {
    name: "Zustand",
    icon: <img src={Zustand} alt="Zustand" />,
    description: "State Management",
  },
  { name: "Tailwind CSS", icon: <Tailwind />, description: "Framework CSS" },
  {
    name: "Bootstrap",
    icon: <img src={Bootstrap} alt="Bootstrap" />,
    description: "Framework CSS",
  },
  {
    name: "Chakra UI",
    icon: <img src={Chakra} alt="Chakra UI" />,
    description: "Framework CSS",
  },
];

const TechSection: FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Tech Stack
      </h2>
      <div className="px-6">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="mx-2 min-w-[300px] min-h-[100px] justify-center items-center border border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow gap-6 transition-shadow duration-300 transform flex h-full"
            >
              <div className="flex justify-center h-full">{tech.icon}</div>
              <div className="text-left flex flex-col justify-center h-full">
                <h3 className="text-xl font-semibold text-gray-700">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500 font-normal dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TechSection;
