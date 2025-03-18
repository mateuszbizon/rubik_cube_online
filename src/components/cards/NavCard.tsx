import { NavItem } from '@/constants/navItemsList'
import Link from 'next/link'
import React from 'react'

type NavCardProps = {
    navItem: NavItem
}

function NavCard({ navItem }: NavCardProps) {
  return (
    <li className='text-lg'>
        <Link href={navItem.href} className='nav-link lg:px-5'>
            {navItem.name}
        </Link>
    </li>
  )
}

export default NavCard