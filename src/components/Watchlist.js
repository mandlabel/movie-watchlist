import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {MovieBlock} from "./MovieBlock";

export const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);
    return (
        <div classname="watchlist-cont">
            <div classname="watchlist-title">
                <h1>My Watchlist: </h1>
            </div>
            <div className="watchlist-movies">
                {watchlist.length > 0 ? (
                    <div className="movies_watchlist_cont">
                        {watchlist.map((movie) => (
                            <MovieBlock movie={movie} key={movie.id} type="watchlist" />
                        ))}
                    </div>
                ) : (
                <h2 className="no-movies">No movies in your list!</h2>
                )}
            </div>
        </div> 
    )
}