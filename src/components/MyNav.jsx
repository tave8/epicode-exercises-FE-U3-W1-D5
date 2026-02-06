import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Dropdown } from "react-bootstrap"
import { Search, BellFill } from "react-bootstrap-icons"

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="./">
            <Image src="/img/netflix_logo.png" style={{ maxWidth: "80px" }} fluid />
          </Navbar.Brand>

          {/* Hamburger */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            {/* Left menu */}
            <Nav className="me-auto">
              <Nav.Link href="./" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                My List
              </Nav.Link>
            </Nav>

            {/* Right side */}
            <Nav className="d-flex align-items-center gap-4">
              <Nav.Link className="text-white">
                <Search />
              </Nav.Link>

              <Nav.Link className="text-white">KIDS</Nav.Link>

              <Nav.Link className="text-white">
                <BellFill />
              </Nav.Link>

              {/* Profile dropdown */}
              <Dropdown align="end">
                <Dropdown.Toggle variant="transparent" className="border-0">
                  <Image src="https://placedog.net/50/50" roundedCircle style={{ width: "20px" }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="./profile.html">Profile</Dropdown.Item>
                  <Dropdown.Item href="./settings.html">Settings</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MyNav
