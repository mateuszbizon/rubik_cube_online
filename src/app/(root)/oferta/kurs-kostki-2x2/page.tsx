import SingleOfferSection from '@/components/sections/SingleOfferSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { CUBE_2X2_OFFER } from '@/constants/offers'
import React from 'react'

function Cube2x2OfferPage() {
  return (
    <>
        <SubPageHero title='Kurs kostki 2x2' />
        <SingleOfferSection title='Naucz się układać kostkę 2x2 – idealny start do świata speedcubingu' offer={CUBE_2X2_OFFER} />
    </>
  )
}

export default Cube2x2OfferPage