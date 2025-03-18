"use client"

import React from 'react'
import Container from './Container'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { NAV_ITEMS_LIST } from '@/constants/navItemsList'
import NavCard from './cards/NavCard'
import useScrollSpy from '@/hooks/useScrollSpy'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

function RootHeader() {
    const { activeLink } = useScrollSpy({ navItems: NAV_ITEMS_LIST })

  return (
    <header className='sticky top-0 h-root-header bg-white z-10'>
        <Container>
            <nav className='flex justify-between items-center h-full'>
                <div className='flex gap-10 items-center'>
                    <Link href={"/"}>
                        <span className='text-primary text-xl font-bold'>RubikOnline</span>
                    </Link>
                    <ul className='hidden lg:flex items-center'>
                        {NAV_ITEMS_LIST.map(item => (
                            <li key={item.name}>
                                <NavCard navItem={item} activeLink={activeLink} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size={"icon"} variant={"icon"} className='lg:hidden' aria-label='open side navigation'>
                                <MenuIcon className='size-6' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='py-12 px-4'>
                            <SheetHeader className='hidden'>
                                <SheetTitle>Mobile side navigation</SheetTitle>
                            </SheetHeader>
                            <ul className='space-y-5'>
                                {NAV_ITEMS_LIST.map(item => (
                                    <li key={item.name}>
                                        <SheetClose asChild>
                                            <Link href={item.href} className={`nav-link text-lg font-medium lg:px-5 ${activeLink === item.section ? "text-primary" : ""}`}>
                                                {item.name}
                                            </Link>
                                        </SheetClose>
                                    </li>
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </Container>
    </header>
  )
}

export default RootHeader