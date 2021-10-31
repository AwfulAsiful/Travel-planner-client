import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])
    const [mySpecificOrders, setSpecificOrders] = useState([])
    useEffect(() => {
        fetch(`https://frightful-spider-25135.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
     const handleDeleteMyOrders=(id)=>{
         fetch(`https://frightful-spider-25135.herokuapp.com/orders/${id}`,{
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount)
             {
                const confirm= window.confirm('Do you really want to delete!!!!')
                 if(confirm===true)
                 {
                    const remaining=mySpecificOrders.filter(data=>data._id!==id);
                    setSpecificOrders(remaining);
                 }
                 else{
                     console.log('Clicked Cancel');
                 }
             }
            
         })
     }

    useEffect(() => {
        if (myOrders?.length > 0) {
            const myPlacedOrders = myOrders?.filter((myOrder) => myOrder?.Email === user?.email)
            setSpecificOrders(myPlacedOrders);
            //  console.log(myPlacedOrders)

        }
    }, [myOrders])

    return (
        <div>
            <MenuBar></MenuBar>
           <h1 className="text-center text-success fw-bold mt-3">My Orders</h1>
            <div className="my-5">
                {
                    mySpecificOrders?.map((data) =>
                        <div key={data?._id}>
                            <div className="row">
                                <div className="col-md-4">
                                    <h1>
                                        Plan:  {data?.PlanName} Trip</h1>
                                </div>
                                <div className="col-md-4">
                                <h1>Status: {data?.Status}</h1>
                                </div>
                                <div className="col-md-4">
                                    
                                    <p className="text-danger fs-5" onClick={()=>handleDeleteMyOrders(data._id)}><i className="fas fa-trash-alt"></i></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;