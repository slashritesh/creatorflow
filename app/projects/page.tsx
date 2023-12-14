
import ContainerBox from "@/components/ContainerBox";
import Navbar from "@/components/Navbar";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectsCard from "@/components/ProjectsCard";
import { Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import React from "react";

const projects = () => {
  return (
    <>
      <Navbar />
      <ContainerBox>
        
        <ProjectFilter />
      </ContainerBox>
      
      <ContainerBox className="grid grid-cols-4 gap-5">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </ContainerBox>
    </>
  );
};

export default projects;
