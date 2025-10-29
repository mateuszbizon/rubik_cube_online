import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'

function OfferSection() {
  return (
    <section id='offer' className='bg-primary/70 py-section text-white'>
        <Container>
            <h2 className='heading2 heading-margin-bottom'>
                Co mogę zaoferować
            </h2>
            <div className='grid md:grid-cols-2 gap-10 text-foreground text-center mb-16'>
                <div className='bg-white rounded-2xl p-10 space-y-5'>
                    <h3 className='text-2xl font-semibold'>
                        Nauka kostki Rubika od zera
                    </h3>
                    <p className='text-xl'>
                        Naucze Cię układać kostkę Rubika od samych podstaw. Używam do tego sposobu opartego na historyjkach, w łatwy i nowoczesny sposób zrozumiały dla każdego, bez ciężkich schematów.
                    </p>
                </div>

                <div className='bg-white rounded-2xl p-10 space-y-5'>
                    <h3 className='text-2xl font-semibold'>
                        Nauka kostki Rubika od konkretnego etapu
                    </h3>
                    <p className='text-xl'>
                        Pomogę Ci poprawić swoje czasy, nieważne czy chcesz nauczyć się metody zaawansowanej czy polepszyć metodę podstawową. Zrobię wszystko abyś układał szybciej niezależnie od tego na co jesteś gotowy :{")"}
                    </p>
                </div>
            </div>
            <p className='text-2xl font-medium mb-16'>
                Oprócz standardowej kostki Rubika, uczę także innych łamigłówek:
            </p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-foreground text-center gap-10'>
                <div className='bg-white rounded-2xl p-5'>
                    <span className='text-xl'>
                        Kostka 2x2x2
                    </span>
                </div>
                <div className='bg-white rounded-2xl p-5'>
                    <span className='text-xl'>
                        Kostka 4x4x4
                    </span>
                </div>
                <div className='bg-white rounded-2xl p-5'>
                    <span className='text-xl'>
                        Pyraminx
                    </span>
                </div>
                <div className='bg-white rounded-2xl p-5'>
                    <span className='text-xl'>
                        Skewb
                    </span>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Button variant={"secondary"} size={"lg"} asChild>
                    <Link href={"#start-lesson"}>
                        Zaczynam naukę
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default OfferSection