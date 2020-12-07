// Keresési eredmény
import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Result = ({movie}) => {
    const {
        addMovieToWatchlist, watchlist
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);
    const watchlistDisabled = storedMovie ? true : false;
    var buttontext = 'Add';
    if( watchlistDisabled === true) { buttontext = 'Added';
    } else {
        buttontext = 'Add';
    }
    return (
        <div className="result-cont">
            <div className="poster-cont">
                {movie.poster_path ? (
                    <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="no-img-content">
                        <img src={`https://london.webformance.hu/hirlevelek/elt/index.php?img=di.bak/unknown.png`}
                        alt={`Unknown Poster`} />
                    </div>
                )}
            </div>
            <div className="info">
                <div className="desc">
                    <h2 className="title">{movie.title}</h2>
                    <h3 className="release">
                        Release: {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
                    </h3>
                    <h3 className="rating">
                        Rating: {movie.vote_average}
                    </h3>
                    <h5 className="overview">
                        {movie.overview}
                    </h5>
                    
                </div>

                <div className="controls">
                    <button className="ctrl-btn" disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)}>
                        {buttontext}
                    </button>
                </div>
            </div>
        </div>
    )
}