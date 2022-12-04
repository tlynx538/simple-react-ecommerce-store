import React from 'react';
import ReactSlider from 'react-slider';
import ReactStars from "react-rating-stars-component";
import {Container, Col, Row, Button, ButtonGroup} from 'react-bootstrap';
import './Sidebar.css';

class Sidebar extends React.Component{
    ratingChanged = (newRating) => {
        console.log(newRating);
    };
    render(){
        return(
            <Container>
            <h5 className="mb-3">Filters</h5>
            <Col>
                <Row><h6>Price</h6></Row>
                <Row>
                    <Container>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}>
                        </ReactSlider>
                    </Container>
                </Row>
            </Col>
            <Col>
                <Row><h6>Size</h6></Row>
                <Row className="p-2 mb-2">
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-secondary">XS</Button>
                        <Button variant="outline-secondary">S</Button>
                        <Button variant="outline-secondary">L</Button>
                        <Button variant="outline-secondary">XL</Button>
                        <Button variant="outline-secondary">XXL</Button>
                    </ButtonGroup>
                </Row>
            </Col>
            <Col>
                <Row><h6>Ratings</h6></Row>
                <Row className="p-1">
                    <ReactStars
                        count={5}
                        onChange={this.ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </Row>
            </Col>
            <Row>
                <Col>
                    <Button className='mt-3 me-2' variant="outline-primary">Apply</Button>
                    <Button className='mt-3' variant="outline-primary">Reset</Button>
                </Col>
             </Row>
        </Container>
        )
    }
}
export default Sidebar;