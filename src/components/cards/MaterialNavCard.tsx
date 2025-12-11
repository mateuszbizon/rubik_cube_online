"use client"

import { MaterialItem } from '@/types'
import { usePathname } from 'next/navigation'
import React from 'react'
import MaterialNavLinkCard from './MaterialNavLinkCard'

type MaterialNavCardProps = {
    item: MaterialItem
}

function MaterialNavCard({ item }: MaterialNavCardProps) {
    const pathName = usePathname()

  return (
    <div key={item.name} className='space-y-5'>
        <p className='uppercase font-semibold text-sm text-gray'>{item.name}</p>
        <div className='flex flex-col gap-5'>
            {item.items.map(navItem => {
                const isActive = pathName.includes(navItem.href)

                return (
                    <MaterialNavLinkCard
                        key={navItem.label}
                        href={navItem.href}
                        label={navItem.label}
                        isActive={isActive}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default MaterialNavCard