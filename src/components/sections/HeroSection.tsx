import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import AnimatedContent from '../animations/AnimatedContent/AnimatedContent'
import FadeContent from '../animations/FadeContent/FadeContent'
import Image from 'next/image'
import Container from '../ui/container'
import { HERO_IMG } from '@/constants/images'

function HeroSection() {
  return (
    <header className="pt-[calc(theme(spacing.section)*2)] lg:h-screen lg:py-0 header-background overflow-hidden">
        <Container>
            <div className='h-full grid lg:grid-cols-2 gap-5'>
                <div className='h-full flex flex-col justify-center gap-8 text-center lg:text-left'>
                    <AnimatedContent reverse={true} direction="horizontal">
                        <h1 className='heading1'>
                            Kurs Kostki Rubika
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent delay={500}>
                        <p className='bigger-text'>
                            Naucz się układać legendarną łamigłówkę logiczną jaką jest kostka Rubika w przyjazny i zrozumiały sposób.
                        </p>
                    </AnimatedContent>
                    <FadeContent blur={true} delay={1500}>
                        <div className='flex gap-5 justify-center lg:justify-start flex-wrap'>
                            <Button size={"lg"} asChild>
                                <Link href={"/lekcja"}>
                                    Przebieg lekcji
                                </Link>
                            </Button>
                            <Button variant={"secondary-black"} size={"lg"} asChild>
                                <Link href={"/oferta"}>
                                    Oferta
                                </Link>
                            </Button>
                        </div>
                    </FadeContent>
                </div>

                <div className='flex flex-col'>
                    <div className='mt-auto'>
                        <AnimatedContent direction='horizontal' delay={1500}>
                            <figure className='relative w-full aspect-square max-w-[500px] lg:max-w-[600px] mx-auto'>
                                <Image src={HERO_IMG.src} alt={HERO_IMG.alt} fill />
                            </figure>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default HeroSection