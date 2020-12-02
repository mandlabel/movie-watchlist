import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export const Controls = ({movie, type}) => {
    const {removeMovie } = useContext(GlobalContext);
    return (
        <div className="moviecard-controls">
            { type === 'watchlist' && (
                <>
                <button className="ctrl-btn">
                    [Watched]
                </button>
                <button className="ctrl2-btn" onClick={() => removeMovie(movie.id)}>
                    [Delete]    
                </button>
                </>
            )}

            {type === 'watched' &&
            ( <>
                <button className="ctrl2-btn" onClick={() => removeMovie(movie.id)}>
                    [Delete]    
                </button>
            </>)}
        </div>
    )
}