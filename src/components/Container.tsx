import React, { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren

function Container({ children }: ContainerProps) {
  return (
    <div className='size-full max-w-[1200px] mx-auto px-5'>
        {children}
    </div>
  )
}

export default Container