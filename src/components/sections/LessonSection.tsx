import React from 'react'
import Link from 'next/link'
import Container from '../ui/container'
import { Button } from '../ui/button'
import { SUPERPROF_URL } from '@/constants'
import AnimatedContent from '../animations/AnimatedContent/AnimatedContent'

function LessonSection() {
  return (
    <section className='py-section bg-white'>
        <Container>
            <AnimatedContent direction="horizontal">
                <h2 className='heading2 heading-margin-bottom'>
                    Jak przebiega lekcja
                </h2>
            </AnimatedContent>
            <div className='flex flex-col lg:flex-row gap-8 relative'>
                <div className='lg:sticky lg:top-nav-height lg:order-2 shrink-0 h-fit lg:w-[350px]'>
                    <AnimatedContent direction='horizontal' delay={700}>
                        <div className='bg-foreground rounded-xl p-10 space-y-5 text-center lg:text-left text-white flex flex-col justify-center'>
                            <div className='space-y-1'>
                                <p className='md:text-lg'>
                                    Czas trwania
                                </p>
                                <p className='little-bigger-text font-semibold'>
                                    1h
                                </p>
                            </div>
                            <div className='space-y-1'>
                                <p className='md:text-lg font-medium'>
                                    Koszt
                                </p>
                                <p className='little-bigger-text font-semibold'>
                                    50 zł
                                </p>
                            </div>
                            <div className='space-y-1'>
                                <p className='md:text-lg'>
                                    Główna platforma
                                </p>
                                <p className='little-bigger-text font-semibold'>
                                    WhatsApp, Messenger
                                </p>
                                <p className='little-bigger-text'>
                                    <Button variant={"link"} size={"link"} className='text-inherit font-semibold' style={{ fontSize: 'inherit' }} asChild>
                                        <Link href={SUPERPROF_URL} target='_blank' title='Superprof'>
                                            Superprof
                                        </Link>
                                    </Button>
                                </p>
                            </div>
                            <div className='space-y-1'>
                                <p className='md:text-lg'>
                                    Lekcje darmowe
                                </p>
                                <p className='little-bigger-text font-semibold'>
                                    Pierwsza lekcja
                                </p>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>

                <div>
                    <AnimatedContent direction='horizontal' delay={500}>
                        <div className='little-bigger-text space-y-5 text-pretty'>
                            <p>
                                Kurs kostki Rubika odbywa się online za pomocą aplikacji WhatsApp lub Messenger. Wybór aplikacji zależy od preferencji ucznia. Obie aplikacje umożliwiają łatwe nawiązywanie połączeń wideo co jest kluczowe podczas kursu kostki Rubika. Wcześniej korzystałem za pomocą platformy Superprof. Jest też opcja spotkania za pomocą właśnie tej platformy.{" "}
                                <Button variant={"link"} size={"link"} style={{ fontSize: "inherit" }} asChild>
                                    <Link href={SUPERPROF_URL} target='_blank' title='Superprof'>
                                        Link do profilu na Superprof
                                    </Link>
                                </Button>
                            </p>
                            <p>
                                Lekcje odbywają się głównie online jak wspomniałem powyżej lecz istnieje jeszcze szansa spotkania stacjonarnego jeśli jest to w Zgorzelcu, województwo dolnośląskie lub pobliskich miejscowościach tak do 10 km :{")"}.
                            </p>
                            <p>
                                Lekcja trwa godzinę i kosztuje 50 zł. Dla każdego nowego ucznia, <strong>pierwsza lekcja jest darmowa</strong>, aby sprawdzić czy zajęcia się podobają.
                            </p>
                            <div className='flex justify-center mt-10'>
                                <Button size={"lg"} asChild>
                                    <Link href={"/oferta"}>
                                        Zobacz ofertę
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default LessonSection