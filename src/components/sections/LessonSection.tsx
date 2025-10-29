import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'

function LessonSection() {
  return (
    <section id='lesson' className='py-section text-foreground'>
        <Container>
            <h2 className='heading2 heading-margin-bottom'>
                Jak przebiega lekcja
            </h2>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='bg-foreground rounded-xl p-10 space-y-5 md:order-2 md:w-[300px] text-center md:text-left text-white shrink-0 flex flex-col justify-center'>
                    <div className='space-y-2'>
                        <p className='text-lg'>
                            Czas trwania
                        </p>
                        <p className='text-xl font-semibold'>
                            1h
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-lg font-medium'>
                            Koszt
                        </p>
                        <p className='text-xl font-semibold'>
                            50 zł
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-lg'>
                            Główna platforma
                        </p>
                        <p className='text-xl font-semibold'>
                            <Link href={"https://www.superprof.pl/"} target='_blank' title='Superprof'>Superprof</Link>
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-lg'>
                            Lekcje darmowe
                        </p>
                        <p className='text-xl font-semibold'>
                            Pierwsza lekcja
                        </p>
                    </div>
                </div>

                <div className='grow text-xl space-y-5 text-pretty'>
                    <p>
                        Zajęcia odbywają się na platformie <Link href={"https://www.superprof.pl/"} className='link' target='_blank' title='Superprof'>Superprof</Link> lub jeśli będzie to konieczne na innych znanych platformach tj. Messenger, WhatsApp czy Discord, ale także na takiej której nie znam. W przypadku nowej dla platformy postaram się z nią zapoznać aby na pewno lekcja potoczyła się na odpowiednich warunkach.
                    </p>
                    <p>
                        Lekcje odbywają się głównie online jak wspomniałem powyżej lecz istnieje jeszcze szansa spotkania stacjonarnego jeśli jest to w Zgorzelcu, województwo dolnośląskie lub pobliskich miejscowościach.
                    </p>
                    <p>
                        Lekcja trwa godzinę i kosztuje 50 zł. Dla każdego nowego ucznia, <strong>pierwsza lekcja jest darmowa</strong>, aby sprawdzić czy zajęcia się podobają i czy jest to to czego szukasz.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default LessonSection