import React from 'react'
import ContainerBox from './ContainerBox'
import Logo from './Logo'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const DashboardNav = () => {
  return (
    <div className='py-8'>
        <div className='flex justify-between'>
            <Logo />
            <div className='flex gap-5'>
                <Link href={'/admin/freelance/projects'} className={`${buttonVariants({variant:'ghost'})} text-base`}>Find projects</Link>
                <Link href={'/admin/freelance/applied-projects'} className={`${buttonVariants({variant:'ghost'})} text-base`}>Applied Projects</Link>
                <Link href={'/admin/freelance/my-projects'} className={`${buttonVariants({variant:'ghost'})} text-base`}>My projects</Link>
                <Link href={'/admin/freelance/profile'} className={`${buttonVariants({variant:'ghost'})} text-base`}>Profile</Link>
            </div>
            <div className='flex gap-5'>
                <Link href={'/'} className={buttonVariants({variant:'outline'})}>Log out</Link>
                <div className='w-10 rounded-full h-10 bg-rose-500'>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DashboardNav