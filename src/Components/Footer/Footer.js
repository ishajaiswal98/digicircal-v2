import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
import { Container,Row ,Col } from "react-bootstrap";
import {FaFacebook , FaTwitter, FaWhatsapp, FaPhoneAlt, FaEnvelopeOpenText} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="margin-div">
  <section >
  <footer className="completeFooter  text-center">
    <Container>
      <Row>
      <Col md={3}>

          <img src='images/logo.png' alt='' style={{height:'200px' , width:'200px' , marginTop:'0'}}></img>

          <p className="AboutSoftgenics">
          "Salon Home Service No'1 in Patna, Professional Beauticians, Genuine products and Best rates guaranteed" . 
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
            <i class="fa-solid fa-mobile-screen-button"> <p><a href="#" className="cont"><FaPhoneAlt/></a>(+91) 93188 18893</p></i>
            </li>
            <li>
          <i class="fa-solid fa-envelope-circle-check"><p><a href="#" className="cont"><FaEnvelopeOpenText/></a>www.goldenhoneysalon.com</p></i>
            </li>
            
          
                   </ul>

              
          </Col> 
           <Col md={3}>
            <h4 className="OurOffices">Follow and share</h4>
            <div className='foot-saloon-img'>
            <img src='images/saloon3.jpg' alt='#' className="foot-img"></img>
            <img src='images/saloon4.jpg' alt='#' className="foot-img"></img>
            <img src='images/saloon1.jpg' alt='#' className="foot-img"></img>
            </div>
            <div className="social-foot">
            <a href='https://www.facebook.com/Goldenhoneypatna/'  className="s-img"> <FaFacebook/></a>
            <a href=' https://mobile.twitter.com/ghfamilysalon'><FaTwitter/></a>
            <a href='https://wa.me/919381818893'><FaWhatsapp/></a>
            </div>
            </Col>
       
            <div className="text-center p-3 copyright">
      © 2022 designed by:
      <a className="text-black ml-2" href="https://mdbootstrap.com/">SoftGenics.com</a>
    </div>
    </Row>
    </Container>
  </footer>
</section>
  </div>

  )
}

export default Footer