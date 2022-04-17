import React from 'react'
import {Container, Row , Col, Card ,Carousel} from 'react-bootstrap'

const Reviews = () => {
  return (
    <>
    <div className="margin-div">
      <h2>REVIEWS</h2>
    </div>
    <div>
    <Container >
    
      <Row>
      
  
        <Col md={3}>
        
  


        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="images/re1.png" />
        </Card>
      
  
        
        </Col>
       
        <Col md={3}>
        
  
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="images/re2.png" />
 
</Card>
         

  
        </Col>
       
  

        <Col md={3}>
        
  
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="images/re3.png" />
  
</Card>
         

  
        </Col>
        
 
        <Col md={3}>
        
  
        <Card style={{ width: '18rem' , height:'8rem' }}>
        <Card.Img variant="top" src="images/re4.png" sizes='8rem' />
  
  </Card>

  
        </Col>
        
      </Row>
      
    </Container>
    </div>
    </>
  )
}

export default Reviews