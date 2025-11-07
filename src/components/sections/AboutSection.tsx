import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../ui/container'
import { MAN_SOLVING_CUBE_IMG } from '@/constants/images'
import AnimatedContent from '../animations/AnimatedContent/AnimatedContent'

function AboutSection() {
  return (
    <section className='py-section'>
        <Container>
            <AnimatedContent direction='horizontal'>
                <h2 className='heading2 heading-margin-bottom'>Trochę o mnie</h2>
            </AnimatedContent>
            <div className='grid lg:grid-cols-2 gap-5'>
                <AnimatedContent direction='horizontal' delay={500}>
                    <div>
                        <figure className='relative size-[250px] sm:size-[400px] mx-auto'>
                            <Image src={MAN_SOLVING_CUBE_IMG.src} alt={MAN_SOLVING_CUBE_IMG.alt} fill className='rounded-full object-cover' />
                        </figure>
                        <div className='rounded-4xl bg-primary text-white flex flex-col items-center justify-center w-fit p-5 uppercase border-4 mx-auto mt-5'>
                            <span className='text-xl'>6 lat</span>
                            <span className='text-sm'>doświadczenia</span>
                        </div>
                    </div>
                </AnimatedContent>
                <AnimatedContent direction='horizontal' delay={700}>
                    <div className='pt-5 little-bigger-text space-y-5 text-center lg:text-left text-pretty'>
                        <p>
                            Nazywam się Mateusz Bizoń. Od roku 2019 zajmuje się układaniem kostki Rubika, a od roku 2020 zacząłem układać kostkę na czas. Osiągam wyniki średnio poniżej 16 sekund. Byłem na kilku zawodach online gdzie zajmowałem mniej więcej miejsca od 40 do 80 w Polsce.
                        </p>
                        <p>
                            Aktualnie nie zajmuję się już poprawianiem swoich umiejętności w kostce natomiast pomagam innym w ułożeniu kostki Rubika po raz pierwszy lub poprawą swoich wyników.
                        </p>
                        <p>
                            Moim celem jest pokazanie, że <strong>układanie kostki Rubika nie jest trudne i każdy może się tego nauczyć</strong>. Układanie kostki rozwija pamięć, koncentrację oraz zdolności manualne.
                        </p>
                        <p>
                            Sprawdź jak sobię radzę w pucharze Polski Online (PPO).{" "}
                            <Button variant={"link"} size={"link"} className='text-lg md:text-xl' asChild>
                                <Link href={"https://rankingi.rubiart.pl/competitors/22MABI01"} target='_blank'>
                                    Zobacz moje wyniki
                                </Link>
                            </Button>
                        </p>
                        <div className='flex gap-5 justify-center flex-wrap lg:justify-start'>
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
                    </div>
                </AnimatedContent>
            </div>
        </Container>
    </section>
  )
}

export default AboutSection