import React from 'react';
import banner from '../../Images/Banner.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="container banner ">
            <div className="row">
                <div className="col-md-4 col-sm-4 fw-bold banner-text">
                    <h1>Enjoy Traveling with <span className="text-success">Travel Planners</span></h1>
                    <h5>Find your best travel plan. <br /> Book your suitable plan now.</h5>
                </div>
                <div className="col-md-8 col-sm-8">
                    <div >
                        <img src={banner} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;