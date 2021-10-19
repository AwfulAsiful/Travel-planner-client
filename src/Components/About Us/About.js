import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner2 from '../../banner-2.png';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const About = () => {
    return (
        <div >
            <MenuBar></MenuBar>

            <div className="row ">
                <div className="col-md-6 col-sm-4">
                 <div className="banner-text">
                 <h2>We're there for you</h2>
                 <p>We provide wide variety of medicines,we also provide free delivery</p>
                 </div>
                 <Link to='/home'>
                     <button className="btn btn-warning fw-bold">Go to home</button>
                 </Link>
                </div>
                <div className="col-md-6 col-sm-4">
                    <img src={banner2} alt="" className="w-100"/>
                </div>
            </div>
            <div className="row bg-warning text-black fw-bolder mx-4 my-3 p-3 fs-4">
                <div className="col-md-4">
                    500K+<br />
                    Customers
                </div>
                <div className="col-md-4">
                    5K+<br />
                    Employes
                </div>
                <div className="col-md-4">
                    1K+<br />
                    Delivery Man
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-4">
                    <Card className="p-3 w-75 h-100">
                        <Card.Body>
                            <Card.Title className="fw-bold">
                            We've got Bangladesh Covered
                            </Card.Title>
                            <Card.Text className="fs-5 text-start">
                            We now deliver in 1000+ cities and towns across 22000+ pin codes. We thereby cover every nook and corner of the country! The major cities in which we deliver including Dhaka,Barisal,Chattogram,Rangpur etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                <Card className="p-3 w-75 h-100">
                        <Card.Body>
                            <Card.Title className="fw-bold ">
                            Say Goodbye <br /> to All Your Healthcare Worries <br /> With MedEasy!
                            </Card.Title>
                            <Card.Text className="text-start fs-5">
                            MedEasy is here to help you take it easy! We are amongst one of Bangladesh's top online pharmacy and medical care platforms.It enables you to order pharmaceutical and healthcare products online 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
               
            <Card className="p-3 w-75 h-100"> 
                <Card.Body>
                    <Card.Title className="fw-bold">
                    Why Are We The Most Preferred Online Pharmacy?
                    </Card.Title>
                    <Card.Text className="text-start fs-5">
                        Lucrative offers on our platform allow you to make payment online and via various payment wallets at a discounted price.Alternatively, you can also choose to pay cash on delivery as we deliver the products at your doorstep.
                    </Card.Text>
                </Card.Body>
            </Card>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;