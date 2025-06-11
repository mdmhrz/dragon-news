import React from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';

const NewsDetails = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <section className='col-span-9'>
                    News Details
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;