
const movies = function (state = 'Jay Swaminarayan', action) {
    if (action === 'ADD_MOVIES') {
        return action.state;
    }
    return state;
}


export default movies;