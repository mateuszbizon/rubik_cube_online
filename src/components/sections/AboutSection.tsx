import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

function AboutSection() {
  return (
    <section id='about' className='py-section bg-light/70'>
        <Container>
            <h2 className='heading2 heading-margin-bottom text-dark'>Trochę o mnie</h2>
            <div className='grid lg:grid-cols-2 gap-8'>
                <div>
                    <div className='relative size-[250px] sm:size-[400px] mx-auto'>
                        <Image src={"/about_img.jpg"} alt='Mężczyna układający kostkę Rubika' fill className='rounded-full object-cover' />
                        {/* <div className='absolute -top-12 -left-12 rounded-full bg-primary text-white flex flex-col items-center justify-center size-[140px] uppercase border-4 border-white'>
                            <span className='text-xl -mt-2'>6 lat</span>
                            <span className='text-sm'>doświadczenia</span>
                        </div> */}
                    </div>
                </div>
                <div className='pt-5 text-xl space-y-5 text-center lg:text-left text-pretty'>
                    <p>
                        Nazywam się Mateusz Bizoń. Od roku 2019 zajmuje się układaniem kostki Rubika, a od roku 2020 zacząłem układać kostkę na czas. Osiągam wyniki średnio poniżej 18 sekund. Byłem na kilku zawodach online gdzie zajmowałem mniej więcej miejsca od 60 do 80 w Polsce.
                    </p>
                    <p>
                        Aktualnie nie zajmuję się już poprawianiem swoich umiejętności w kostce natomiast pomagam innym w ułożeniu kostki Rubika po raz pierwszy lub poprawą swoich wyników.
                    </p>
                    <div className='flex gap-5 justify-center flex-wrap lg:justify-start'>
                        <Button size={"lg"} asChild>
                            <Link href={"#lesson"}>
                                Przebieg lekcji
                            </Link>
                        </Button>
                        <Button variant={"secondary-black"} size={"lg"} asChild>
                            <Link href={"#offer"}>
                                Oferta
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutSection