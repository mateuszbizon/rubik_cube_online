import { MATERIALS_ITEMS } from '@/constants/materials'
import React from 'react'
import MaterialNavCard from '../cards/MaterialNavCard'

function MaterialsNav() {
  return (
    <aside className='w-[300px] bg-white sticky top-nav-height h-[calc(100vh-theme(spacing.nav-height))] hidden lg:block overflow-y-auto px-5 py-10 shrink-0'>
        <nav className='space-y-15'>
            {MATERIALS_ITEMS.map(item => (
                <MaterialNavCard key={item.name} item={item} />
            ))}
        </nav>
    </aside>
  )
}

export default MaterialsNav