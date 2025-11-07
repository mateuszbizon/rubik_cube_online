import SingleOfferSection from '@/components/sections/SingleOfferSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { CUBE_4X4_OFFER } from '@/constants/offers'
import React from 'react'

function Cube4x4OfferPage() {
  return (
    <>
        <SubPageHero title='Kurs kostki 4x4' />
        <SingleOfferSection title='Opanuj układanie kostki 4x4 i wejdź na wyższy poziom umiejętności' offer={CUBE_4X4_OFFER} />
    </>
  )
}

export default Cube4x4OfferPage