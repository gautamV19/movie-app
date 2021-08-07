import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE, REM_FAVOURITE } from "../actions";

const intialMovieState = {
    list: [],
    favourite: []
}


const movies = (state = intialMovieState, action) => {
    switch (action.type) {
        case ADD_MOVIES:
            // console.log('add movies');
            return { ...state, list: action.state }
        case ADD_FAVOURITE:
            // console.log(action.movie.Title, 'added to Favourite movies');
            return { ...state, favourite: [...state.favourite, action.movie] }
        case REM_FAVOURITE:
            // console.log(action.movie.Title, 'Removed from Favourite movies');
            return { ...state, favourite: [...state.favourite.filter(myRemFav)] }
        default:
            break;
    }
    return state;
    function myRemFav(m) {
        return m !== action.movie;
    }
}

const intialSearchState = {
    results: []
}

const search = (state = intialSearchState, action) => {
    return state;
}

//** old way now I am using functions */
// const intialRootState = {
//     movies: intialMovieState,
//     search: intialSearchState
// }
// const root = (state = intialRootState, action) => {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }


//** using inbuilt method of Redux */
export default combineReducers({
    //** these are objects just used the short-hand */
    movies,
    search
})