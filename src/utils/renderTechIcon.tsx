import StackIcon from "tech-stack-icons";
import Zustand from "@/assets/Zustand.svg";

interface StackIconProps {
  tech: unknown;
}

const RenderTechIcon = ({ tech }: StackIconProps) => {
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
        <img loading="lazy" src={Zustand} alt="zustand" className="h-6 w-6" />
      );
    case "Prisma":
      return <StackIcon name="prisma" className="h-6 w-6" />;
    case "Supabase":
      return <StackIcon name="supabase" className="h-6 w-6" />;
    case "GraphQL":
      return <StackIcon name="graphql" className="h-6 w-6" />;
    case "Postman":
      return <StackIcon name="postman" className="h-6 w-6" />;
    default:
      return null;
  }
};

export default RenderTechIcon;
