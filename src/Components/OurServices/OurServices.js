import React from 'react'
import './OurServices.css'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Card } from 'react-bootstrap'

const OurServices = () => {
  return (
    <>
    <div className='services-cont'id='design'>
    <div>
      <h2 className='about'>Our Services</h2>
    </div>
    <Container>
      <Row>
        <Col md={4} mr-3>
        
        <Card style={{ width: '18rem',  height:'500px',borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' ,backgroundColor:'blue'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/dm.png" className='ofc-img'/>
  <Card.Body>
    <Card.Title>Website Design</Card.Title>
    <Card.Text>
    We design website for you and host that over the server so that your business can be easily approachable from any where any time and it gives your business exist over internet. so we think you must have your own website.
    </Card.Text>
  
  </Card.Body>
</Card>
        </Col>
        <Col md={4} className=''>
        <Card style={{ width: '18rem', height:'500px', borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' , backgroundColor:'greenyellow'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/dm.png"  className='ofc-img'/>
  <Card.Body>
    <Card.Title>Shoot video</Card.Title>
    <Card.Text>
    Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices. Like web application development, mobile application development has its roots in more traditional software development.
    </Card.Text>
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card style={{ width: '18rem', height:'500px', borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' ,backgroundColor:'blue'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/dm.png"  className='ofc-img'/>
  <Card.Body>
    <Card.Title>Animation Video</Card.Title>
    <Card.Text>
    A web hosting service is a type of Internet hosting service that hosts websites for clients, i.e. it offers the facilities required for them to create and maintain a site and makes it accessible on the World Wide Web. Companies providing web hosting services are sometimes called web hosts.
    </Card.Text>
  
  </Card.Body>
</Card> 
        </Col>
        
      </Row>
      <Row>
      <Col md={4}>
        <Card style={{ width: '18rem',height:'500px', borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' , backgroundColor:'greenyellow'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/dm.png" className='ofc-img' />
  <Card.Body>
    <Card.Title>Promo video</Card.Title>
    <Card.Text>
    Digital marketing services are professional services that help market or advertise your business online, like through search, social media, and paid channels. They focus solely on digital channels versus traditional marketing channels like print or television
    </Card.Text>
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card style={{ width: '18rem',height:'500px', borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' ,backgroundColor:'blue'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/dm.png" className='ofc-img' />
  <Card.Body>
    <Card.Title>Lead Generation</Card.Title>
    <Card.Text>
    Digital marketing services are professional services that help market or advertise your business online, like through search, social media, and paid channels. They focus solely on digital channels versus traditional marketing channels like print or television
    </Card.Text>
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={4}>
        <Card style={{ width: '18rem',height:'500px', borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em' ,  backgroundColor:'greenyellow'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/dm.png" className='ofc-img' />
  <Card.Body>
    <Card.Title>Graphic Design</Card.Title>
    <Card.Text>
    Digital marketing services are professional services that help market or advertise your business online, like through search, social media, and paid channels. They focus solely on digital channels versus traditional marketing channels like print or television
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

export default OurServices