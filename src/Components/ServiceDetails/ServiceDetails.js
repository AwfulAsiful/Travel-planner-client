import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const ServiceDetails = () => {
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        fetch("/services.json")
        .then(res=>res.json())
        .then(data=>setDetails(data))
    }
    ,[])
    const{id}=useParams();
  
    const serviceDetails = details.find((detail)=>parseInt(detail.id)  === parseInt(id))
   
    return (
        <div>
            <MenuBar></MenuBar>
            <h1 className="fst-italic fw-bolder my-3">{serviceDetails?.name}</h1>
            <div className="row my-5 mx-4">
                <div className="col-md-6 my-3">
                    <p className="fw-bold text-start">{serviceDetails?.desc}</p>
                    <button className="btn btn-warning fw-bold mt-4">Buy Now</button>
                </div>
                <div className="col-md-6">
                    <div className=""><img src={serviceDetails?.img} alt="" className="w-75" /></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
