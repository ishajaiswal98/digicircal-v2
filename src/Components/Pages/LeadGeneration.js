import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'

const LeadGeneration = () => {
  return (
    <>
    <Header/>
    <NavbarMenu/>
      <div>
        <img src='images/lead.png' alt='img' className='img-web'></img>
      </div>
      <div><h2 className='about-cont'>LEAD GENERATION</h2></div>
      <Container>
        <Row>
          <Col md={6}>
          <img src='images/lead1.png' alt='img'></img>
          </Col>
          <Col md={6}>
            <p></p>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default LeadGeneration