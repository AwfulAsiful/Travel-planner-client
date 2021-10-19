import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className="my-5">
      <h2 className="fw-bolder my-3">Products</h2>
      <p className="fw-bold">We provide wide variety of pharmaceutical products.<br />You can choose your desired/</p>
      <div className="row gy-3 ps-5 pb-3">
        {
          services?.map((data) => (
                <Service key={data.id} data={data}></Service>  
    ))
        }
      </div>
    </div>
  );
};

export default Services;