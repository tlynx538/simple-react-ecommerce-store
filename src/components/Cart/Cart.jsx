import React, { useEffect, useState } from 'react'
import {Row, Col, Button, Card} from 'react-bootstrap';
import NavbarContainer from '../Home/NavbarContainer';
import axios from 'axios';
function Cart() {
    const [cartItems, setCartItems] = useState([])

    useEffect (() => {
        getCartItems()
    },[]) 

    const getCartItems = async() => {
        const user_id = 2;
        axios.get("http://127.0.0.1:8000/api/inventory/view/cart/"+user_id).then(response => setCartItems(response.data));
    }
    const DeleteItem = async(item_id) => {
        const request_body = {
            "item_id" : item_id,
            "user_id" : 2,
        }
        await axios.post("http://127.0.0.1:8000/api/inventory/delete/cart",request_body).then(response => getCartItems()).catch(error => {console.log(error)});
    } 
  return (
    <div>
        <NavbarContainer></NavbarContainer>
        <div className='mt-5 vh-100'>
            <Row>
                <Col className="vh-100 p-4" size="lg">
                    <h3>Cart</h3>
                    <hr></hr>
                    <Col className="scrollable-column p-4">
                        {cartItems.map((elem) => (
                            <Row className='mb-2'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{elem.product_name}</Card.Title>
                                        <Row>
                                            <Col className='col-md-3'>
                                                <p>{elem.product_desc}</p>
                                                <p>₹{elem.price}</p>
                                                <p>{elem.item_size}</p>
                                            </Col>
                                            <Col className='col-md-4'>
                                            </Col>
                                            <Col className="col-md-3">
                                                <p>Quantity : {elem.quantity}</p>
                                            </Col>
                                            <Col>
                                                <Button className="btn btn-danger" onClick={() => DeleteItem(elem.item_id)}>Remove Item</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Row>
                        ))}
                    </Col>
                </Col>
                <Col className="border border-secondary col-md-4 vh-100 p-4">
                    <h5>Total Price: ₹500</h5>
                    <Button className='btn btn-warning mt-2'>Proceed To Checkout</Button>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Cart;
