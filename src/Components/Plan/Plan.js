import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Plan.css'
const Plan = (props) => {
    const {title,img,price,id,shortDesc}=props.plan || {};
   
    return (
        <div className="col-md-4 mb-3">
            <Card className="h-100 card">
                
            <CardImg variant="top" src={img}/>
                <Card.Body className="text-start">
                    <h3 className="text-success">{title}</h3>
                    <p className='fs-5'>{title} {shortDesc}</p>
                    <h4>Price: {price}</h4>

                   <Link to={`/placeOrder/${id}`}>
                   <button className="btn btn-success" >Book Now</button>
                   </Link>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default Plan;