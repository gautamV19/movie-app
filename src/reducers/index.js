import { ADD_MOVIES } from "../actions";

const intialMovieState = {
    list: [],
    favourite: []
}

const movies = function (state = intialMovieState, action) {
    if (action.type === ADD_MOVIES) {
        console.log('add movies');
        return {...state, list: action.state}
    }
    return state;
}


export default movies;