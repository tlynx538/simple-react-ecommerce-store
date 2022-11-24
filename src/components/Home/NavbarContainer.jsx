import React from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
class NavbarContainer extends React.Component{
    render(){
        return(
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">StoreFront</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto">
                  <NavDropdown title="Men" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Oversized T-Shirt</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Oversized Shirt</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Polo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Jacket</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Shorts</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Women" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Oversized T-Shirt</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Sweatshirts and Hoodies</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Tie Dye</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Tops</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Accessories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Hats</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Sunglasses</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Gloves</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Cart</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default NavbarContainer;