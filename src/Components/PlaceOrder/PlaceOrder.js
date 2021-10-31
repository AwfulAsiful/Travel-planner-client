import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const PlaceOrder = () => {
    const{id}=useParams()
    const{user}=useAuth()
    
    const [details,setdetail]=useState([])
    const [specificDetails,setSpecificDetails]=useState([])
    const[orders,setOrders]=useState([])
    const { register, handleSubmit,reset } = useForm();
    useEffect(()=>{
        fetch('https://frightful-spider-25135.herokuapp.com/plans')
        .then(res=>res.json())
        .then(data=>setdetail(data))
    },[])
    useEffect(()=>{
       if(details.length>0)
       {
        const found=details?.find((detail)=>parseInt(detail?.id)===parseInt(id))
        setSpecificDetails(found);
        
       }
    },[details])
    const onSubmit = data => {
        axios.post(`https://frightful-spider-25135.herokuapp.com/orders`,data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Successfully inserted the order!!")
                reset();
            }
        })
        // console.log(data)
    };
    // console.log(specificDetails)
    
    
    return (
        <div>
            <MenuBar></MenuBar>
          <div className="container my-4">
              <div className="row">
                  <div className="col-md-5  border border-2 border-success p-3 ">
                      <img src={specificDetails?.img} alt="" className='w-75'/>
                      <div className="text-start my-4">
                      <h2 className="text-success">{specificDetails?.title}</h2>
                      <p>
                        
                              {specificDetails?.desc}
                          
                          </p>
                      <h3>Price: {specificDetails?.price}</h3></div>    
                  </div>
                  <div className="col-md-7">
                      <h1>Place your order</h1>
                      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <input 
                defaultValue={user?.displayName}
                className="form-control" {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input 
                
                defaultValue={user?.email}
                className="form-control" {...register("Email")} placeholder="E-mail"  />
              
                <input className="form-control" {...register("Address",{
                    required:true
                })} placeholder="Address" />
                <input className="form-control" {...register("Date",{
                    required:true
                })} placeholder="dd/mm/yyy" />
                <input
                defaultValue={specificDetails?.title} 
                className="form-control" {...register("PlanName",{
                    required:true
                })} placeholder="Plan Name" />
                <input
                defaultValue='Pending' 
                className="form-control" {...register("Status",{
                    required:true
                })} placeholder="Status" />
                <input type="submit" value="Place order" className="btn btn-success my-3" />
            </form>
                     {/*  <form  className="form-control">
                          <input type="text" name="" id="" className="form-control" defaultValue={user?.displayName} placeholder='Name' /><input type="text" name="" id="" className="form-control" defaultValue={user?.email} placeholder='E-mail'  /><input type="text" name="" id="" className="form-control" placeholder='Address' /><input type="text" name="" id="" className="form-control" placeholder='dd/mm/yyy' /><input type="text" name="" id="" className="form-control" defaultValue={specificDetails?.title} placeholder='Plan Name'  />
                      </form> */}
                   <Link to={`/myOrders/${user?.email}`}>
                   <button className="btn btn-dark mt-3">Go to my orders</button>
                   </Link>
                  </div>
              </div>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;