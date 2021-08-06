// {
//     type: 'ADD_MOVIES';
//     movie: [m1, m2, m3];
// }
// {

// }



//action types
export const ADD_MOVIES = 'ADD_MOVIES';


//action creators
export function addMovies(data) {
      return {
            type: 'ADD_MOVIES',
            state: data
      };
}