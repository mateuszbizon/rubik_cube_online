"use client"

import React from 'react'
import Container from './Container'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { NAV_ITEMS_LIST } from '@/constants/navItemsList'
import NavCard from './cards/NavCard'
import useScrollSpy from '@/hooks/useScrollSpy'

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
                            <NavCard key={item.name} navItem={item} activeLink={activeLink} />
                        ))}
                    </ul>
                </div>
                <Button size={"icon"} variant={"icon"} className='lg:hidden' aria-label='menu icon'>
                    <MenuIcon className='size-6' />
                </Button>
            </nav>
        </Container>
    </header>
  )
}

export default RootHeader