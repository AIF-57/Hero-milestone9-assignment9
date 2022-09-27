import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Review = ({review}) => {
    const {name,sentence,rating,id} = review;
    return (
        <div className='border py-5 rounded-lg my-5 md:my-0'>
             <div className="credential my-5">
                <FontAwesomeIcon icon={faUser} className='text-3xl'/>
                <p className='font-semibold text-lg'>{name}</p>
             </div>
             <p className='h-20'><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>{sentence}</p>
             <small className='block mt-5 '>rating : {rating}</small>
        </div>
    );
};

export default Review;