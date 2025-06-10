import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-3'>
            <img className='w-[350px]' src={logo} alt="" />
            <p>Journalism without fear & favour</p>
        </div>
    );
};

export default Header;