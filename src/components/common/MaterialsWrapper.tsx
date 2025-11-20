import React, { PropsWithChildren } from 'react'
import Container from '../ui/container'
import MaterialsNav from './MaterialsNav'
import MaterialsNavMobile from './MaterialsNavMobile'

type MaterialsWrapperProps = PropsWithChildren

function MaterialsWrapper({ children }: MaterialsWrapperProps) {
  return (
    <div className='flex min-h-screen'>
        <MaterialsNav />
        <div className='grow pt-[calc(theme(spacing.nav-height)+30px)] bg-white'>
            <Container>
                <div className='md:hidden mb-10'>
                    <MaterialsNavMobile />
                </div>
                {children}
            </Container>
        </div>
    </div>
  )
}

export default MaterialsWrapper