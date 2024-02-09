import React from 'react';

const StarsMeter = ({ voteAverage }) => {
    const maxStars = 5;
    const rating = Math.ceil(voteAverage / 2);

    const starIcons = Array.from({ length: maxStars }, (_, index) => (
        <i 
        key={index}
        className={`fa-${index < rating ? 'solid' : 'regular'} fa-star fa-2xs" style="color: #FFD43B;`}></i>
    ));

    return <div className="stars-meter">{starIcons}</div>;
};

export default StarsMeter;
