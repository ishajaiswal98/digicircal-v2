import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import CovidGuidlines from '../CovidGuidlines/CovidGuidlines'
import Footer from '../Footer/Footer'

import HeroSection from '../HeroSection/HeroSection'
import Howitworks from '../Howitworks/Howitworks'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Offer from '../Offer/Offer'
import PolicyFaq from '../PolicyFaq/PolicyFaq'
import Reviews from '../Reviews/Reviews'
import WhoWeAre from '../WhoWeAre/WhoWeAre'

const Home = () => {
  return (
    <>
    
    <NavbarMenu/>
    <HeroSection/>
    <Howitworks/>
    <Offer/>
    <Reviews/>
    <WhoWeAre/>
    <CovidGuidlines/>
    <PolicyFaq/>
    <Footer/>
    <FloatingWhatsApp/>
    
    </>
  )
}

export default Home