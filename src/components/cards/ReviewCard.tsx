import React, { useState } from 'react'
import { CarouselItem } from '../ui/carousel'
import { Review } from '@/constants/reviewsList'
import { Button } from '../ui/button'

type ReviewCardProps = {
    review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
    const [showMore, setShowMore] = useState(false)

  return (
    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
        <div className={`bg-background-dark rounded-t-xl p-10 space-y-5 text-center min-h-[300px] ${showMore ? "max-h-[10000px]" : "max-h-[300px]"}`}>
            <p className='text-2xl font-semibold'>{review.name}</p>
            <p className={`text-xl ${showMore ? "line-clamp-none" : "line-clamp-[7]"}`}>
                {review.content}
            </p>
        </div>
        <div className='bg-background-dark rounded-b-xl p-5 pt-0'>
            <Button variant={"ghost"} onClick={() => setShowMore(prev => !prev)}>{!showMore ? "Pokaż więcej" : "Pokaż mniej"}</Button>
        </div>
    </CarouselItem>
  )
}

export default ReviewCard