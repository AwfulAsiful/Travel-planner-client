import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import Plans from '../Plans/Plans';

const AllPlans = () => {
    return (
        <div className='container-fluid'>
            <MenuBar></MenuBar>
            <Plans></Plans>
            <Footer></Footer>
        </div>
    );
};

export default AllPlans;