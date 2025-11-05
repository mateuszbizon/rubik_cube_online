import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import Container from '../ui/container'
import { PHONE_NUMBER } from '@/constants'

function ContactSection() {
  return (
    <section className='py-section'>
        <Container>
            <div className='rounded-4xl px-5 py-10 md:px-10 md:py-30 radial-background space-y-10 border'>
                <h2 className='heading2 text-center heading-margin-bottom'>
                    Rozpocznijmy kurs kostki Rubika. Gotowi?
                </h2>
                <p className='bigger-text text-center max-w-2xl mx-auto'>
                    Napisz do mnie wiadomość lub zadzwoń, aby umówić się na <strong>pierwszą darmową lekcję</strong> lub dowiedzieć się więcej o ofercie.
                </p>
                <div className='flex justify-center'>
                    <Button size={"lg"} asChild>
                        <Link href={`tel:${PHONE_NUMBER}`}>
                            <Phone /> {PHONE_NUMBER}
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ContactSection