import React, { ReactNode } from 'react'

const ContainerBox = ({children,className}: {children:ReactNode,className?: string}) => {
  return (
    <div className={`px-20 ${className}`}>
        {children}
    </div>
  )
}

export default ContainerBox