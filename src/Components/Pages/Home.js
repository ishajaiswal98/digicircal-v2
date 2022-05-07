import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import About from '../About/About'
import Clientlogo from '../Clientlogo/Clientlogo'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import HeroSection from '../HeroSection/HeroSection'

import NavbarMenu from '../NavbarMenu/NavbarMenu'

import OurServices from '../OurServices/OurServices'

import Reviews from '../Reviews/Reviews'


const Home = () => {
  return (
    <>
    <Header/>
    <NavbarMenu/>
    <HeroSection/>
    <Clientlogo/>
    <OurServices/>
    <About/>
    <Reviews/>
    

    
    <Footer/>
    <FloatingWhatsApp/>
    
    </>
  )
}

export default Home