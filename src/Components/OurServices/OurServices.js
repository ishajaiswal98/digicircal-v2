import React , {useEffect} from 'react'
import './OurServices.css'
import { Link } from 'react-router-dom'

import { Row, Col, Container, Card } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"


const OurServices = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <div className='services-cont'id='design'>
    <div  className='review'>
      <h2 className='about'>Let's Check  Our Services</h2>
    </div>
    <Container>
      <Row>
        <Col md={4} mr-3>
        
        <Card data-aos="fade-right" style={{ borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/wd.jpg" className='ofc-img'/>
  <Card.Body>
    <Link to='/website-design-at-digi-circal'><button className='btn btn-primary'>Website Design</button></Link>
    
  
  </Card.Body>
</Card>
        </Col>
        <Col md={4} >
        <Card data-aos="fade-up" style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/sv.jpg"  className='ofc-img'/>
  <Card.Body>
    <Link to='/shoot-video-at-digi-circal'><button className='btn btn-primary'>Corporate video</button></Link>
   
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card data-aos="fade-left" className='service' style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/an.jpg"  className='ofc-img'/>
  <Card.Body>
    <Link to='/animation-video-at-digi-circal'><button className='btn btn-primary'>Animation Video</button></Link>
   
  
  </Card.Body>
</Card> 
        </Col>
        
      </Row>
      <Row>
      <Col md={4}>
        <Card data-aos="fade-up-right" style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/pr.jpg" className='ofc-img' />
  <Card.Body>
    <Link to='/promo-video-at-digi-circal'><button className='btn btn-primary'>Promo video</button></Link>
   
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card data-aos="fade-up-down" style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/ld.jpg" className='ofc-img' />
  <Card.Body>
  <Link to='/lead-generation-by-digi-circal'><button className='btn btn-primary'>Lead Generation</button></Link>
    
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card data-aos="fade-up-left" style={{  borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' 
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/gd.jpg" className='ofc-img' />
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