import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import initializeAuthentication from '../Components/Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () => {
    //States
    const[user,setUser]=useState({})
    const[isLoading,setIsLoading]=useState(true)
    const auth=getAuth()
    const provider=new GoogleAuthProvider()

  



    //Google Sign in handle
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,provider)
       
    }

    // Registering new user handle
    const createAccountWithGoogle=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
      .catch(()=>{
        alert('Something Wrong Happened')
      })
      .finally(()=>setIsLoading(false))
    }

    const logInWithEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        .catch(()=>{
            alert('Something Wrong Happened')
          })
          .finally(()=>setIsLoading(false))
    }
    const updateName=(name)=>{
        updateProfile(auth.currentUser,{
            displayName: name

        })
        .then(()=>{
            const newUser={...user,displayName:name}
            setUser(newUser)
        })
        .catch((error)=>{
            alert('Something Wrong Happened')
        })
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch((error)=>{
            alert('Something Wrong Happened')
        })
        .finally(()=>setIsLoading(false))
    }
      //Reload issue
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribe()
    },[])

    return {
        user,setUser,
        signInWithGoogle,
        createAccountWithGoogle,
        logInWithEmailAndPassword,
        isLoading,
        setIsLoading,
        logOut,
        updateName
    }
        
    
}

export default useFirebase;