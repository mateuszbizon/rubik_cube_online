import React, { PropsWithChildren } from 'react'
import Container from '../ui/container'
import MaterialsNav from './MaterialsNav'
import MaterialsNavMobile from './MaterialsNavMobile'

type MaterialsWrapperProps = PropsWithChildren

function MaterialsWrapper({ children }: MaterialsWrapperProps) {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
        <MaterialsNav />
        <section className='grow pt-[calc(theme(spacing.nav-height)+30px)] lg:pt-[calc(theme(spacing.nav-height)+60px)] pb-5'>
            <Container>
                <div className='lg:hidden mb-10'>
                    <MaterialsNavMobile />
                </div>
                {children}
            </Container>
        </section>
    </div>
  )
}

export default MaterialsWrapper