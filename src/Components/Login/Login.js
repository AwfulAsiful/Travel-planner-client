import React from 'react';
import { useHistory, useLocation } from 'react-router';
import AuthProvider, { AuthContext } from '../../Context/AuthProvider';
import useAuth from '../../Hooks/useAuth'
import useFirebase from '../../Hooks/useFirebase';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer'
const Login = () => {
      const {signInWithGoogle}=useAuth();
    //   console.log(useAuth())
     const history=useHistory()
    const location=useLocation()
    const redirect_url=location?.state?.from ||  '/home'

    const handleGoogleSignIn=()=>{
        signInWithGoogle()

        .then((result)=>{
            // console.log(result)
            history.push(redirect_url)
        })
    }
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="container my-5">
            <h1 className="text-center fw-bold my-3">Travel Planner</h1>
            <div className="">
                <h3 className="my-3">Login With <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25" className="pb-2" />  </h3>
                <button onClick={handleGoogleSignIn} className="btn btn-outline-dark rounded-pill w-50">  Continue with Google</button>
               
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Login;