import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn join-item bg-base-100 justify-start"> <FaFacebook className='mr-3' /> Facebook</button>
                    <button className="btn join-item bg-base-100 justify-start"> <FaTwitter className='mr-3' /> Twitter</button>
                    <button className="btn join-item bg-base-100 justify-start"><FaInstagram className='mr-3' /> Instragram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;