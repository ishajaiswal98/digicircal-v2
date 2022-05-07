import React , {useEffect} from 'react'
import { Container ,Row , Col } from 'react-bootstrap'
import './About.css'
import Aos from 'aos'
import "aos/dist/aos.css"


const About = () => {
    useEffect(() =>{
        Aos.init({duration:2000});
      },[])
  return (
    <div>
        <div className='about-cont'><h2>About us</h2></div>
        <Container>
            <Row>
                <Col md={4}>
                    <img data-aos="flip-right" src='images/digi2.jpg' alt='img' style={{heght:'100%' , width:'100%'}}></img>
                </Col>
                <Col md={8}>
                    <h3>A Place To Grow Your Business</h3>
                 <p className='digi-p'>Digi Circal is a leading Digital agency on Digital marketing, Logo design, 2D/3D Animation,
Video editing, Content writing, Website design, and related services firm in India. Digi Circal
providing high-quality, cost-effective, and timely services to its clients in India and overseas.
Digital marketing is an integral aspect of almost all business types. The continuous and quick
growth of the current period has made everything so convenient.</p>
              <a href='/about-digicircal'> <button className='btn btn-primary border rounded shadow-lg'>Read More</button></a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About