import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import review1 from '../../review-1.jpg'
import review2 from '../../review-2.jpg'
import review3 from '../../review-3.jpg'

const Review = () => {
    return (
        <div className="my-4 ps-4">
            <h2 className="text-center fs-2 fw-bold py-3">Satisfied Customers</h2>
            <div className="row">
                <div className="col-md-4">
                    <Card>
                        <Card.Img variant="top" src={review1} className="img-rounded">

                        </Card.Img>
                        <Card.Body>
                            <Card.Text>
                                <p>You can trust MedEasy.Probably the best online pharmacy ever</p>
                            </Card.Text>
                            <Card.Text>
                            <Rating
                                initialRating={4}
                                emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly className="text-warning"
                                ></Rating>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div className="col-md-4">
                <Card>
                        <Card.Img variant="top" src={review2} className="img-rounded">

                        </Card.Img>
                        <Card.Body>
                            <Card.Text>
                                <p>You will love MedEasy.Probably the best online pharmacy ever</p>
                            </Card.Text>
                            <Card.Text>
                            <Rating
                                initialRating={4}
                                emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly className="text-warning"
                                ></Rating>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                <Card>
                        <Card.Img variant="top" src={review3} className="img-rounded">

                        </Card.Img>
                        <Card.Body>
                            <Card.Text>
                                <p>You can not hate MedEasy.Probably the best online pharmacy ever</p>
                            </Card.Text>
                            <Card.Text>
                            <Rating
                                initialRating={4}
                                emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly className="text-warning"
                                ></Rating>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </div>
    );
};

export default Review;