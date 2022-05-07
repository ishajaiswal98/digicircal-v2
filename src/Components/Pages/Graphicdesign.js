import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'


const Graphicdesign = () => {
  return (
    <>
       <Header/>
    <NavbarMenu/>
      <div>
        <img src='images/digital.jpg' alt='img' className='img-web'></img>
      </div>
      <div><h2 className='about-cont'>GRAPHIC DESIGN</h2></div>
      <Container>
        <Row>
          <Col md={6}>
          <img src='images/digi1.jpg' alt='img'></img>
          </Col>
          <Col md={6}>
            <p>A properly designed brand logo may make a huge difference in your company. As a result, the
company&#39;s logo serves as its index. We at the Business Advertising Agency will help you build a
powerful brand with memorable logos. We have the expertise to make it happen, on time and on
budget, whether you require a digital solution, print, media, or a multi-faceted campaign. With
unexpected ideas, unusual techniques, and effective solutions, we hope to surprise, satisfy, and
excite your clientele.</p>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Graphicdesign