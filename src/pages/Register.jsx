import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-[calc(100vh-120px)] items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex">
                <div className="card-body">
                    <h2 className='font-semibold text-center text-2xl py-4'>Register Your Account</h2>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Your Name" />
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Phot URL" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Your Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-accent text-center pt-5'>Already have an accout? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;