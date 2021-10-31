import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const ManageOrders = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
       fetch(`https://frightful-spider-25135.herokuapp.com/orders`)
       .then(res=>res.json())
       .then(data=>setOrders(data))
    },[])

    const handleUpdateStatus=(id)=>{
        fetch(`https://frightful-spider-25135.herokuapp.com/orders/${id}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.modifiedCount>0){
                alert('Updated status successfully!!!')
                setOrders({})
            }
        })
    }
    const handleDeleteOrders=(id)=>{
        fetch(`https://frightful-spider-25135.herokuapp.com/orders/${id}`,
        {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount)
            {
                const confirm=window.confirm("Do you really want to delete")
                if(confirm===true){
                    const remaining=orders.filter(data=>data._id!==id);
                setOrders(remaining);
                }
                else{
                    console.log('Clicked Cancel')
                }
            }
        })
    }
    return (
        <div>
            <MenuBar></MenuBar>
            <div>
                <h1 className='my-3 text-success'> Manage Orders</h1>
                {
                    orders?.map(data=><div className='row'>
                         <div className="col-md-3">
                           <h3>{data?.Name}</h3>
                       </div>
                       <div className="col-md-3">
                       <h3> {data?.PlanName} </h3>
                       
                       </div>
                       <div className="col-md-3">
                           <h1>Status: {data?.Status}</h1>
                       </div>
                       <div className="col-md-3 d-flex">
                       <div className='me-4'>
                       <p className="text-danger fs-3" onClick={()=>handleDeleteOrders(data._id)}><i className="fas fa-trash-alt"></i></p>
                       </div>
                       <div>
                       <p className="text-success fs-3" onClick={()=>handleUpdateStatus(data._id)}><i class="fas fa-edit"></i></p>
                       </div>
                       </div>
                      
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageOrders;