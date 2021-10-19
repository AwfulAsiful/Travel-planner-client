import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../banner-1.png'
import './Banner.css'
const Banner = () => {
    return (
    <div className="container border-bottom border-2 border-warning px-3">
            <div className="row">
                <div className="col-md-5 text-start banner-text">
                   <h2 className="fw-bold">Buy Medicines</h2>
                   <p className="text-break ">With one tap you can buy your daily medicines for cheap price</p>
                   <Link to='/products'>
                   <button className="btn btn-warning fw-bold">Buy Now</button>
                   </Link>
                </div>
                <div className="col-md-7">
                    <img src={banner} alt="" className="w-100" />
                </div>
            </div>
        </div>
    );
};

export default Banner;