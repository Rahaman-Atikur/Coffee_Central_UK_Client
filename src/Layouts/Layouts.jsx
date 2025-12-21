import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;