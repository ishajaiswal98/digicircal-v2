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
    <Nav className="ms-auto">
    <Marquee className='marque-text' gradient={false}> <Blink color='white' text='A complete digital advertisment services . contact now 9176543216' fontSize='20'></Blink></Marquee>
    </Nav>
    <Nav.Link href="/" ><i className="fab fa-facebook"></i></Nav.Link> 
      <Nav.Link href="#">
      <i className="fab fa-instagram"></i>
      </Nav.Link>
    
    </Container>
    </Navbar>
    </div>
  )
}

export default Header