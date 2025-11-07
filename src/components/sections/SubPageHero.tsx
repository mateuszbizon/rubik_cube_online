"use client"

import React from 'react'
import Container from '../ui/container'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all'

type SubPageHeroProps = {
    title?: string
}

function SubPageHero({ title = "O mnie" }: SubPageHeroProps) {
    useGSAP(() => {
        const headingWords = new SplitText(".heading1", { type: "words" })

        gsap.from(headingWords.words, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.2
        })
    }, [])

  return (
    <header className='pt-[calc(theme(spacing.section)*2)] pb-section header-background rounded-b-2xl'>
        <Container>
            <h1 className='heading1 text-center'>{title}</h1>
        </Container>
    </header>
  )
}

export default SubPageHero