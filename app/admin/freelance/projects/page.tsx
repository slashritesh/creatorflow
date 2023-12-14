import ContainerBox from "@/components/ContainerBox";
import DashboardNav from "@/components/DashboardNav";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectsCard from "@/components/ProjectsCard";
import React from "react";

const page = () => {
  return (
    <div>
      <ContainerBox>
        <DashboardNav />
        <ProjectFilter />
        <div className="grid grid-cols-4 gap-5">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        </div>
      </ContainerBox>
    </div>
  );
};

export default page;
