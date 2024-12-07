import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";

function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio Abbas - Portfolio</title>
      </Helmet>
      <div className="flex flex-col items-center h-[calc(100vh-7rem)]">
        <Tabs defaultValue="all" className="flex flex-col w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="react-js">React JS</TabsTrigger>
            <TabsTrigger value="next-js">Next JS</TabsTrigger>
          </TabsList>
          <TabsContent value="all">All Section</TabsContent>
          <TabsContent value="react-js">React JS Section</TabsContent>
          <TabsContent value="next-js">Next JS Section</TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Portfolio;
