import SingleOfferSection from '@/components/sections/SingleOfferSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { KIDS_METHOD_OFFER } from '@/constants/offers'
import React from 'react'

function KidsMethodOfferPage() {
  return (
    <>
        <SubPageHero title='Kurs kostki Rubika dla dzieci' />
        <SingleOfferSection title='Nauka przez zabawę. Kurs kostki Rubika dla najmłodszych' offer={KIDS_METHOD_OFFER} />
    </>
  )
}

export default KidsMethodOfferPage