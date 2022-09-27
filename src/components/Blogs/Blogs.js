import React from 'react';

const Blogs = () => {
    return (
        <div>
                <p className='text-3xl my-10'>Blogs</p>
            <div className="questionAns grid grid-cols-1 gap-y-10 mx-10 my-20">
                <div className="q1 text-left border p-5 rounded-lg">
                    <p className='text-xl font-semibold'>Q1. What Is Context API ?</p>
                    <p className='text-lg'>
                    Context API provides a way to share values between components without passing a prop through every level of the tree.                </p>
                </div>
                <div className="q2 p-5 border rounded-lg text-left">
                    <p className='text-xl font-semibold'>Q2. What are Semantic Elements?</p>
                        <p className='text-lg'>
                        In programming, Semantics refers to the meaning of a piece of code.
                        A semantic element clearly describes its meaning to both the browser and the developer.
                        Semantic tags have many advantages over non-semantic tags like semantic tags are of great help to screen readers and they also help in code optimization.
                        Various HTML Sementaic Tags are:
                        <ul className='list-disc list-inside'>
                            <li>&lt;article&gt;&lt;/article&gt;</li>
                            <li>&lt;aside&gt;&lt;/aside&gt;</li>
                            <li>&lt;header&gt;&lt;/header&gt;</li>
                            <li>&lt;nav&gt;&lt;/nav&gt;</li>
                            <li>&lt;footer&gt;&lt;/footer&gt;</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;