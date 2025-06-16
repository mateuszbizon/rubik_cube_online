import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type CircleLoadingProps = ComponentProps<"div">

function CircleLoading({ className, ...props }: CircleLoadingProps) {
  return (
    <div className={cn('w-14 aspect-square p-[1px] rounded-[50%] bg-conic from-black/0 from-10% to-primary mask animate-rotate', className)} {...props}></div>
  )
}

export default CircleLoading