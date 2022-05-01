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
    <Nav.Link href='tel:8368491107'><i className='fa fa-phone-alt'>8368491107</i></Nav.Link>
    <Nav.Link href='tel:782749689'><i className='fa fa-phone-alt'>782749689</i></Nav.Link>
    <Nav.Link href='mailto:info@digircal.com'><i className='fa fa-envelope'>info@digircal.com</i></Nav.Link>
    <Nav.Link href="/" ><i className="fab fa-facebook"></i></Nav.Link> 
    <Nav.Link href='/'><i className='fab fa-twitter'></i></Nav.Link>

      <Nav.Link href="#">
      <i className="fab fa-instagram"></i>
      </Nav.Link>
      <Marquee className='marque-text' gradient={false}> <Blink color='white' text='A complete digital advertisment services . contact now 9176543216' fontSize='20'></Blink></Marquee>
    </Container>
    </Navbar>
    </div>
  )
}

export default Header