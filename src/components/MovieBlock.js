// Egy film blokkja a watchlisten.
import React from 'react';
import {MovieControls} from './MovieControls'
export const MovieBlock = ({ movie }) => {
    return (
    <div className="overlay">
        <h3>{movie.title}</h3>
        {movie.poster_path ? (
            <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}`}
            />
        ) : (
            <div className="filler-poster" />
         )}

         <MovieControls movie={movie} />
    </div>
    )
}