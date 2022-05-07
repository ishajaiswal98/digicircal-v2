import React from 'react'
import './Header.css'
import Marquee from "react-fast-marquee";
import Blink from 'react-blink-text';
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
    <Navbar  className='Header' bg='blue'  fixed='top'>
    <Container fluid>
    <Nav className="me-auto">
    
    </Nav>
    <Nav.Link href='tel:8368491107'><i className='fa fa-phone-alt'>&nbsp;(+91)8368491107</i></Nav.Link>
    <Nav.Link href='tel:782749689'><i className='fa fa-phone-alt'>&nbsp;(+91)782749689</i></Nav.Link>
    <Nav.Link href='mailto:info@digircal.com'><i className='fa fa-envelope '><span class="mr-1">&nbsp;info@digircal.com</span></i></Nav.Link>
    
      <Marquee className='marque-text' gradient={false}> <Blink color='white' text='A Complete Digital Advertisment Services.' fontSize='20'></Blink></Marquee>
    </Container>
    <Nav.Link href="/ www.facebook.com/digicircal" ><i className="fab fa-facebook"></i></Nav.Link> 
    

      <Nav.Link href="instagram.com/digicircal/">
      <i className="fab fa-instagram"></i>
      </Nav.Link>
      <Nav.Link href="/company/digi-circal">
      <i className="fab fa-linkedin"></i>
      </Nav.Link>
      <Nav.Link href="https://www.youtube.com/channel/UCJWQtjFuBIbWtAelawgdS5g">
      <i className="fab fa-youtube"></i>
      </Nav.Link>
    </Navbar>
    </div>
  )
}

export default Header