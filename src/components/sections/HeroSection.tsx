import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import AnimatedContent from '../animations/AnimatedContent/AnimatedContent'
import FadeContent from '../animations/FadeContent/FadeContent'
import Image from 'next/image'

function HeroSection() {
  return (
    <section id='hero' className="h-[calc(100vh-theme(height.nav-height))] header-background overflow-hidden">
        <Container>
            <div className='h-full grid lg:grid-cols-2 gap-5'>
                <div className='h-full flex flex-col justify-center gap-8 text-center lg:text-left'>
                    <AnimatedContent reverse={true} direction="horizontal">
                        <h1 className='heading1 text-foreground'>
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

                <div className='hidden lg:flex flex-col'>
                    <div className='mt-auto'>
                        <AnimatedContent direction='horizontal' delay={1500}>
                            <div className='relative w-full aspect-square'>
                                <Image src={"/man_with_cubes2.png"} alt='Mężczyzna trzymający dwie kostki Rubika. Jedna kostka jest ułożona, a druga nie jest.' fill className='rounded-2xl' />
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HeroSection