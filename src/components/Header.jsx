import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-3 mt-5'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism without fear & favour</p>
            <p className='font-semibold'>{format(new Date(), 'EEEE,')}<span className='text-accent'>{format(new Date(), ' MMMM MM, YYY')}</span></p>
        </div>
    );
};

export default Header;