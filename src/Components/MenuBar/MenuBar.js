import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './MenuBar.css'

const MenuBar = () => {
  const{user,logOut}=useAuth()


    return (
        <div className="container-fluid bg-light py-2">
            <div className="row">
              <div className="col-md-4">
                <h3 className="fw-bold">Travel Planner</h3>
              </div>
              <div className="col-md-8 d-flex justify-content-end
              ">
                <Link to='/home' className="items">
                  <li>Home</li>
                </Link>
                <Link to='/allPlans' className="items">
                  <li>Our Plans</li>
                </Link>
                <li className="items">
                  {
                    user?.email?(<div className='d-flex'>
                      <div className='me-2'><Link to={`/myOrders/${user?.email}`} className='items'>
                      <p>My Orders</p>
                    </Link></div>
                   <div className='me-2'> 
                     <Link to='/allOrders'className='items'>
                     <p> Manage Orders</p>
                    </Link>
                    </div>
                    <div className='me-1'>
                    <Link to='/addPlans'className='items'>
                      <p>CustomPlan</p>
                    </Link>
                    </div>
                    </div>):(<span></span>)
                  }
                </li>
                <li className="items">
                  {
                    user?.email?(<button className="btn btn-dark" onClick={logOut}>Logout</button>):(<Link to='/login'>
                    <button className="btn btn-success">Login</button>
                  </Link>)
                  }
                </li>
                <li className="items">
                  {user?.email?(user?.displayName):(<span></span>)}
                </li>
              </div>
            </div>
        </div>
    );
};

export default MenuBar;