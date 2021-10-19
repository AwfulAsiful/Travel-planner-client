import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({data}) => {
    const{name,shortDesc,img,id}=data;
    return (
        
             <div className="col-md-4">
                    <Card className='w-75 h-100 border border-secondary'>
                    <Card.Img variant="top" src={img}></Card.Img>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                       <Card.Text className="text-start">{shortDesc}</Card.Text>

                      <Link to={`/services/${id}`}> 
                       <Button className="btn btn-warning fw-bold">Learn More</Button></Link>
                       
                    </Card.Body>
                    
                  </Card>
                 </div> 
        
    );
};

export default Service;