import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
        <header>
        <ul className="nav-links">
            <li>
                <Link to="/watchlist" classname="nav-btn">Watch List</Link>
            </li>
            <li>
                <Link to="/add" className="nav-btn">Movie Search</Link>    
            </li>
        </ul>
        </header>
    )
}