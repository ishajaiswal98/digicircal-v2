import React from 'react'
import './CovidGuidline.css'
import { Col, Container, Row ,Card } from 'react-bootstrap'
import {FaArrowCircleRight} from 'react-icons/fa'

const CovidGuidlines = () => {
  return (
    <>
    <div className='covid-cont'>
      <h2>COVID-19 GUIDLINES</h2>
    
    <Container >
      <Row>
        
        <Col md={6}>
        <Card style={{ width: '18rem' ,color:'black'}}>
  <Card.Body>
    <Card.Title>SAFETY FIRST</Card.Title>
    
    <Card.Text>
    We have taken careful measures to ensure our services and the environment we are in are carefully managed, safe and ensures the health and well-being of our beauticians. We adhere to the UAE Ministry of Health and Dubai Health Authority's guidance to keep you and our staff safe.
         </Card.Text>
    
    
  </Card.Body>
</Card>
         
        
        </Col>
        
        <Col md={6}>
        <Card style={{ width: '18rem' ,color:'black'}}>
  <Card.Body>
    <Card.Title>SALOON GUIDLINES</Card.Title>
        
    <Card.Text>
          <ul>
            <li> <FaArrowCircleRight/>  We sanitize every tool after each client</li>
            <li> <FaArrowCircleRight/>  We use individual disposable products for every client</li>
            <li><FaArrowCircleRight/>   Mask is always required when our beauticians visit you</li>
            <li><FaArrowCircleRight/>   Our beauticians are fully vaccinated and will maintain hygiene by washing their hands before and after the service</li>
            <li><FaArrowCircleRight/>   All clients will have their temperatures taken before our beauticians commence the service(s)</li>
          </ul>
          </Card.Text>
    
    
    </Card.Body>
  </Card>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default CovidGuidlines