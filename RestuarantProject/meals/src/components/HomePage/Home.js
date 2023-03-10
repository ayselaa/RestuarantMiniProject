import React from 'react'
import Header from '../Layout/Header'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import HomeHowSection from './HomeHowSection'
import MealsSection from './MealsSection'
import TestimonialSection from './TestimonialSection'
import PricingSection from './PricingSection'
import CtaSection from './CtaSection'
import Footer from '../Layout/Footer'



const Home = () => {
  return (
    <div>
     <body>
      <Header/>
      <main>
      <HeroSection/>
      <FeatureSection/>
      <HomeHowSection/>
      <MealsSection/>
      <TestimonialSection/>
      <PricingSection/>
      <CtaSection/>
     </main>
     <Footer/>
     </body>
    </div>
  )
}

export default Home
