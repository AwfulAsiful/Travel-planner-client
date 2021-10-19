import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './MenuBar.css'

const MenuBar = () => {
  const {user, logOut}=useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <h3 className="navbar-brand fw-bold fs-2" >MedEasy</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0 ">
             <Link to='/home' className="nav-item">
             <li >
                Home
              </li>
             </Link>
             <Link to='/products' className="nav-item">
             <li >
                Products
              </li>
             </Link >
             <Link to='/about' className="nav-item">
                About Us
                </Link>
              {
                user?.email?
                <button onClick={ logOut} className="btn btn-dark mx-2">Logout</button>
                :<Link to='/login' className="nav-item">
                <li>Login</li>
            </Link>

              }
              {
                user?.email? <li className="nav-item">{user.displayName}</li> :<Link to='/signUp' className="nav-item"><button className="btn btn-warning">Register</button></Link>
              }
              
                
              
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default MenuBar;