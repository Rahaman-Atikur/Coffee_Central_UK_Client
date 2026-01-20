import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <Link>
                    <button className="btn btn-ghost text-xl">Home</button>
                </Link>
                <Link to="/addCoffee">
                    <button className="btn btn-ghost text-xl">Add Coffee</button>
                </Link>
                <Link to="/signup">
                    <button className="btn btn-ghost text-xl">Sign Up</button>
                </Link>
                <Link to='/users'>
                    <button className="btn btn-ghost text-xl">Users Details </button>
                </Link>

            </div>
        </div>
    );
};

export default Header;