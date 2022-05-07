import React,{useEffect} from 'react'
import { Col,Row, Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import './Style.css'
import Aos from 'aos'
import "aos/dist/aos.css"



const Aboutus = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <Header/>
      <NavbarMenu/>
      <div>
        <img src='images/digi1.jpg' alt='img' className='img-web'></img>
      </div>
      <Container>
        <Row>
          <Col md={4}>
            <img data-aos="fade-up-right" src='images/cont.png' alt='img' className='about-cont'></img>
          </Col>
          <Col md={8}>
            <h3 className='about-cont'>About DigiCircal</h3>
          <p>Digi Circal is a leading Digital agency on Digital marketing, Logo design, 2D/3D Animation,
Video editing, Content writing, Website design, and related services firm in India. Digi Circal
providing high-quality, cost-effective, and timely services to its clients in India and overseas.
Digital marketing is an integral aspect of almost all business types. The continuous and quick
growth of the current period has made everything so convenient.</p>
          </Col>
          </Row>
          <Row>
          <Col md={8}>
            <p>The constant and rapid growth of the present period has made everything so convenient for
everyone, which is why people choose to utilize the Internet because of its dependability, speed,
and performance. Because the number of people using the internet is growing every day,
marketers must sell their products in a more competitive online environment as a result of
globalization. To maximize the potential of your business, you must have an online presence.
Online advertising is a relatively new concept that looks to be gaining traction and becoming
virtually a need for small business owners these days. The most noticeable advantages of
advertising online are that it is instantaneous, effective, and economical.</p>
          </Col>
          <Col md={4}>
          <img data-aos="fade-up-left" src='images/cont1.jpg' alt='img'></img>
          </Col>
        </Row>
      </Container>
      <div>
        <h3 className='about-cont'>OUR VISION</h3>
        </div>
        <Container>
          <Row>
            <Col md={6}>
        <p className='para'>Our goal is to create brands that reflect a businessperson&#39;s true passion, as well as an
association&#39;s person who inspires client loyalty. We take each planned project very seriously,
and we have a distinct contact with it from the request scenario to the final delivery.</p>
</Col>
<Col>
<img data-aos="fade-up-left" src='images/cont2.png' alt='img' style={{height:'100%' , width:'100%'}}></img>
</Col>
</Row>

<Row>
<h3 className='about-cont'>OUR MISSION</h3>
  <Col md={6}>
  
  <img data-aos="fade-up-right" src='images/web.png' alt='img'></img>
  </Col>
  <Col md={6}>
  <p>We are on top notch to make excellent first impressions on our consumers and to assist you in
clearly and strongly communicating your brand to your target demographic. Our in-house
designers employ all of their imagination to ensure that the design concept is distinctive,
conveys your message, and highlights your company&#39;s features.</p>
  </Col>
</Row>
</Container>
      
      <Footer/>
    </>
  )
}

export default Aboutus