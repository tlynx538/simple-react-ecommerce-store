import React, {useState, useEffect} from 'react';
import {Container, Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';
import axios from 'axios';
function NavbarContainer(){
    const [cartSize, setCartSize] = useState();
    useEffect(() => {
      const user_id = 2;
      axios.get("http://127.0.0.1:8000/api/inventory/view/cart/"+user_id).then(response => setCartSize((response.data).length));
    },[])
        return(
                <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Container>
                  <Navbar.Brand href="/">StoreFront</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                      <NavDropdown title="Men" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/products/men/oversized-shirt">Oversized Shirt</NavDropdown.Item>
                        <NavDropdown.Item href="/products/men/shirt">Shirt</NavDropdown.Item>
                        <NavDropdown.Item href="/products/men/polo">Polo</NavDropdown.Item>
                        <NavDropdown.Item href="/products/men/jackets">Jacket</NavDropdown.Item>
                        <NavDropdown.Item href="/products/men/shorts">Shorts</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Women" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/products/women/oversized-shirt">Oversized Shirt</NavDropdown.Item>
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
                        <Nav.Link href="/cart">Cart <Badge pill bg="secondary">{cartSize}</Badge></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>
        )
    }


export default NavbarContainer;