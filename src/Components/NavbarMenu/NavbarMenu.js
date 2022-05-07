import React , {useState} from 'react'
import './NavbarMenu.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container , Button } from 'react-bootstrap'

const NavbarMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
<Navbar collapseOnSelect expand="lg"  className='navbarMenu' fixed='top'>
  <Container fluid>
  <Navbar.Brand as={Link} to="/"><img src='images/DIGI_3D.jpg' alt='logo' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars'} /></Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/"  eventKey={2} onClick={closeMobileMenu}>HOME</Nav.Link>
      <Nav.Link as={Link} to="/about-digicircal"  eventKey={2} onClick={closeMobileMenu}>ABOUT US</Nav.Link>
      <NavDropdown title="OUR SERVICES" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/website-design-at-digi-circal" eventKey={2} onClick={closeMobileMenu}>Website design</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/shoot-video-at-digi-circal"  eventKey={2} onClick={closeMobileMenu}>Corporate video</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/animation-video-at-digi-circal"  eventKey={2} onClick={closeMobileMenu}>Animation video</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/promo-video-at-digi-circal" eventKey={2} onClick={closeMobileMenu}>Promo video</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/lead-generation-by-digi-circal" eventKey={2} onClick={closeMobileMenu}>Lead Generation</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/graphic-design-by-digi-circal" eventKey={2} onClick={closeMobileMenu}>Graphic Design</NavDropdown.Item>
      </NavDropdown>
      {/* <Nav.Link as={Link} to="/"    eventKey={2} onClick={closeMobileMenu}>Blog</Nav.Link> */}
      <Nav.Link  href="#rev"    eventKey={2} onClick={closeMobileMenu}>Reviews</Nav.Link>
    </Nav>
    <Button  size="sm" className='btn-call'>CALL US </Button>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarMenu