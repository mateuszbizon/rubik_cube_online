import SingleOfferSection from '@/components/sections/SingleOfferSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { PYRAMINX_OFFER } from '@/constants/offers'
import React from 'react'

function PyraminxOfferPage() {
  return (
    <>
        <SubPageHero title='Kurs Pyraminx' />
        <SingleOfferSection title='Poznaj tajniki układania Pyraminxa – kostki w kształcie piramidy' offer={PYRAMINX_OFFER} />
    </>
  )
}

export default PyraminxOfferPage