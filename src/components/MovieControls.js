// Oldalon lévő gombok
import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

const getCurrentDate = (separator='/') => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}
export const MovieControls = ({movie}) => {
    const { watched, removeMovie, setMovieWatched } = useContext(GlobalContext);

    let themovieWatched = watched.find(o => o.id === movie.id);

    const watchedMovie = themovieWatched ? true : false;

    return (
        <div className="moviecard-control">
            <button className="ctrl-btn" onClick={() => removeMovie(movie.id)}>
                Delete Movie    
            </button>
            <p></p>
            <button className="ctrl2-btn" disabled={watchedMovie} onClick={() => setMovieWatched(movie)}>
                {watchedMovie ? 'Watched\non: ' + getCurrentDate(): 'Watch'}
            </button>
        </div>
        
        
    )
}