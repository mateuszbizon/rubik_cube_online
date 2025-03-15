import React from 'react'
import Container from './Container'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

function RootHeader() {
  return (
    <header className='sticky top-0 h-root-header bg-white z-10'>
        <Container>
            <nav className='flex justify-between items-center h-full'>
                <div className='flex gap-10 items-center'>
                    <Link href={"/"}>
                        <span className='text-primary text-xl font-bold'>RubikOnline</span>
                    </Link>
                    <ul className='hidden lg:block'>
                        <li>Strona główna</li>
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