import React from 'react';
import airPodsBlack from '../../utilities/imgs/airpodsMax_black.jpg'
import img1 from '../../utilities/imgs/1.jpg'
import img2 from '../../utilities/imgs/2.jpg'
import img3 from '../../utilities/imgs/3.jpg'
import img4 from '../../utilities/imgs/4.jpg'
const QuickView = () => {
    return (
        <div className='my-[-15px]'>
            <img src={airPodsBlack} alt="" className='w-full'/>
            <div className="imgContainer grid grid-cols-4">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default QuickView;