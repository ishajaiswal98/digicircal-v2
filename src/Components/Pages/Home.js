import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import HeroSection from '../HeroSection/HeroSection'

import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Offer from '../Offer/Offer'
import OurServices from '../OurServices/OurServices'

import Reviews from '../Reviews/Reviews'


const Home = () => {
  return (
    <>
    <Header/>
    <NavbarMenu/>
    <HeroSection/>
    <OurServices/>
  
    <Offer/>
    <Reviews/>
    

    
    <Footer/>
    <FloatingWhatsApp/>
    
    </>
  )
}

export default Home