import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews,setReviews] = useReviews([]);

    return (
        <div>
            <header>            
                <p className='text-3xl my-10'>Top Reviews</p>
            </header>
            <div className="allReviews md:grid grid-cols-3 gap-5 mx-5 my-20">
                {
                    reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)   
                }
            </div>
        </div>
    );
};

export default Reviews;