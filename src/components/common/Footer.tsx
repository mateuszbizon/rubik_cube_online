import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { EMAIL, PHONE_NUMBER } from '@/constants'
import { LOGO } from '@/constants/images'
import Image from 'next/image'
import { NAV_ITEMS_LIST } from '@/constants/navItemsList'

function Footer() {
  return (
    <footer className='pt-section pb-7 bg-border/80'>
        <Container>
            <div className='grid md:grid-cols-[repeat(auto-fit,_280px)] gap-10 md:gap-20'>
                <div className='space-y-4 text-center md:text-left'>
                    <figure className='relative size-20 mx-auto md:mx-0'>
                        <Image src={LOGO.src} alt={LOGO.alt} fill className='rounded-full' />
                    </figure>
                    <p className='md:text-lg'>
                        <em>
                            Nauka układania kostki Rubika w prosty i przyjemny sposób. Zacznij swoją przygodę z kostką już dziś!
                        </em>
                    </p>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Nawigacja</p>
                    <nav>
                        <ul className='space-y-2'>
                            {NAV_ITEMS_LIST.map(item => {
                                if (item.isLink) return (
                                    <li key={item.label}>
                                        <Button className='text-foreground hover:text-foreground/50' size={"link"} variant={"link"} asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )

                                if (!item.isLink && item.href) return (
                                    <li key={item.label}>
                                        <Button className='text-foreground hover:text-foreground/50' size={"link"} variant={"link"} asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )
                            })}
                            <li>
                                <Button className='text-foreground hover:text-foreground/50' size={"link"} variant={"link"} asChild>
                                    <Link href={"/zaczynam-nauke"}>
                                        Zaczynam naukę
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Dane kontaktowe</p>
                    <div className='space-y-5'>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                                <Link href={`tel:${PHONE_NUMBER}`}>
                                    <Phone /> {PHONE_NUMBER}
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                                <Link href={`mailto:${EMAIL}`}>
                                    <Mail /> {EMAIL}
                                </Link>
                            </Button>
                        </div>
                        {/* <div className='flex justify-center lg:justify-start items-center gap-3 text-foreground'>
                            <Button size={"icon"} asChild>
                                <Link href={INSTA} target='_blank' title='Instagram'>
                                    <Instagram />
                                    <span className='sr-only'>Instagram</span>
                                </Link>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='mt-section flex flex-col sm:flex-row justify-between gap-3 items-center'>
                <p>
                    &copy; {new Date().getFullYear()} | <span className='font-semibold'>Mateusz Bizoń</span>
                </p>
                <p>
                    <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                        <Link href="https://www.mateuszbizonweb.pl" target='_blank'>
                            Stworzone przez Matiego
                        </Link>
                    </Button>
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer