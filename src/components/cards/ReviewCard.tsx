import React from 'react'
import { CarouselItem } from '../ui/carousel'
import { Review } from '@/constants/reviewsList'

type ReviewCardProps = {
    review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
        <div className='bg-light rounded-xl p-10 space-y-5 min-h-[300px] text-center'>
            <p className='text-2xl font-semibold'>{review.name}</p>
            <p className='text-xl'>
                {review.content}
            </p>
        </div>
    </CarouselItem>
  )
}

export default ReviewCard