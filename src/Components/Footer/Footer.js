import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
import { Container,Row ,Col } from "react-bootstrap";
import {FaFacebook , FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelopeOpenText} from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
  <section className="">
  <footer className="completeFooter  text-center">
    <Container>
      <Row>
      <Col md={3}>

          <img src='images/logo.png' alt='' style={{height:'200px' , width:'200px' , marginTop:'0'}}></img>

          <p className="AboutSoftgenics">
          SoftGenics is one of the most affordable, low cost website design company offering best services with reasonable price . 
          </p>
          
          </Col>
          <Col md={3}>
        
          <h4 className="OurOffices">QUICK LINKS
          </h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Our Services</li>
            <li>contact</li>
            <li>Privacy Policy</li>
          </ul>

         
        
        </Col>

        <Col md={3}>
          <h4 className=" mb-0 OurOffices text-center">CONTACT</h4>
     
            <ul className="list-unstyled">
            
            
            <li>
            <i class="fa-solid fa-mobile-screen-button"> <p><a href="#" className="cont"><FaPhoneAlt/></a>(+91) 9380359418</p></i>
            </li>
            <li>
          <i class="fa-solid fa-envelope-circle-check"><p><a href="#" className="cont"><FaEnvelopeOpenText/></a>softgenics.private@gmail.com</p></i>
            </li>
            
          
                   </ul>

              
          </Col> 
           <Col md={3}>
            <h4 className="OurOffices">Follow and share</h4>
            <img src='images/.jpg' alt='#' className="foot-img"></img>
            <div className="social-foot">
            <a href='https://www.facebook.com/profile.php?id=100075713184173'  className="s-img"> <FaFacebook/></a>
            <a href=' https://www.instagram.com/invites/contact/?i=47yfmt8z04ya&utm_content=nyx3xmx'><FaInstagram/></a>
            <a href='https://wa.me/919380359418'><FaWhatsapp/></a>
            </div>
            </Col>
       
            <div className="text-center p-3 copyright">
      © 2022 Copyright:
      <a className="text-white ml-2" href="https://mdbootstrap.com/">SoftGenics.com</a>
    </div>
    </Row>
    </Container>
  </footer>
</section>
  </div>

  )
}

export default Footer