'use client'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'


const ProjectFilter = () => {
  return (
    <div className='flex mb-5 gap-5'>
        <Select>
            <SelectTrigger>
              <SelectValue placeholder='categories'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Video Editor</SelectItem>
              <SelectItem value="all">light</SelectItem>
              <SelectItem value="light">light</SelectItem>
            </SelectContent>
          </Select>
        <Select>
            <SelectTrigger>
              <SelectValue placeholder='Job Type'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">light</SelectItem>
              <SelectItem value="all">light</SelectItem>
              <SelectItem value="light">light</SelectItem>
            </SelectContent>
          </Select>
        <Select>
            <SelectTrigger>
              <SelectValue placeholder='Location'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">light</SelectItem>
              <SelectItem value="all">light</SelectItem>
              <SelectItem value="light">light</SelectItem>
            </SelectContent>
          </Select>
          
    </div>
  )
}

export default ProjectFilter