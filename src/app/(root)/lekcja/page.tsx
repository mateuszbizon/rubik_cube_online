import LessonSection from '@/components/sections/LessonSection'
import RequireSection from '@/components/sections/RequireSection'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function LessonPage() {
  return (
    <>
        <SubPageHero title='Przebieg lekcji' />
        <LessonSection />
        <RequireSection />
    </>
  )
}

export default LessonPage