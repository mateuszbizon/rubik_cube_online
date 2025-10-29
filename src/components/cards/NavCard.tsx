"use client"

import { NavItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { NavigationMenuContent, NavigationMenuLink, NavigationMenuTrigger } from '../ui/navigation-menu'
import { Button, buttonVariants } from '../ui/button'

type NavCardProps = {
    item: NavItem
}

function NavCard({ item }: NavCardProps) {
    const pathName = usePathname()
    const isActive = pathName === item.href

  return (
    <>
        {item.isLink ? (
            <NavigationMenuLink asChild>
                <Button className={`py-0 px-6 ${isActive ? "text-primary" : "text-foreground"} hover:text-primary text-lg`} variant={"link"} asChild>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </Button>
            </NavigationMenuLink>
        ) : (
            <>
                <NavigationMenuTrigger className={`${buttonVariants({ variant: "link" })} py-0 text-foreground hover:primary text-lg`}>
                    {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className='space-y-1'>
                        {item.menu.map(menuItem =>  (
                            <li key={menuItem.label}>
                                <Button variant={"link"} className='text-foreground hover:text-primary text-lg' asChild>
                                    <Link href={menuItem.href}>
                                        {menuItem.label}
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </>
        )}
    </>
  )
}

export default NavCard