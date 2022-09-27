import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='py-3 mb-3 bg-slate-700'>
            <nav className='text-white text-sm font-semibold'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/reviews'} className='mx-6'>Reviews</Link>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/blogs'} className='mx-6'>Blogs</Link>
                <Link to={'/about'}>About</Link>
            </nav>
        </div>
    );
};

export default Header;