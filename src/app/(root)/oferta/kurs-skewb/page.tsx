import SingleOfferSection from '@/components/sections/SingleOfferSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { SKEWB_OFFER } from '@/constants/offers'
import React from 'react'

function SkewbOfferPage() {
  return (
    <>
        <SubPageHero title='Kurs Skewb' />
        <SingleOfferSection title='Naucz się układać Skewb – oryginalną kostkę o przekątnych ruchach' offer={SKEWB_OFFER} />
    </>
  )
}

export default SkewbOfferPage