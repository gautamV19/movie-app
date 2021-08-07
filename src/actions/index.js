// {
//     type: 'ADD_MOVIES';
//     movie: [m1, m2, m3];
// }
// {

// }



//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REM_FAVOURITE = 'REM_FAVOURITE';


//action creators
export function addMovies(data) {
      return {
            type: ADD_MOVIES,
            state: data
      };
}
export function addFavourite(movie) {
      return {
            type: ADD_FAVOURITE,
            movie
      };
}
export function remFavourite(movie) {
      return {
            type: REM_FAVOURITE,
            movie
      };
}