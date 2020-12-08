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
            };
        default:
            return state;  
    }
};