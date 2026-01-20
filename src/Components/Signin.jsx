// import React, { use } from 'react';
import { use } from 'react';
import { AuthContext } from '../firebase/AuthContext';

const Signin = () => {
    const { signInUser } = use(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                const signInInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:3000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after patch data', data)
                    })

                //update last sign in to the database
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={() => handleSignIn} className="fieldset">

                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />

                                <div><a className="link link-hover">Doesn't Have the Account?</a></div>
                                <button className="btn btn-neutral mt-4">Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Signin;