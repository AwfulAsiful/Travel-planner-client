import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import MenuBar from '../MenuBar/MenuBar';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[username,setUserName]=useState("");
  const {userRegister}=useAuth();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    userRegister (email, password,username);
  };

  // get email
  const getEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  // get password
  const getPassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
   // get password
   const getUserName = (e) => {
    // console.log(e.target.value);
    setUserName(e.target.value);
  };
  return (
   <>
   <MenuBar></MenuBar>
    <div className='banner-login'>
    <div className='container my-5'>
      <div className='row'>
        <div className='col text-center'>
         <h1 className="fw-bold ps-5">MedEasy</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex justify-content-center align-items-center'>
          <div className='w-25 mt-5'>
            {/* form */}
            <form onSubmit={handleFormSubmit}>
              <input onBlur={getUserName} type='text' placeholder='name' className='email-pass-bg' />
              <input onBlur={getEmail} type='email' placeholder='email' className='email-pass-bg' />

              <input
                onBlur={getPassword}
                type='password'
                placeholder='password'
                className='email-pass-bg'
              />

              <br />

              <input type='submit' value='Sign Up' className='btn btn-warning fw-bold' />
            </form>

            <Link to='/login'>
              <h6 className='text-center text-black mt-2'>Already have an account?</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
   </>
  );
};

export default SignUp;