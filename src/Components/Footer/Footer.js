import React from 'react'
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
      <Col md={4}>

          <img src='images/DIGI_3D.jpg' alt='' style={{height:'100px' , width:'150px' , marginTop:'0'}}></img>

          <p className="AboutSoftgenics">
          "Salon Home Service No'1 in Patna, Professional Beauticians, Genuine products and Best rates guaranteed" . 
          </p>
          
          </Col>
          <Col md={4}>
        
          <h4 className="OurOffices">Our Services
          </h4>
          <ul>
            <li>Website Design</li>
            <li>Shoot Video</li>
            <li>Animation Video</li>
            <li>Promo Video</li>
            <li>Lead Generation</li>
            <li>Graphic Design</li>
          </ul>

         
        
        </Col>

        <Col md={4}>
          <h4 className=" mb-0 OurOffices text-center">CONTACT</h4>
     
            <ul className="list-unstyled">
            
            
            <li>
           <p><a href="#" className="cont"><FaPhoneAlt/></a>(+91) 93188 18893</p>
            </li>
            <li>
          <p><a href="#" className="cont"><FaEnvelopeOpenText/></a>www.abc.com</p>
            </li>
            
          
                   </ul>

              
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