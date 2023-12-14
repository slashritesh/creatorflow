import ContainerBox from '@/components/ContainerBox'
import DashboardNav from '@/components/DashboardNav'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContainerBox>
            <DashboardNav />
            - freelancers can apply for projects
            - profile edit
            - my projects
        </ContainerBox>
    </div>
  )
}

export default page