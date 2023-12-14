import ContainerBox from '@/components/ContainerBox'
import FreelancerProfileCard from '@/components/FreelancerProfileCard'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <ContainerBox>
            <h1 className='mb-5 text-lg font-semibold'>All freelancers</h1>
            <div className='grid grid-cols-4 gap-5'>
              <FreelancerProfileCard />
              <FreelancerProfileCard />
              <FreelancerProfileCard />
              <FreelancerProfileCard />
            </div>
        </ContainerBox>
    </div>
  )
}

export default page