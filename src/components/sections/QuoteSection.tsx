import React from 'react'
import Container from '../Container'
import { Quote } from 'lucide-react'
import Shadow from '../ui/shadow'

function QuoteSection() {
  return (
    <section className='relative text-light py-[100px] bg-[url(/quote_bg_small.jpg)] md:bg-[url(/quote_bg_medium.jpg)] bg-center bg-no-repeat bg-cover bg-fixed z-0'>
        <Shadow />
        <Quote className='absolute top-10 right-10 md:right-20 size-9 rotate-12' />
        <Quote className='absolute bottom-10 left-10 md:left-20 size-9 -rotate-30' />
        <Container>
            <h2 className='heading2 text-center md:leading-15 z-10'><em>Nie ważne ile masz lat, czy umiesz układać kostkę lub skąd jesteś. Razem określimy Twój poziom oraz cele, aby poprawić swoje umiejętności.</em></h2>
        </Container>
    </section>
  )
}

export default QuoteSection