import React from 'react';

export const Result = ({movie}) => {
    return (
        <div className="result-cont">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster" />
                )}
            </div>
        </div>
    )
}