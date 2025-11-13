import AboutSection from '@/components/sections/AboutSection'
import MySkillVideoSection from '@/components/sections/MySkillVideoSection'
import QuoteSection from '@/components/sections/QuoteSection'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function AboutMePage() {
  return (
    <>
        <SubPageHero />
        <AboutSection />
        <QuoteSection />
        <MySkillVideoSection />
    </>
  )
}

export default AboutMePage