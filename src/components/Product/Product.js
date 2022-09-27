import React from 'react';
import airpodMax from '../../../public/utilities/airpodMax.png'

const Product = () => {

    const imgSrc = airpodMax;

    return (
        <div>
            <div className="product-img">
                <img src='imgSrc' alt="" />
            </div>
        </div>
    );
};

export default Product;