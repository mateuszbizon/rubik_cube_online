import React from 'react'
import Container from '../Container'
import { Button } from '../ui/button'
import Link from 'next/link'
import AnimatedContent from '../animations/AnimatedContent/AnimatedContent'
import FadeContent from '../animations/FadeContent/FadeContent'

function HeroSection() {
  return (
    <section id='hero' className="h-[calc(100vh-theme(height.root-header))] header-background">
        <Container>
            <div className='h-full grid lg:grid-cols-2'>
                <div className='h-full flex flex-col justify-center gap-8 text-center lg:text-left'>
                    <AnimatedContent reverse={true} direction="horizontal">
                        <h1 className='heading1 text-dark'>
                            Nauka kostki Rubika online
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent delay={500}>
                        <p className='text-2xl font-medium'>
                            Naucz się układać legendarną łamigłówkę logiczną jaką jest kostka Rubika w przyjazny i zrozumiały sposób.
                        </p>
                    </AnimatedContent>
                    <FadeContent blur={true} delay={1500}>
                        <div className='flex gap-5 justify-center lg:justify-start flex-wrap'>
                            <Button size={"lg"} asChild>
                                <Link href={"#lesson"}>
                                    Rozpocznij
                                </Link>
                            </Button>
                            <Button variant={"secondary-black"} size={"lg"} asChild>
                                <Link href={"#reviews"}>
                                    Opinie
                                </Link>
                            </Button>
                        </div>
                    </FadeContent>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HeroSection