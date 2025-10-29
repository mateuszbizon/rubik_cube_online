import React from 'react'
import Container from '../ui/container'

type SubPageHeroProps = {
    title?: string
}

function SubPageHero({ title = "O mnie" }: SubPageHeroProps) {
  return (
    <header className='pt-[calc(theme(spacing.section)*2)] pb-section header-background rounded-b-2xl'>
        <Container>
            <h1 className='heading1 text-center'>{title}</h1>
        </Container>
    </header>
  )
}

export default SubPageHero