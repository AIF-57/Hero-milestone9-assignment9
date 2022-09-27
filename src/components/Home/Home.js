import React from 'react';
import { useNavigate } from 'react-router-dom';
import airpodsMax from '../../utilities/airpodsMax.png'
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {

    const [reviews,setReviews] = useReviews()
    const certainReviews = reviews.slice(0,3);
    const navigate = useNavigate();

    const reviewBtn = () => {
        const path = '/reviews';
        navigate(path);
    }

    return (
        <div>
            <p className='text-3xl my-10'>AirPods Max</p>
            <div className="product my-10 md:grid grid-cols-2 items-center gap-2 mx-2">
                <div className="productImg order-2">
                    <img src={airpodsMax} alt="" className='mx-auto w-3/4'/>
                </div>
                <div className="caption mx-8">
                    <p className='text-5xl my-3 font-bold '><span className='text-8xl'>S</span>ounds like an epiphany.</p>
                    <p className='text-lg'>Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</p>
                    <button className='py-2 px-5 rounded-md bg-slate-700 text-white mt-5 font-semibold'>Quick View</button>
                </div>
            </div>
            <div className="reviewContainer md:grid grid-cols-3 gap-5 mx-5 mt-20 mb-10">
                <p className='col-span-3 my-5 text-xl'>Customer Reviews({certainReviews.length})</p>
                {
                    certainReviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                }
                </div>
                <p onClick={() => reviewBtn()} className='inline-block border-b-2 border-slate-700 mb-10 font-semibold cursor-pointer'>All Reviews</p>
        </div>
    );
};

export default Home;