import React from 'react';
import contact from '../../Images/contact.png'
import youtube from '../../Images/youtube.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.jpg'
import './Contact.css'
const Contact = () => {
    return (
        <div className='container mt-5 '>
            <h1 className="text-center text-success fw-bold">Contact us</h1>
            <div className="row border border-success border-2 p-4">
                <div className="col-md-5 contact-img">
                    <img src={contact} alt="" className="w-100" />
                </div>
                <div className="col-md-7">
                <h5 className=" "><i className="fas fa-map-marker-alt text-success"></i>  Dhaka,Bangladesh</h5>
                <h5 className="">
                <i className="fas fa-envelope-open text-success"></i>  awful872@gmail.com
                </h5>
                <div className="">
                     <div className='d-flex mt-3'>
                        <div  className='me-3'>
                            <a href="https://www.youtube.com/">
                                <img src={youtube} alt="" className="w-50"  /></a>
                            </div>
                        <div  className='me-3' >
                            <a href="https://www.instagram.com/">
                            <img src={instagram} alt="" className="w-50" />
                            </a>
                            </div>
                        <div>
                            <a href="https://twitter.com/">
                            <img src={twitter} alt="" className="w-50" />
                            </a>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;