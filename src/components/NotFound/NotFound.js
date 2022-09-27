import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
    return (
        <div className='my-10'>
        <FontAwesomeIcon icon={faFaceMeh} className='text-red-500 text-8xl mb-5'/>
            <p className='text-2xl'>Page Not Found !</p>

        </div>
    );
};

export default NotFound;