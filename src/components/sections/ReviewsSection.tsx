"use client"

import React from 'react'
import Container from '../Container'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { REVIEWS_LIST } from '@/constants/reviewsList'
import ReviewCard from '../cards/ReviewCard'

function ReviewsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  return (
    <section id='reviews' className='py-section bg-gray/30 text-dark'>
        <Container>
            <h2 className='heading2 mb-16'>
                Opinie moich uczniów
            </h2>
            <Carousel
                opts={{
                    loop: true
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className='lg:px-10'
            >
                <CarouselContent>
                    {REVIEWS_LIST.map(item => (
                        <ReviewCard key={item.content} review={item} />
                    ))}
                </CarouselContent>
                <CarouselPrevious variant={"icon"} className='hidden lg:inline-flex' />
                <CarouselNext variant={"icon"} className='hidden lg:inline-flex' />
            </Carousel>
        </Container>
    </section>
  )
}

export default ReviewsSection