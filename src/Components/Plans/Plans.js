import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Plan from '../Plan/Plan';

const Plans = () => {
    const [plans,setPlans]=useState([]);
    useEffect(()=>{
        fetch('https://frightful-spider-25135.herokuapp.com/plans')
        .then(res=>res.json())
        .then(data=>setPlans(data))
    },[])
    return (
        <div className="container">
            <h2 className="text-center my-5">Our Tour Plans</h2>
            <div className="row mb-3">
                {
                    plans?.map(plan=><Plan key={plan?.id} plan={plan}></Plan>)
                }
            </div>
        </div>
    );
};

export default Plans;