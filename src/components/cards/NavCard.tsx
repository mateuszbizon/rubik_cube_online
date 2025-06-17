"use client"

import { NavItem } from '@/constants/navItemsList'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavCardProps = {
    navItem: NavItem
    activeLink?: string
}

function NavCard({ navItem, activeLink }: NavCardProps) {
    const pathName = usePathname()
    const isLinkActive = navItem.section ? navItem.href === activeLink : navItem.href === pathName

  return (
    <Link href={navItem.href} className={`nav-link text-lg font-medium lg:px-5 ${isLinkActive ? "text-primary" : ""}`}>
        {navItem.name}
    </Link>
  )
}

export default NavCard