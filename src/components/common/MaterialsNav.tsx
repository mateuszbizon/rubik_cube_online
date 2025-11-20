import { MATERIALS_ITEMS } from '@/constants/materials'
import Link from 'next/link'
import React from 'react'

function MaterialsNav() {
  return (
    <aside className='w-[300px] bg-white sticky top-nav-height h-[calc(100vh-theme(spacing.nav-height))] hidden md:block overflow-y-auto px-5 py-10 space-y-10'>
        {MATERIALS_ITEMS.map(item => (
            <div key={item.name} className='space-y-5'>
                <p className='uppercase font-semibold text-sm text-gray'>{item.name}</p>
                <div className='flex flex-col gap-2'>
                    {item.items.map(navItem => (
                        <Link key={navItem.label} href={navItem.href} className='text-foreground/80 hover:text-black transition duration-300'>
                            {navItem.label}
                        </Link>
                    ))}
                </div>
            </div>
        ))}
    </aside>
  )
}

export default MaterialsNav