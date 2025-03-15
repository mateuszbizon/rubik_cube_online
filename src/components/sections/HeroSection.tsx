import React from 'react'
import Container from '../Container'

function HeroSection() {
  return (
    <section className="h-screen header-background">
        <Container>
            <div className='h-full grid lg:grid-cols-2'>
                <div className='h-full flex flex-col justify-center gap-8'>
                    <h1 className='heading1 text-dark text-center lg:text-left'>
                        Nauka kostki Rubika online
                    </h1>
                    <p className='text-2xl font-medium'>
                        Naucz się układać legendarną łamigłówkę logiczną jaką jest kostka Rubika w przyjazny i zrozumiały sposób.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HeroSection