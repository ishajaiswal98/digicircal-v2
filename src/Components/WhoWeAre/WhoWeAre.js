import React from 'react'
import './WhoWeAre.css'
import { Col, Container, Row } from 'react-bootstrap'

const WhoWeAre = () => {
  return (
    <>
    <div className='who-we-are'>
        <h2>WHO WE ARE</h2>

    </div>
    <Container>
      <Row>
        <Col md={6}>
        <img src='images/saloon.jpg'></img>
        </Col>
        <Col md={6} >
         <div className='p-treat'>
           <h5 className='who-para'>luxury treatment you deserve</h5>
            <p>We are a luxury nails & spa beauty concierge in Dubai serving your beauty needs in the comfort of your home. We offer a wide range of services from manicures, pedicures, facials, eyelash extensions, massages, aromatherapy and even pampering sessions for your little one. At RUHEE, we believe the best tender, love and care for your soul should be provided in the comfort of your home (or anywhere you desire) and we shall bring to you the luxury treatment you deserve</p>
         </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default WhoWeAre