import {Nav, Navbar, Container} from 'react-bootstrap'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => (
  <Navbar
    bg="light"
    expand="lg"
    fixed="top"
    className="shadow p-2 mb-5 bg-white"
  >
    <Container>
      <Navbar.Brand href="/" className="company-name">
        Big Tech SEO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto header-links-styling">
          <Nav.Link href="/" className="header-links-styling">
            Home
          </Nav.Link>
          <Nav.Link href="/services" className="header-links-styling">
            Services
          </Nav.Link>
          <Nav.Link href="/pricing" className="header-links-styling">
            Pricing
          </Nav.Link>
          <Nav.Link href="/blogs" className="header-links-styling">
            Blogs
          </Nav.Link>
          <Nav.Link href="/contact" className="header-links-styling">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
export default Header
