import React from 'react'
import Container from '../Container'
import { Button } from '../ui/button'

function HeroSection() {
  return (
    <section className="h-[calc(100vh-theme(height.root-header))] header-background">
        <Container>
            <div className='h-full grid lg:grid-cols-2'>
                <div className='h-full flex flex-col justify-center gap-8 text-center lg:text-left'>
                    <h1 className='heading1 text-dark'>
                        Nauka kostki Rubika online
                    </h1>
                    <p className='text-2xl font-medium'>
                        Naucz się układać legendarną łamigłówkę logiczną jaką jest kostka Rubika w przyjazny i zrozumiały sposób.
                    </p>
                    <div className='flex gap-5 justify-center lg:justify-start'>
                        <Button size={"lg"}>
                            Rozpocznij
                        </Button>
                        <Button variant={"secondary-black"} size={"lg"}>
                            Opinie
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HeroSection