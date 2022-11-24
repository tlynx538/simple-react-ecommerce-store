import React from 'react';
import NavbarContainer from './NavbarContainer';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import CarouselContainer from './CarouselContainer';
class Home extends React.Component{
    render(){
        return(
            <div>
                <NavbarContainer/>
                <br></br>
                <Container fluid className='p-5'>
                    <CarouselContainer></CarouselContainer>
                </Container>
                <h2 className='text-center'>Best Sellers</h2>
                <Container className='p-3'>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <h2 className='text-center'>Just In</h2>
                <Container className='p-3'>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <hr></hr>
                    <p>Copyright 2022, StoreFront.Inc</p>
                </Container>
            </div>
        )
    }
}

export default Home;