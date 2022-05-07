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
<div id='rev'>
    <Container className='review' fluid>'
    <h2><img src="images/google.png" alt='google' style={{width:'40px', height:'40px'}} /> REVIEWS & <span>RATING</span></h2>
    
    <div className='rating'>
    
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <span className='text-muted h4'>5.0</span>
                </div>
                <br></br>
    <Carousel responsive={responsive}>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Bhavya Shree <img src="/images/google.png" alt='google' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>All services and responses were  excellent and professional....I deeply appreciate every member of this team for their extraordinary talent. It gives me great pride to be a client  for this team. I strongly recommend this agency for your best coice to your business growth.. </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Juned Hassan <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>There is a very good team, work on right time and there is no issue working with only half payment. </Card.Text>

            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Yashika <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>Good experience with them . They are very good in there work </Card.Text>
                <br></br>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Abdul Kabir <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>There is a very good team and always work on time and they are posting everyday at very cheap amount </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' />Voice Actor Gaurav  <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>Wonderful people to work with and truly professional..! </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Jayant Das <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> DigiCircal gives very good service, the quality of their videos is very good and the posts are very creative. </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Shalu Chauhan <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> If you are a new comer then go with them... Best quality in best price with best expertise </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Rupesh Ranjan <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> Excellent people to work with and awesome environment.. </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' />Bilal Choudhary  <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> Wonderful people to work with and truly professional.. </Card.Text>
            </Card>
        </div>
       < div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Assif Zaidi <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> Excellent work and good service </Card.Text>
            </Card>
        </div>
        <div>
        <Card>
            <Card.Title><i className='fas fa-user' /> Nitish Bisht <img src="/images/google.png" alt='googlr' /></Card.Title>
            <div className='rating'>
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
            </div>
            <Card.Text> very good service .have a great experience </Card.Text>
        </Card>
    </div>
   < div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Karida Fiscal <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> Very professionals Must check-out them </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Sanjeev Giri <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> Have great experience with the organisation ... </Card.Text>
            </Card>
        </div>
       < div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Monu Arya <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> I did not trust the online company before but since I talked to Manish, he made my video and the company is very good.And I don't have any problem now and I will work  with always  DigiCircal </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Shikhar Singh <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>THE BEST AGENCY FOR PROMOTING MY BUSINESS IN DELHI. THEY ARE VERY RESPONSIVE ALSO SUPPORT 24/7 ...  </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Aman Khatolia <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> They provide best services and the quality of work are also amazing </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Rohan Das <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> Very professional and he will provide quality work </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Siddhant Jaiswal <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>Positive: Professionalism
It's always a pleasure to work with Will and his team. They are personable, responsive, and results-oriented!  </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Nidhi Sahani <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> Awesome Experience, Wonderful work done by them..Highly professional and Punctual..Main thing is creativity and innovative ideas.. </Card.Text>
            </Card>
        </div>
        </Carousel>
    </Container>
</div>
   
    
  )
}

export default Reviews