import React from 'react';

//** Using store now */
import { data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
// import { render } from 'react-dom';

class App extends React.Component {
  componentDidMount() {
    // really you do API call here
    // then you call store.dispatch()

    const { store } = this.props;

    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    })

    store.dispatch({
      type: 'ADD_MOVIES',
      state: data
      // movies: data
    })

    console.log(store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">

        <Navbar />

        <div className="main">
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favourite</div>
          </div>

          <div className='list'>
            {/* <MovieCard /> */}
            {movies.map((movie, index) => (
              < MovieCard
                movie={movie}
                key={index}
              />
            ))}
          </div>

        </div>
      </div>
    )
  }
}

export default App;
