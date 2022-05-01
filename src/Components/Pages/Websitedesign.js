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
      <img src='images/web.jpg' alt='img' className='img-web'></img>
    </div>
    <Container>
      <Row>
        <Col md={4}>
        <img src='images/wd.png' alt='img'></img>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default Websitedesign