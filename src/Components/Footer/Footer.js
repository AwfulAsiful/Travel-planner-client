import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container bg-dark text-white ">
            <div className="row">
                <div className="col-md-6 text-start">
                    <h2>MedEasy Ltd.</h2>
                    <p className="text-small"> If you live in the United States or Canada, by agreeing to these Terms, you agree to resolve disputes with NOOB through binding arbitration (with very limited exceptions, not in court), and you waive certain rights to participate in class actions, as detailed in the Dispute Resolution section.</p>
                </div>
                <div className="col-md-6">
                    <ul className="d-flex flex-column align-items-center footer-nav">
                        <Link to='/home' className="footer-items">
                        <li>Home</li>
                        </Link>
                        <Link to='/products' className="footer-items">
                        <li>Products</li>
                        </Link>
                        <Link to='/about' className="footer-items">
                        <li>About Us</li>
                        </Link>
                        <Link to='/home' className="footer-items">
                        <li>Login</li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-start">
                © 2017–2021 MedEasy Ltd.
                </div>
                <div className="col-md-6">
                    <div className="row ">
                        <div className="col-md-4">
                            <i className="fab fa-twitter fs-3 icons"></i></div>
                        <div className="col-md-4"><i className="fab fa-facebook fs-3 icons"></i></div>
                        <div className="col-md-4"><i className="fab fa-github fs-3 icons"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;