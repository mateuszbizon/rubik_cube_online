import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Container from '../ui/container'

function OfferSection() {
  return (
    <section className='bg-background-dark py-section'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>
                Co mogę zaoferować
            </h2>
            <div className='grid md:grid-cols-2 gap-10 text-center mb-20'>
                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Nauka kostki Rubika od zera
                    </h3>
                    <p className='little-bigger-text'>
                        Naucze Cię układać kostkę Rubika od samych podstaw. Używam do tego sposobu opartego na historyjkach, w łatwy i nowoczesny sposób zrozumiały dla każdego, bez ciężkich schematów.
                    </p>
                    <div className='flex justify-center mt-auto'>
                        <Button asChild>
                            <Link href={"/oferta/metoda-podstawowa"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Nauka kostki Rubika od konkretnego etapu
                    </h3>
                    <p className='little-bigger-text'>
                        Pomogę Ci poprawić swoje czasy, nieważne czy chcesz nauczyć się metody zaawansowanej czy polepszyć metodę podstawową. Zrobię wszystko abyś układał szybciej niezależnie od tego na co jesteś gotowy :{")"}
                    </p>
                    <div className='flex justify-center mt-auto'>
                        <Button asChild>
                            <Link href={"/oferta/nauka-od-konkretnego-etapu"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Nauka metody zaawansowanej
                    </h3>
                    <p className='little-bigger-text'>
                        Nauczę Cię metody Fridrich lub też zwanej CFOP, która jest najpopularniejszą metodą zaawansowaną na świecie. Dzięki niej będziesz mógł układać kostkę Rubika poniżej 30 sekund, a z czasem jeszcze nawet szybciej!
                    </p>
                    <div className='flex justify-center mt-auto'>
                        <Button asChild>
                            <Link href={"/oferta/metoda-zaawansowana"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Nauka kostki Rubika dla dzieci
                    </h3>
                    <p className='little-bigger-text'>
                        Posiadam doświadczenie w nauce dzieci w różnym wieku. Potrafię dostosować sposób nauki do wieku i umiejętności dziecka, aby nauka była dla niego przyjemnością i zabawą.
                    </p>
                    <div className='flex justify-center mt-auto'>
                        <Button asChild>
                            <Link href={"/oferta/nauka-dla-dzieci"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <h2 className='heading3 heading-margin-bottom text-center'>
                Oprócz standardowej kostki Rubika, uczę także innych łamigłówek
            </h2>
            <div className='grid md:grid-cols-2 gap-10 text-center'>
                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Kostka 2x2
                    </h3>
                    <p className='little-bigger-text'>
                        Nauczę Cię układać kostkę 2x2, która jest idealna dla początkujących. Poznasz prostą metodę, która pozwoli Ci szybko i efektywnie układać tę kostkę.
                    </p>
                    <div className='flex justify-center mt-auto'>
                        <Button asChild>
                            <Link href={"/oferta/kostka-2x2"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Kostka 4x4
                    </h3>
                    <p className='little-bigger-text'>
                        Nauczę Cię układać kostkę 4x4, która jest bardziej zaawansowaną wersją klasycznej kostki Rubika. Poznasz metody radzenia sobie z parowaniem krawędzi i centrami, aby skutecznie układać tę kostkę.
                    </p>
                    <div className='flex justify-center mt-auto'>
                        <Button asChild>
                            <Link href={"/oferta/kostka-4x4"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Pyraminx
                    </h3>
                    <p className='little-bigger-text'>
                        Nauczę Cię układać Pyraminx, czyli piramidalną łamigłówkę. Poznasz metody i techniki specyficzne dla tej kostki, aby szybko i efektywnie ją układać.
                    </p>
                    <div className='flex justify-center mt-auto'>
                        <Button asChild>
                            <Link href={"/oferta/pyraminx"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-10 flex flex-col gap-5'>
                    <h3 className='heading3'>
                        Skewb
                    </h3>
                    <p className='little-bigger-text'>
                        Nauczę Cię układać Skewb, czyli kostkę o nietypowym kształcie. Poznasz metody i techniki specyficzne dla tej kostki, aby szybko i efektywnie ją układać.
                    </p>
                    <div className='flex justify-center mt-auto'>
                        <Button asChild>
                            <Link href={"/oferta/skewb"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
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