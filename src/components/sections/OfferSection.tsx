import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Container from '../ui/container'

function OfferSection() {
  return (
    <section className='bg-background-dark py-section'>
        <Container>
            <h2 className='heading2 heading-margin-bottom'>
                Co mogę zaoferować
            </h2>
            <div className='grid md:grid-cols-2 gap-10 text-foreground text-center mb-20'>
                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Nauka kostki Rubika od zera
                    </h3>
                    <p className='little-bigger-text mt-auto'>
                        Naucze Cię układać kostkę Rubika od samych podstaw. Używam do tego sposobu opartego na historyjkach, w łatwy i nowoczesny sposób zrozumiały dla każdego, bez ciężkich schematów.
                    </p>
                </div>

                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Nauka kostki Rubika od konkretnego etapu
                    </h3>
                    <p className='little-bigger-text mt-auto'>
                        Pomogę Ci poprawić swoje czasy, nieważne czy chcesz nauczyć się metody zaawansowanej czy polepszyć metodę podstawową. Zrobię wszystko abyś układał szybciej niezależnie od tego na co jesteś gotowy :{")"}
                    </p>
                </div>
            </div>
            <h2 className='heading3 heading-margin-bottom'>
                Oprócz standardowej kostki Rubika, uczę także innych łamigłówek
            </h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-foreground text-center gap-10'>
                <div className='bg-white rounded-2xl p-5'>
                    <span className='bigger-text'>
                        Kostka 2x2x2
                    </span>
                </div>
                <div className='bg-white rounded-2xl p-5'>
                    <span className='bigger-text'>
                        Kostka 4x4x4
                    </span>
                </div>
                <div className='bg-white rounded-2xl p-5'>
                    <span className='bigger-text'>
                        Pyraminx
                    </span>
                </div>
                <div className='bg-white rounded-2xl p-5'>
                    <span className='bigger-text'>
                        Skewb
                    </span>
                </div>
            </div>
            <div className='flex justify-center flex-wrap gap-5 sm:gap-10 mt-12'>
                <Button size={"lg"} asChild>
                    <Link href={"/zaczynam-nauke"}>
                        Zaczynam naukę
                    </Link>
                </Button>
                <Button variant={"secondary-black"} size={"lg"} asChild>
                    <Link href={"/lekcja"}>
                        Przebieg lekcji
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default OfferSection