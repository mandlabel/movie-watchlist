import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

// init
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
};
const watchedState = {
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

// create context
export const GlobalContext = createContext({...initialState, ...watchedState});

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, {...initialState, ...watchedState});

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state])

    // actions
    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    };
    const removeMovie = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    };
    const setMovieWatched = (movie) => {
        dispatch({ type: "SET_MOVIE_TO_WATCHED", payload: movie });
    }
    
    
    return ( 
    <GlobalContext.Provider value={{
        watchlist: state.watchlist, 
        watched: state.watched, 
        addMovieToWatchlist,
        removeMovie,
        setMovieWatched,
        }}>
        {props.children}
    </GlobalContext.Provider>
    )
}

