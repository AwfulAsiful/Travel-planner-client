import React from 'react';
import about from '../../Images/about.png'
import './About.css'
const About = () => {
    return (
        <div className='container '>
            <h1 className="text-center text-success my-3 fw-bold">
                About Us
            </h1>
            <div className="row border border-2 border-success p-5">
                <div className="col-md-5 about-img ">
                  <img src={about} alt="" className='w-100' />  
                </div>
                <div className="col-md-7 p-4">
                <h4 className='text-start'> <span  className="text-success">Travel Planner</span> is a Bangladeshi online travel agency for lodging reservations & other travel products, and a subsidiary of MA Associates. It is headquartered in Dhaka. <span  className="text-success">Travel Planner</span> always provide you best service at a affordable price. </h4>
                </div>
            </div>
        </div>
    );
};

export default About;