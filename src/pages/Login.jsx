import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')

    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password).then(result => {
            const user = result.user;
            // console.log(user);
            navigate(`${location.state ? location.state : "/"}`)

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(errorMessage, errorCode)
            setError(errorCode)
        });
    }

    return (
        <div className='flex justify-center min-h-[calc(100vh-120px)] items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex">
                <div className="card-body">
                    <h2 className='font-semibold text-center text-2xl py-4'>Login Your Account</h2>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' required />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' required />
                        {
                            error && <p className='text-sm text-red-500'>{error}</p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-accent text-center pt-5'>Don't have an account? <Link to="/auth/register" className='text-secondary'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;