import React, { useEffect, useState } from 'react';
import { Card, CardImg } from 'react-bootstrap';
import Rating from 'react-rating';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="row product-container py-4">
                {
                    products?.map((data) => (
                    <div className="col-md-6 ">
                        <Card className=" text-start  card">
                            <CardImg variant="top" src={data?.img} alt="" className="w-75 ps-2 pt-3"/>
                            <Card.Body>
                                <Card.Title className="fw-bolder">{data?.name}</Card.Title>
                                <Card.Text className="">
                                    <small>{data?.desc}</small>
                                </Card.Text>
                                <Card.Title className="fw-bold ">
                                    Price: {data?.price}
                                </Card.Title>
                                <Card.Title className="fw-bold" >
                                     Rating: <Rating
                                initialRating={data?.rating}
                                emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly className="text-warning"
                                ></Rating>
                                
                                </Card.Title>
                            </Card.Body>
                            
                        </Card>
                    </div>
                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;