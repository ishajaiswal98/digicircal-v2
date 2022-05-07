import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'

const Shootvideo = () => {
  return (
    <>
    <Header/>
    <NavbarMenu/>
      <div>
        <img src='images/shv.jpg' alt='img' className='img-web'></img>
      </div>
      <div><h2 className='about-cont'>CORPORATE  VIDEO</h2></div>
      <Container>
        <Row>
          <Col md={6}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ENvZWZXo6N8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          <Col md={6}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MkJIciMkXDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Shootvideo