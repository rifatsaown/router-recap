import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center text-2xl'>
            <NavLink className='hover:font-bold' to='/'>Home</NavLink>
            <NavLink className='pl-4 hover:font-bold' to='/about'>About</NavLink>
            <NavLink className='pl-4 hover:font-bold' to='/cart'>Cart</NavLink>
        </div>
    );
};

export default Navbar;