import React from 'react'
import './Style.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row , Col } from 'react-bootstrap'

const Websitedesign = () => {
  return (
    <>
    <Header/>
    <NavbarMenu/>
    <div >
      <img src='images/webd.jpg' alt='img' className='img-web'></img>
    </div>
    <Container>
      <Row>
        <h3 className='about-cont'>WEB DESIGNING</h3>
        <Col md={4}>
        <img src='images/wd.png' alt='img'></img>
        </Col>
        <Col md={8}>
          <p>Creating a website that is simple to use, access, and read across all devices and platforms is an
important aspect of creating your brand. A responsive website is created for a brand so that
your customers can easily view all of your content, which is automatically adjusted for devices
such as smartphones, iPads, iPhones, and notebooks. Although time-consuming, responsive
web design and development is extremely cost-effective and will easily fit into your budget.</p>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default Websitedesign