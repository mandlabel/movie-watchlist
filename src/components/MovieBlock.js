// Egy film blokkja a watchlisten.
import React from 'react';
import {Controls} from './Controls'
export const MovieBlock = ({ movie, type }) => {
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

         <Controls type={type} movie={movie} />
    </div>
    )
}