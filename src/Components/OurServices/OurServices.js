import React from 'react'
import './OurServices.css'
import { Link } from 'react-router-dom'

import { Row, Col, Container, Card } from 'react-bootstrap'

const OurServices = () => {
  return (
    <>
    <div className='services-cont'id='design'>
    <div  className='review'>
      <h2 className='about'><strong>------</strong>Let's Check <span> Our Services------</span></h2>
    </div>
    <Container>
      <Row>
        <Col md={4} mr-3>
        
        <Card style={{ borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/wd.png" className='ofc-img'/>
  <Card.Body>
    <Link to='/website-design-at-digi-circal'><button className='btn btn-primary'>Website Design</button></Link>
    
  
  </Card.Body>
</Card>
        </Col>
        <Col md={4} >
        <Card style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/sv.png"  className='ofc-img'/>
  <Card.Body>
    <Link to='/shoot-video-at-digi-circal'><button className='btn btn-primary'>Shoot video</button></Link>
   
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card className='service' style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/an.png"  className='ofc-img'/>
  <Card.Body>
    <Link to='/animation-video-at-digi-circal'><button className='btn btn-primary'>Animation Video</button></Link>
   
  
  </Card.Body>
</Card> 
        </Col>
        
      </Row>
      <Row>
      <Col md={4}>
        <Card style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/pr.png" className='ofc-img' />
  <Card.Body>
    <Link to='/promo-video-at-digi-circal'><button className='btn btn-primary'>Promo video</button></Link>
   
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/lg.png" className='ofc-img' />
  <Card.Body>
  <Link to='/lead-generation-by-digi-circal'><button className='btn btn-primary'>Lead Generation</button></Link>
    
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/gd.png" className='ofc-img' />
  <Card.Body>
     <Link to='/graphic-design-by-digi-circal'> <button className='btn btn-primary'>Graphic Design</button></Link>
   
    
  </Card.Body>
</Card> 
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default OurServices