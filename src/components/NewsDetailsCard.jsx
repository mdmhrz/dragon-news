import React from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news);
    const { category_id, image_url, title, details } = news;
    return (
        <div className='p-6 rounded-md border border-base-300 space-y-5 shadow-lg'>
            <img src={image_url} className='rounded-md h-[350px] w-full' alt="" />
            <h2 className='font-bold text-xl'>{title}</h2>
            <p className='text-accent'>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary'> <IoIosArrowDropleftCircle />All news in this category </Link>
        </div>
    );
};

export default NewsDetailsCard;