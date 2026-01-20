import React, { use } from 'react';
import { AuthContext } from '../firebase/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
// import { auth } from '../firebase/firebase.init';

const Signup = () => {
    const { createUser } = use(AuthContext);
    // console.log(createUser); 13501


    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...rest } = Object.fromEntries(formData.entries());

       
        

        // console.log(email, password, userProfile);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const userProfile={
                    email,
                    ...rest,
                    creationTime:result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.creationTime,
                }
                // Save profile in the database

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className='hero-content grid grid-cols-1'>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Enter Your Full Name" />

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Enter Your Email Address" />

                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Upload your photo Url" />
                            <label className="label">Phone Number</label>
                            <input name='phone number' type="text" className="input" placeholder="Enter your phone number" />

                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />

                            <div><Link to='/signin'>Already Have the Account ?</Link></div>
                            <button className="btn btn-neutral mt-4">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;