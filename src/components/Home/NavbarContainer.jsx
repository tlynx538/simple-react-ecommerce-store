import React from 'react';
import {Container, Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';
class NavbarContainer extends React.Component{
    render(){
        return(
                <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Container>
                  <Navbar.Brand href="/">StoreFront</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                      <NavDropdown title="Men" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/products/men/oversized-shirt">Oversized T-Shirt</NavDropdown.Item>
                        <NavDropdown.Item href="/products/men/shirt">Oversized Shirt</NavDropdown.Item>
                        <NavDropdown.Item href="/products/men/polo">Polo</NavDropdown.Item>
                        <NavDropdown.Item href="/products/men/jacket">Jacket</NavDropdown.Item>
                        <NavDropdown.Item href="/products/men/shorts">Shorts</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Women" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/products/women/oversized-shirt">Oversized T-Shirt</NavDropdown.Item>
                        <NavDropdown.Item href="/products/women/bottoms">Bottoms</NavDropdown.Item>
                        <NavDropdown.Item href="/products/women/hoodies">Sweatshirts and Hoodies</NavDropdown.Item>
                        <NavDropdown.Item href="/products/women/tie-dye">Tie Dye</NavDropdown.Item>
                        <NavDropdown.Item href="/products/women/tops">Tops</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Accessories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/products/accessories/hats">Hats</NavDropdown.Item>
                        <NavDropdown.Item href="/products/accessories/sunglasses">Sunglasses</NavDropdown.Item>
                        <NavDropdown.Item href="/products/accessories/gloves">Gloves</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/cart">Cart <Badge pill bg="secondary">0</Badge></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>
        )
    }
}

export default NavbarContainer;