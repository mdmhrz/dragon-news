import React, { useState } from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {

    const {
        title,
        rating,
        total_view,
        author,
        image_url,
        details,
        tags,
    } = news;

    // Format date
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="card bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
            {/* Card Header */}
            <div className="flex items-center justify-between p-4 bg-gray-100">
                <div className="flex items-center space-x-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-gray-800">{author.name}</h2>
                        <p className="text-sm text-gray-500">{formatDate(author.published_date)}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                    <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
                    <FaShareAlt className="cursor-pointer hover:text-gray-700" />
                </div>
            </div>

            <div className="p-5">
                {/* Title */}
                <h2 className="font-bold text-lg md:text-xl py-2 leading-snug text-gray-900">
                    {title}
                </h2>

                {/* Image */}
                <img src={image_url} alt={title} className="w-full object-cover" />

                {/* Details */}
                <div className=" py-3 text-gray-700 text-sm">
                    <p>
                        {details.length > 200 ? details.slice(0, 200) + "..." : details}
                        <span
                            className="text-orange-600 font-semibold cursor-pointer ml-1"
                        >
                            Read more
                        </span>
                    </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between py-3 border-t border-gray-300 text-sm text-gray-600">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 text-orange-500">
                        {Array(rating.number)
                            .fill(0)
                            .map((_, idx) => (
                                <FaStar key={idx} />
                            ))}
                        <span className="ml-1 text-gray-700">{rating.number}.0</span>
                    </div>

                    {/* Total Views */}
                    <div className="flex items-center space-x-1">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
