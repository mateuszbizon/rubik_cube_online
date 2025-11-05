"use client"

import React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { REVIEWS_LIST } from '@/constants/reviewsList'
import ReviewCard from '../cards/ReviewCard'
import { Button } from '../ui/button'
import Link from 'next/link'
import Container from '../ui/container'
import { SUPERPROF_URL } from '@/constants'

function ReviewsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  return (
    <section className='py-section bg-background'>
        <Container>
            <h2 className='heading2 heading-margin-bottom text-center'>
                Opinie moich uczniów o kursie kostki Rubika
            </h2>
            <Carousel
                opts={{
                    loop: true
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className='lg:px-10 mb-10'
            >
                <CarouselContent>
                    {REVIEWS_LIST.map(item => (
                        <ReviewCard key={item.content} review={item} />
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden lg:inline-flex' />
                <CarouselNext className='hidden lg:inline-flex' />
            </Carousel>
            <div className='flex justify-center'>
                <Button size={"lg"} asChild>
                    <Link href={SUPERPROF_URL} target='_blank'>
                        Wszystkie opinie
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default ReviewsSection