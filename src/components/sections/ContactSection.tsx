import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import Container from '../ui/container'
import { PHONE_NUMBER } from '@/constants'

function ContactSection() {
  return (
    <section className='py-section px-5 '>
        <Container className='rounded-4xl p-10 radial-background space-y-10 border'>
            <h2 className='heading2 text-center heading-margin-bottom'>
                Rozpocznijmy naukę. Gotowi?
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
        </Container>
    </section>
  )
}

export default ContactSection