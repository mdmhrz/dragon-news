import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            <h1>{news.title}</h1>
        </div>
    );
};

export default NewsCard;