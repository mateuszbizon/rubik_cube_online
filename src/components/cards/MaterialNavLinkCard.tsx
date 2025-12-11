"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

type MaterialNavLinkProps = {
    href: string
    label: string
    isActive: boolean
}

function MaterialNavLinkCard({ href, label, isActive }: MaterialNavLinkProps) {
    const linkRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        if (isActive && linkRef.current) {
            linkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [isActive])

    return (
        <Link
            ref={linkRef}
            href={href}
            className={`${isActive ? "text-black" : "text-foreground/80"} hover:text-black transition duration-300`}
        >
            {label}
        </Link>
    )
}

export default MaterialNavLinkCard