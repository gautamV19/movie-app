import { ADD_MOVIES, ADD_FAVOURITE, REM_FAVOURITE } from "../actions";

const intialMovieState = {
    list: [],
    favourite: []
}



const movies = function (state = intialMovieState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            console.log('add movies');
            return { ...state, list: action.state }
        case ADD_FAVOURITE:
            console.log(action.movie.Title, 'added to Favourite movies');
            return { ...state, favourite: [...state.favourite, action.movie] }
        case REM_FAVOURITE:
            console.log(action.movie.Title, 'Removed from Favourite movies');
            return { ...state, favourite: [...state.favourite.filter(myRemFav)] }
        default:
            break;
    }
    return state;
    function myRemFav(m) {
        return m !== action.movie;
    }
}


export default movies;