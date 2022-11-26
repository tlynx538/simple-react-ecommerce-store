import React from 'react';
import NavbarContainer from '../Home/NavbarContainer';
import Sidebar from './Sidebar';
import {Row,Col} from 'react-bootstrap';
class ProductView extends React.Component{
    render(){
        return(
            <div>
                <NavbarContainer></NavbarContainer>
                <div className='mt-5 vh-100'>
                    <Row>
                        <Col className="border border-secondary col-md-3 vh-100" size="lg">
                            <Sidebar></Sidebar>
                        </Col>
                        <Col className="bg-danger vh-100">

                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default ProductView;