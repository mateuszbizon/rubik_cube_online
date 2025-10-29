"use client"

import React from 'react'
import Link from 'next/link'
import { NAV_ITEMS_LIST } from '@/constants/navItemsList'
import Image from 'next/image'
import { Button } from '../ui/button'
import NavCard from '../cards/NavCard'
import Container from '../ui/container'
import { LOGO } from '@/constants/images'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import NavMobile from './NavMobile'

function Nav() {
  return (
    <nav className='fixed top-0 h-nav-height bg-white z-10 w-full'>
        <Container>
            <div className='flex justify-between items-center h-full'>
                <div className='flex gap-10 items-center'>
                    <Link href={"/"} title='Strona główna'>
                        <figure className='relative size-14 rounded-full overflow-hidden'>
                            <Image src={LOGO.src} alt={LOGO.alt} fill className='object-cover' />
                        </figure>
                    </Link>
                    <div className='hidden lg:flex'>
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList className='flex gap-0'>
                                {NAV_ITEMS_LIST.map(item => (
                                    <NavigationMenuItem key={item.label}>
                                        <NavCard item={item} />
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <Button className='hidden lg:inline-flex' asChild>
                        <Link href={"#start-lesson"}>
                            Zaczynam naukę
                        </Link>
                    </Button>
                </div>
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav