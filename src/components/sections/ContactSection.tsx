import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

function ContactSection() {
  return (
    <section id='start-lesson' className='py-section text-foreground'>
        <Container>
            <h2 className='heading2 text-foreground heading-margin-bottom'>
                Rozpocznijmy naukę
            </h2>
            <div className='bg-orange rounded-4xl text-center p-10 space-y-10 mb-16'>
                <p className='text-2xl font-semibold text-white'>
                    Rozpocznij naukę poprzez moje ogłoszenie na Superprof, klikając w przycisk poniżej.
                </p>
                <div className='flex justify-center'>
                    <Button size={"lg"} asChild>
                        <Link href={"https://www.superprof.pl/speedcuber-letnim-doswiadczeniem-ukladajacy-kostke-rubika-srednio-ponizej-sekund-udzielam-prywatnych-lekcji-jak.html"} target='_blank'>
                            Rozpocznij naukę
                        </Link>
                    </Button>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5 mb-16'>
                <div className='w-full h-[1px] bg-foreground'></div>
                <p className='uppercase text-2xl font-semibold text-center'>
                    lub
                </p>
                <div className='w-full h-[1px] bg-foreground'></div>
            </div>
            <div className='bg-purple rounded-4xl text-center p-10 space-y-10 mb-16'>
                <p className='text-2xl font-semibold text-white'>
                    Skontaktuj się ze mną w inny, bardziej tradycyjny sposób.
                </p>
                <div className='flex justify-center flex-wrap gap-10 text-white'>
                    <div className='flex flex-col items-center gap-5'>
                        <Phone className='size-6' />
                        <Link href={"tel:+48723-875-386"} className='nav-link text-white hover:text-foreground'>
                            <span className='text-lg sm:text-xl font-medium'>+48 723 875 386</span>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center gap-5'>
                        <Mail className='size-6' />
                        <Link href={"mailto:mateuszbizon2000@gmail.com"} className='nav-link text-white hover:text-foreground'>
                            <span className='text-lg sm:text-xl font-medium'>mateuszbizon2000@gmail.com</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ContactSection