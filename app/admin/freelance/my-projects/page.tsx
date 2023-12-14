import ContainerBox from '@/components/ContainerBox'
import DashboardNav from '@/components/DashboardNav'
import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContainerBox>
      <DashboardNav />
      <h1 className='text-2xl mb-5 font-semibold'>My Projects</h1>
      <div className='grid gap-5 grid-cols-4'>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
      </ContainerBox>
    </div>
  )
}

export default page