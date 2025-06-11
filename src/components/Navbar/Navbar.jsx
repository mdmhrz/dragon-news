import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../../assets/user.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 gap-3'>
            <div className=''></div>
            <div className='flex gap-4 items-center justify-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-5 justify-end'>
                <img src={user} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;