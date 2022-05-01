import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Reviews.css'
import { Card, Container } from 'react-bootstrap';

const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }; 
return (
<div>
    <Container className='review' fluid>'
    <h2><img src="images/google.png" alt='google' style={{width:'40px', height:'40px'}} /> REVIEWS & <span>RATING</span></h2>
    
    <div className='rating'>
    
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star-half' />
                    <span className='text-muted h4'>4.6/5</span>
                </div>
                <br></br>
    <Carousel responsive={responsive}>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Sunita Kumari <img src="/images/google.png" alt='google' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>...... </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Ranjan Singh <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>I am very happy with services given by digicircal. </Card.Text>

            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Chris Mill <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>. </Card.Text>
                <br></br>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Sales Team <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>... </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Munni ji <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Neha Raj <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>  </Card.Text>
            </Card>
        </div>
        </Carousel>
    </Container>
</div>
   
    
  )
}

export default Reviews