import ContainerBox from '@/components/ContainerBox'
import DashboardNav from '@/components/DashboardNav'
import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContainerBox>
      <DashboardNav />
      <h1 className='text-2xl font-semibold mb-5'>Applied jobs</h1>
      <div className='grid grid-cols-4 gap-5'>
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      </div>
      </ContainerBox>
    </div>
  )
}

export default page