import React from 'react'
import { Navbar, Container,NavDropdown,Nav} from 'react-bootstrap'
import './NavbarMenu.css'

const NavbarMenu = () => {
  return (
    <div className='navstyle'>
         <Navbar expand="lg" className='navigation' bg="black" variant="dark"  fixed="top" >
  <Container fluid>
    <Navbar.Brand href="#"><img src='images/logo.png' alt='logo' style={{height:'110px', width:'250px' , marginLeft:'5rem'}}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav
        className="ms-auto  my-2 my-lg-0 mx-5 nav-item red"
        style={{ maxHeight: '100px' , color:'white' }}
        
      >
        <Nav.Link href="#action1" >HOME</Nav.Link>
        <Nav.Link href="#action2">ABOUT US</Nav.Link>
        
        
        <NavDropdown title="OUR SERVICES" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">NAIL</NavDropdown.Item>
          <NavDropdown.Item href="#action3">NAIL SPA</NavDropdown.Item>
          <NavDropdown.Item href="#action3">EYELASH EXTENSIONS</NavDropdown.Item>
          <NavDropdown.Item href="#action3">BROWN SCULPT</NavDropdown.Item>
          <NavDropdown.Item href="#action3">MASSAGE</NavDropdown.Item>
          <NavDropdown.Item href="#action3">WAXING AND THERAPY</NavDropdown.Item>
          <NavDropdown.Item href="#action4">THREADING THERAPY</NavDropdown.Item>
          <NavDropdown.Item href="#action5">
            HAIR
          </NavDropdown.Item>
          <NavDropdown.Item href="#action3">MAKE UP</NavDropdown.Item>
          <NavDropdown.Item href="#action3">KIDS SPECIAL</NavDropdown.Item>
          <NavDropdown.Item href="#action3">EVENTS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">
          CONTACT US 
        </Nav.Link>
        <Nav.Link href="#">
          CAREER
        </Nav.Link>
      </Nav>
      {/* //<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button> 
  </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarMenu