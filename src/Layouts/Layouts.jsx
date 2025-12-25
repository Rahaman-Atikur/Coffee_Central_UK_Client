import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layouts;