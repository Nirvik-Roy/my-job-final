import React from 'react'
import LandingBanner from './LandingBanner'
import PopularVaccines from './PopularVaccines'
import HowJobPilotWorks from './HowJobPilotWorks'
import PopularCategory from './PopularCategory'
import FeaturedJob from './FeaturedJob'
import ClientTesimonial from './ClientTesimonial'

const LandingHome = () => {
  return (
    <>
      <LandingBanner/>
      <PopularVaccines/>
      <HowJobPilotWorks/>
      <PopularCategory/>
      <FeaturedJob/>
      <ClientTesimonial/>
    </>
  )
}

export default LandingHome