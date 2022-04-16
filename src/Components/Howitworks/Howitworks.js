import React from 'react'
import { Container , Row ,Col } from 'react-bootstrap'
import { FaHandPointer , FaCalendarAlt , FaHome } from 'react-icons/fa';

const Howitworks = () => {
  return (
    <>
    <div>

      <h2 >How It <span className='head'>Works</span></h2>
    </div>
    <div>
      <Container>
        <Row>
          <Col md={4}>
          <FaHandPointer size={'5rem'}/><p>CHOOSE SERVICE</p>
          </Col>
          <Col md={4}>
          <FaCalendarAlt size={'5rem'} className='icon' /><p>CONNECT WITH US</p>
          </Col>
          <Col md={4}>
          <FaHome size={'5rem'}/><p>AT YOUR DOORSTEP!</p>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Howitworks