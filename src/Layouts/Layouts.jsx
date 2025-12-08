import React from 'react';
import Header from '../Components/Header';

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;