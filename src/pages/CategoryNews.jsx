import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            Total {categoryNews.length} found
        </div>
    );
};

export default CategoryNews;