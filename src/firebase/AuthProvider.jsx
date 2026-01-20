
import { AuthContext } from './AuthContext';
import { auth } from './firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
    }
     const userInformation ={
       createUser,
       signInUser
    }
    return (
      <AuthContext value={userInformation}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;