"use client"

import { MaterialItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type MaterialNavCardProps = {
    item: MaterialItem
}

function MaterialNavCard({ item }: MaterialNavCardProps) {
    const pathName = usePathname()

  return (
    <div key={item.name} className='space-y-5'>
        <p className='uppercase font-semibold text-sm text-gray'>{item.name}</p>
        <div className='flex flex-col gap-2'>
            {item.items.map(navItem => {
                const isActive = pathName.includes(navItem.href)

                return (
                    <Link key={navItem.label} href={navItem.href} className={`${isActive ? "text-black" : "text-foreground/80"} hover:text-black transition duration-300`}>
                        {navItem.label}
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default MaterialNavCard