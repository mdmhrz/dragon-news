import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-5'>Login With</h2>
            <div>
                <button className='btn space-y-3 mb-3 w-full btn-outline btn-secondary'><FcGoogle size={24} /> Login With Google</button>
                <button className='btn space-y-3 mb-3 w-full btn-outline btn-primary'><FaGithub size={24} /> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;