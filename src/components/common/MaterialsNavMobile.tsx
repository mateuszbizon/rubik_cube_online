import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { MATERIALS_ITEMS } from '@/constants/materials'
import Link from 'next/link'

function MaterialsNavMobile() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button size={"icon"}>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent className='overflow-y-auto py-10 px-5' side='left'>
            <SheetHeader className='hidden'>
                <SheetTitle>Mobilna nawigacja</SheetTitle>
            </SheetHeader>
            <nav className='space-y-10'>
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
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MaterialsNavMobile