import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const [news, setNews] = useState({});

    const data = useLoaderData();
    const { id } = useParams();
    // console.log(news);

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id)
        setNews(newsDetails)
    }, [data, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-5'>
                <section className='col-span-9'>
                    <h1 className='font-bold mb-5'>Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3 sticky top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;