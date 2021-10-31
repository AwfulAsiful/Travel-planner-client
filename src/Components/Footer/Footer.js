import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-dark  fs-5 p-5 footer container-fluid">
            <div className="d-flex justify-content-center fw-bold ">
                
                <div className="me-4 ">
                    <Link to='/home' className='footer-nav text-success'>
                        <h3>
                            Home
                        </h3>
                    </Link>
                </div>
                <div className="me-4 ">
                    <Link to='/allPlans' className='footer-nav text-success'>
                    <h3>
                            Our plans
                        </h3>
                    </Link>
                </div>
                <div className="me-4 ">
                    <Link to='/faq' className='footer-nav text-success'>
                        <h3>
                            FAQs
                        </h3>
                    </Link>
                </div>
                
                
            </div>
            <hr  />
            <div className='text-success'>
                © 2021 Travel Planner, Ltd
                </div>
        </div>
    );
};

export default Footer;