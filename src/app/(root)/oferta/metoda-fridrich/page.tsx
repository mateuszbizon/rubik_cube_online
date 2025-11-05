import SingleOfferSection from '@/components/sections/SingleOfferSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { ADVANCED_METHOD_OFFER } from '@/constants/offers'
import React from 'react'

function AdvancedMethodOfferPage() {
  return (
    <>
        <SubPageHero title='Kurs metody Fridrich' />
        <SingleOfferSection title='Naucz się metody Fridrich i przyspiesz swoje układanie' offer={ADVANCED_METHOD_OFFER} />
    </>
  )
}

export default AdvancedMethodOfferPage