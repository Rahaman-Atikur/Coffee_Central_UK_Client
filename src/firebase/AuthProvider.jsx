import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
   


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
     const userInformation ={
       createUser
    }
    return (
      <AuthContext value={userInformation}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;