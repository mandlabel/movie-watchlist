// Várható filmek.
import React, {useState, useEffect} from 'react';
import {NewMovies} from './NewMovies' 
import axios from 'axios';
export const Upcoming = () => {

    const [data,setResults] = useState({ hits: [] });

    useEffect(async () => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=ea096c9b33cc56d01c83a19b2d4debc9&language=en-US&page=1`,
        ).then((res) => res.json())
        .then(data => {
            if (!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
    });

    return (
        <div className="upcoming-movies">
            {data.length > 0 && (
                    <ul className="upcoming-list-main">
                    {data.map((movie) => (
                        <li className="upcoming-list" key={movie.id}>
                            <NewMovies movie={movie} type="upcoming"/> 
                        </li>))}
                    </ul>
                )}
        </div>
    )
}