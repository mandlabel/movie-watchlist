// Watchlist

import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {MovieBlock} from "./MovieBlock";

export const Watchlist = () => {
    const { watchlist, watched } = useContext(GlobalContext);
    return (
        <div classname="watchlist-cont">
            <div classname="watchlist-title">
                <h1>My Watchlist: </h1>
            </div>
            <button className="ctrl-btn" onClick={() => localStorage.clear()}>Clear The List</button>
            <div className="watchlist-movies">
                {watchlist.length || watched.length > 0 ? (
                    <div className="movies_watchlist_cont">
                        {watchlist.map((movie) => (
                            <MovieBlock movie={movie} key={movie.id}/>
                        ))}
                    </div>
                ) : (
                <h2 className="no-movies">No movies in your list! :(</h2>
                )}
            </div>
        </div> 
    )
}