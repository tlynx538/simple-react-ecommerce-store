import React, { useState, useEffect } from 'react';
import NavbarContainer from '../Home/NavbarContainer';
import Sidebar from './Sidebar';
import {Row,Col,Card,Button} from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from "react-router-dom";
import './Products.css'
import axios from 'axios';
function Products(){
    const [items, setItems] = useState([]);
    let query = useParams();
    let itemMaps = {
        "oversized-shirt" : "Over Sized Shirt",
        "jackets" : "Jackets",
        "polo" : "Polo",
        "bottoms" : "Bottoms",
        "shorts" : "Shorts",
        "shirt" : "Shirt",
        "tie-dye" : "Tie-Dye",
        "tops" : "Tops",
        "hats" : "Hats",
        "sunglases" : "Sunglasses",
        "hoodies" : "Hoodies",
        "gloves" : "Gloves",
    }
    let genderMaps = {
        "men" : "Male",
        "women" : "Female"
    }
    let page_section = itemMaps[query["product_category"]];
    let gender = genderMaps[query["category"]]
    useEffect(()=> {
        getItems();
    },[]);
    const getItems = async() => {
        await axios.get("http://127.0.0.1:8000/api/inventory/products/"+gender+"/"+page_section).then(response => setItems(response.data));
    }
    const addItemToCart = async(item_id) => {
        const request_body = {
            "item_id" : item_id,
            "user_id" : 2,
            "quantity" : 1
        }
        await axios.post("http://127.0.0.1:8000/api/inventory/add/cart",request_body).then(response => getItems()).catch(error => {console.log(error)});
    }
    return(
        <div>
            <NavbarContainer></NavbarContainer>
            <div className='mt-5 vh-100'>
                <Row>
                    <Col className="border border-secondary col-md-3 vh-100 p-4" size="lg">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col className="vh-100 p-4 scrollable-column">
                        <h3>{page_section}</h3>
                        <p>{items.length} results found</p>
                        <div className="grid-container">
                        {items.map((elem) => (
                                <div className='grid-item'>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px200" />
                                    <Card.Body>
                                        <Card.Title>{elem.product_name}</Card.Title>
                                        <Card.Text>
                                        {elem.product_desc} 
                                        </Card.Text>
                                        <Col>
                                            <Row>
                                                <ReactStars edit={false} value={elem.rating}></ReactStars>
                                            </Row>
                                            <Row>
                                                <Card.Text>₹{elem.price}</Card.Text>
                                            </Row>
                                            <Row>
                                                <Card.Text>{elem.discount}% off</Card.Text>
                                            </Row>
                                            <Row xs={2} className="p-3 col-md-0">
                                                <Button variant="primary" onClick={() => addItemToCart(elem.item_id)}>Add To Cart</Button>
                                            </Row>
                                        </Col>
                                    </Card.Body>
                                </Card>        
                                </div>
                        ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Products;