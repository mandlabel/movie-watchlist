export default (state, action) =>
{
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST": // hozzáadja a watchlisthez
            return { 
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST": // kiszedjük watchlistből
            return {
                ...state,
                watchlist: state.watchlist.filter(
                (movie) => movie.id !== action.payload
                ),
                // töröljük, hogy láttuk
                watched: state.watched.filter(
                (movie) => movie.id !== action.payload
                ),
            };
        case "SET_MOVIE_TO_WATCHED": 
            return {
                ...state,
                watchlist: state.watchlist.filter(
                (movie) => movie.id !== action.payload
                ),
                watched: [action.payload, ...state.watched],   
                
            };
        default:
            return state;  
    }
};