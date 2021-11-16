import React from "react";
import {NavLink} from "react-router-dom";
import './NavBar.scss'



const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className="navbar__item"><NavLink to='/' className="navbar__link">Home</NavLink></li>
                <li className="navbar__item"><NavLink to='/favourites' className="navbar__link">Favourites</NavLink></li>
                <li className="navbar__item"><NavLink to='/cart' className="navbar__link">Cart</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar