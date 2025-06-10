import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/HomeLayout/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([])
    const data = useLoaderData();
    const { id } = useParams();


    useEffect(() => {

        if (id == 0) {
            setCategoryNews(data)
            return
        } else if (id == 1) {
            const filteredNews = data.filter((news) => news.others.is_today_pick === true);
            setCategoryNews(filteredNews);
            return
        } else {
            const filteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews)

        }


    }, [data, id])


    return (
        <div>
            <h2 className='font-bold'>Total <span className='text-secondary'>{categoryNews.length}</span> news found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;