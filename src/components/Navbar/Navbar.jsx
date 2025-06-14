import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/user.png'
import './Navbar.css'
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = use(AuthContext)

    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert('You have logged out successfully')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className='grid grid-cols-3 gap-3'>
            <div className=''>{user && user.email}</div>
            <div className='flex gap-10 items-center justify-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-5 justify-end'>
                <img className='w-12 h-12 rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {
                    user ?
                        (<button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>) :
                        (<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)}


            </div>
        </div>
    );
};

export default Navbar;