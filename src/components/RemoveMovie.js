// Oldalon lévő gombok
import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export const RemoveMovie = ({movie}) => {
    const { removeMovie } = useContext(GlobalContext);
    return (
        <div className="moviecard-control">
            <button className="ctrl-btn" onClick={() => removeMovie(movie.id)}>
                Delete Movie    
            </button>
        </div>
    )
}