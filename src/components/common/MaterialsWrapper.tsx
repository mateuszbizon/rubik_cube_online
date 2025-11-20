import React, { PropsWithChildren } from 'react'
import Container from '../ui/container'
import MaterialsNav from './MaterialsNav'

type MaterialsWrapperProps = PropsWithChildren

function MaterialsWrapper({ children }: MaterialsWrapperProps) {
  return (
    <div className='flex min-h-screen'>
        <MaterialsNav />
        <div className='grow pt-[calc(theme(spacing.nav-height)+30px)] bg-white'>
            <Container>
                {children}
            </Container>
        </div>
    </div>
  )
}

export default MaterialsWrapper