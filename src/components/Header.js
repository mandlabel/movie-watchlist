import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
        <header>
        <ul className="nav-links">
            <li>
                <Link to="/watchlist">Watch List</Link>
            </li>
            <li>
                <Link to="/watched">Watched</Link>    
            </li>
            <li>
                <Link to="/add" className="btn">+ Add</Link>    
            </li>
        </ul>
        </header>
    )
}