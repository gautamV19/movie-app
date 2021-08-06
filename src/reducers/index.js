import { ADD_MOVIES } from "../actions";



const movies = function (state = [], action) {
    if (action.type === ADD_MOVIES) {
        console.log('add movies');
        return action.state;
    }
    return state;
}


export default movies;