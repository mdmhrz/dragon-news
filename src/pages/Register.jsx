import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const [nameError, setNameError] = useState('')

    const navigate = useNavigate()


    const { createUser, setUser, updateUser } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (name.length < 5) {
            setNameError('Name should be more than 6 characters');
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate('/')
                }).catch((error) => {
                    console.log(error);
                    setUser(user)
                })
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <div className='flex justify-center min-h-[calc(100vh-120px)] items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex">
                <div className="card-body">
                    <h2 className='font-semibold text-center text-2xl py-4'>Register Your Account</h2>
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Your Name" name='name' required />
                        {nameError && <small className='text-red-500'>{nameError}</small>}
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Phot URL" name='photo' required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Your Email" name='email' required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' required />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-accent text-center pt-5'>Already have an accout? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;