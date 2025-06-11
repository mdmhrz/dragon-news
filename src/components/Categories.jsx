import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then((res) => res.json());
// console.log(categoryPromise);

const Categories = () => {

    const categories = use(categoryPromise)

    return (
        <div>
            <h2 className='font-bold'>All Categories ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        className={"btn justify-start rounded-md  text-left bg-base-100 border-none hover:bg-base-200 font-semibold text-accent"}
                        to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;