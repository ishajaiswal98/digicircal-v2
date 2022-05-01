import React from 'react'
import One from "../../img/Company Logo/one.png";
import two from "../../img/Company Logo/2.png";
import three from "../../img/Company Logo/3.png";
import four from "../../img/Company Logo/4.png";
import five from "../../img/Company Logo/5.png";
import six from "../../img/Company Logo/6.png";
import seven from "../../img/Company Logo/7.png";
import eight from "../../img/Company Logo/8.png";
import nine from "../../img/Company Logo/21.png";
import logo from "../../img/Company Logo/1.1.jpeg";
import v10 from "../../img/Company Logo/6.png";
import twelve from "../../img/Company Logo/12.png";
import thirteen from "../../img/Company Logo/13.png";
import fourteen from "../../img/Company Logo/14.png";
import fifteen from "../../img/Company Logo/15.png";
import sixteen from "../../img/Company Logo/16.png";
import seventeen from "../../img/Company Logo/17.png";
import eighteen from "../../img/Company Logo/18.png";
import nineteen from "../../img/Company Logo/19.png";
import twenty from "../../img/Company Logo/20.png";
import tone from "../../img/Company Logo/21.png";
import ttwo from "../../img/Company Logo/22.png";
import tthree from "../../img/Company Logo/23.png";
import tfour from "../../img/Company Logo/24.png";
import tfive from "../../img/Company Logo/25.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Clientlogo = () => {
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
    <div style={{backgroundColor:'black'}}>
    <Carousel responsive={responsive}>
      <div >
  
    {/* <Container>
      <Row>
        <Col md={2}>   */}
    <img
      className="d-block w-100"
      src={One}
      alt="First slide"
    />
    </div>
    <div>
    {/* </Col>
    <Col md={2}>   */}
    <img
      
      src={two}
      alt="First slide"
    />
    </div>
    <div>
    <img
      
      src={three}
      alt="First slide"
    />
    </div>
    <div> 
    <img
      
      src={four}
      alt="First slide"
    /></div>
    <div>  
    <img
      
      src={five}
      alt="First slide"
    /></div>
   <div>  
    <img
      
      src={six}
      alt="First slide"
    /></div>
    <div><img src={seven} alt='img'></img></div>
    <div><img src={eight} alt='img'></img></div>
    <div><img src={nine} alt='img'></img></div>
    <div><img src={logo} alt='img'></img></div>
    <div><img src={v10} alt='img'></img></div>
    <div><img src={twelve} alt='img'></img></div>
    <div><img src={thirteen} alt='img'></img></div>
    <div><img src={fourteen} alt='img'></img></div>
    <div><img src={fifteen} alt='img'></img></div>
    <div><img src={sixteen} alt='img'></img></div>
    <div><img src={seventeen} alt='img'></img></div>
    <div><img src={eighteen} alt='img'></img></div>
    <div><img src={nineteen} alt='img'></img></div>
    <div><img src={twenty} alt='img'></img></div>
    <div><img src={tone} alt='img'></img></div>
    <div><img src={ttwo} alt='img'></img></div>
    <div><img src={tthree} alt='img'></img></div>
    <div><img src={tfour} alt='img'></img></div>
    <div><img src={tfive} alt='img'></img></div>
    
  
    </Carousel>
    </div>
  )
}

export default Clientlogo