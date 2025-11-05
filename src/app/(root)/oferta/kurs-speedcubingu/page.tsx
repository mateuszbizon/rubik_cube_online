import SingleOfferSection from '@/components/sections/SingleOfferSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { SPPED_CUBE_OFFER } from '@/constants/offers'
import React from 'react'

function SpeedCubeOfferPage() {
  return (
    <>
        <SubPageHero title='Kurs speedcubingu' />
        <SingleOfferSection title='Zostań szybszym i bardziej precyzyjnym w układaniu kostki Rubika' offer={SPPED_CUBE_OFFER} />
    </>
  )
}

export default SpeedCubeOfferPage